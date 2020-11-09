<?php
include('idd_array.php'); //an array of all non-comment lines in the IDD file

//used this to create object_count_json
//create a javascript array used to count the number of each object type and display the counts in the IDF Editor class list div
//whitespace in the strings makes the output indented and pretty
$first_object = True; //used to place the declaration of the json var, then commas and newlines between elements
foreach($idd_array as $sub_array) { //loop through the $idd_array where each line is a $sub_array
    if(count($sub_array) == 1) { //this line could be N53, Version, unique-object, etc
        if(ctype_upper(substr($sub_array[0],0,1)) and !is_numeric(substr($sub_array[0],1))) { //the line is a object type name because only objects have a first capital letter and a second letter that isn't a number
            if($first_object) { //the html line is currenly blank
                echo 'var object_count_json = {'; //declare the javascript JSON and start syntax
                $first_object = False; //don't do this again
            } else { //not the first object type name encountered
                echo ','; //put a comma between this object type name and the previous one
            }
            echo '"' . $sub_array[0] . '":0'; //the object type name and there are 0 of this object type because the user hasn't uploaded an IDF when the page first opens
        }
    }
}
echo '};' . PHP_EOL; //close off the JSON declaration

//used this to create class_list.html
//finds all the group names and object type names
//whitespace in the strings makes the output indented and pretty
foreach($idd_array as $sub_array) { //loop through the $idd_array where each line is a $sub_array
    if($sub_array[0] == 'group') { //the group names are easy to identify with ['group','<GROUP NAME>']
        echo '                <br id="' . $sub_array[1] . '_br">' . PHP_EOL; //html br, with id to be able to hide, with html source newline to look pretty
        echo '                <div id="' . $sub_array[1] . '">' . $sub_array[1] . '</div>' . PHP_EOL; //div with name of group inside
        echo '                <div id="' . $sub_array[1] . '_dashes">------------------</div>' . PHP_EOL; //div with dashes under group name
    } elseif(count($sub_array) == 1) { //this line could be N53, Version, unique-object, etc
        if(ctype_upper(substr($sub_array[0],0,1)) and !is_numeric(substr($sub_array[0],1))) { //the line is a object type name because only objects have a first capital letter and a second letter that isn't a number
            echo '                <div id="' . $sub_array[0] . '" onclick="object_type_clicked(this.id)">[----] ' . $sub_array[0] . '</div>' . PHP_EOL; //put in the div with the count [----] display and object type name
        }
    }
}
echo '                <br>' . PHP_EOL; //add a html br and make a newline to make the output pretty
?>

<script>
// used this to create idd_json, object_fields_units_json, reference_class_name_json, and reference_object_field_json
var idd_lines = <?php echo json_encode($idd_array); ?>;
var idd_json = {};
var object_fields_units_json = {};
var reference_class_name_json = {};
var reference_object_field_json = {};

var current_object = "";
var current_field = "";
for(var i = 0; i < idd_lines.length; i++) {
    if(idd_lines[i].length == 1 && /^[A-Z]/.test(idd_lines[i][0][0]) && !/^[0-9]/.test(idd_lines[i][0][1])) { //line is an object type name
        current_object = idd_lines[i][0]; //we've entered into a new object type
        idd_json[current_object] = {}; //added new object type to idd_json with it's own json to fill
        object_fields_units_json[current_object] = []; //added new object type to object_fields_units_json with it's own 2-dimensional array to fill
    } else if(idd_lines[i].length == 1 && /^[A-Z]/.test(idd_lines[i][0][0]) && /^[0-9]/.test(idd_lines[i][0][1])) { //line is a blank A54 or N13
        current_field = idd_lines[i][0];
        idd_json[current_object][current_field] = {};
        object_fields_units_json[current_object].push([current_field,""]); //blank blank A54 or N13 doesn't have units
    } else if(idd_lines[i].length == 3 && idd_lines[i][1] == "field") { //line is a named field
        current_field = idd_lines[i][2];
        idd_json[current_object][current_field] = {};
        object_fields_units_json[current_object].push([current_field,""]); //field may or may not have units defined, so set units to "" which can be overwritten
    } else if(idd_lines[i][0] == "memo") { //multiline object specific comment
        if(idd_json[current_object].hasOwnProperty(idd_lines[i][0])) { //memo comment already exists in current_object json 
            idd_json[current_object][idd_lines[i][0]] += "<br>" + idd_lines[i][1];
        } else { //make new memo comment in current_object json
            idd_json[current_object][idd_lines[i][0]] = idd_lines[i][1];
        }
    } else if(idd_lines[i][0] == "reference-class-name") { //used for object type dropdown menus
        if(reference_class_name_json.hasOwnProperty(idd_lines[i][1])) { //reference class list already exists in current_object json 
            reference_class_name_json[idd_lines[i][1]].push(current_object);
        } else { //make new reference class list in current_object json
            reference_class_name_json[idd_lines[i][1]] = [current_object];
        }
    } else if(idd_lines[i][0] == "unique-object" || idd_lines[i][0] == "required-object" || idd_lines[i][0] == "min-fields" || idd_lines[i][0] == "obsolete" || idd_lines[i][0] == "extensible" || idd_lines[i][0] == "begin-extensible" || idd_lines[i][0] == "format") {
        //other object specific comments don't seem to do anything or are about modifying the IDF text and are ignored
    } else if(idd_lines[i][0] == "note") { //multiline field specific comment
        if(idd_json[current_object][current_field].hasOwnProperty(idd_lines[i][0])) { //note comment already exists in current_object json 
            idd_json[current_object][current_field][idd_lines[i][0]] += "<br>" + idd_lines[i][1];
        } else { //make new note comment in current_object json
            idd_json[current_object][current_field][idd_lines[i][0]] = idd_lines[i][1];
        }
    } else if(idd_lines[i][0] == "units" || idd_lines[i][0] == "minimum" || idd_lines[i][0] == "minimum>" || idd_lines[i][0] == "maximum" || idd_lines[i][0] == "maximum<" || idd_lines[i][0] == "default" || idd_lines[i][0] == "external-list" || idd_lines[i][0] == "type") { //field comments paired with value
        idd_json[current_object][current_field][idd_lines[i][0]] = idd_lines[i][1];
        if(idd_lines[i][0] == "units") { //add units string to object_fields_units_json
            object_fields_units_json[current_object][object_fields_units_json[current_object].length-1][1] = idd_lines[i][1]; //object_fields_units_json[current_object][last index][1] = units string
        }
    } else if(idd_lines[i][0] == "required-field" || idd_lines[i][0] == "autosizable" || idd_lines[i][0] == "autocalculatable") { //field comment present
        idd_json[current_object][current_field][idd_lines[i][0]] = true;
    } else if(idd_lines[i][0] == "reference") { //used for dropdown menus, usually object names but not always
        if(reference_object_field_json.hasOwnProperty(idd_lines[i][1])) { //reference key already exists in current_object json 
            reference_object_field_json[idd_lines[i][1]].push([current_object,current_field]);
        } else { //make new reference key in current_object json
            reference_object_field_json[idd_lines[i][1]] = [[current_object,current_field]];
        }
    } else if(idd_lines[i][0] == "key" || idd_lines[i][0] == "object-list") { //array of paired values
        if(idd_json[current_object][current_field].hasOwnProperty(idd_lines[i][0])) { //key comment already exists in current_object json 
            idd_json[current_object][current_field][idd_lines[i][0]].push(idd_lines[i][1]);
        } else { //make new key comment in current_object json
            idd_json[current_object][current_field][idd_lines[i][0]] = [idd_lines[i][1]];
        }
    } else if(idd_lines[i][0] == "begin-extensible" || idd_lines[i][0] == "ip-units" || idd_lines[i][0] == "unitsBasedOnField" || idd_lines[i][0] == "deprecated" || idd_lines[i][0] == "retaincase") {
        //other field specific comments don't seem to do anything or are about modifying the IDF text and are ignored
    } else if(idd_lines[i][0] == "group") { //other text to ignore for the objects and fields
        //do nothing
    } else { //did I miss anything
        alert("Problem: " + idd_lines[i][0] + " isn't in the list of object or field specific comments.")
    }
}

//how to output the text versions of the objects
//console.log('var idd_json = ' + JSON.stringify(idd_json) + ';');
//console.log('var object_fields_units_json = ' + JSON.stringify(object_fields_units_json) + ';');
//console.log('var reference_class_name_json = ' + JSON.stringify(reference_class_name_json) + ';');
//console.log('var reference_object_field_json = ' + JSON.stringify(reference_object_field_json) + ';');
</script>