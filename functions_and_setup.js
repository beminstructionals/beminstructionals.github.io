//the ShowPage functions display different stuff depending on what button is pushed at the top of the webpage
//this allows for a single webpage which means I don't have to transfer giant arrays between different webpages
//simply displays the div for that page_index and hides the divs for all the other pages
function ShowPage(page_index) {
    document.getElementById("IDF Editor div").style.display = "none";
    document.getElementById("Tutorials div").style.display = "none";
    document.getElementById("Licenses Page div").style.display = "none";
    document.getElementById("FAQ div").style.display = "none";
    
    if(page_index == 0) {
        document.getElementById("IDF Editor div").style.display = "block";
    } else if(page_index == 3) {
        document.getElementById("Tutorials div").style.display = "block";
    } else if(page_index == 4) {
        document.getElementById("Licenses Page div").style.display = "block";
    } else if(page_index == 5) {
        document.getElementById("FAQ div").style.display = "block";
    }
}

function open_geometry_tab() {
    sessionStorage.setItem("geometry_vw", geometry_vw);
    sessionStorage.setItem("geometry_vh", geometry_vh);
    sessionStorage.setItem("idf_array", JSON.stringify(idf_array));
    window.open("https://beminstructionals.wiki/geometry_viewer.html","IDF Geometry Viewer");
}

function process_uploaded_file(input) {
    let file = input.files[0];
    uploaded_file_name = file.name;
    
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function() {
        var file_text_string = reader.result;
        var file_text_array = file_text_string.split("\n");
        for(var line_index in file_text_array) {
            file_text_array[line_index] = file_text_array[line_index].trim(); //remove leading and trailing whitespace
            
            if(file_text_array[line_index][0] == "!") { //comment line
                file_text_array[line_index] = "";
            }
            
            file_text_array[line_index] = file_text_array[line_index].split("!")[0]; //remove field names
            file_text_array[line_index] = file_text_array[line_index].trim(); //trim again
        }
        file_text_array = file_text_array.filter(line => line); //removes "" array elements
        
        file_text_string = file_text_array.join(""); //combine into one long string
        file_text_array = file_text_string.split(";"); //split into objects
        for(var object_index in file_text_array) {
            file_text_array[object_index] = file_text_array[object_index].split(","); //split objects into subarrays
        }
        file_text_array.pop(); //remove the very last element because it's an empty object
        
        idf_array = file_text_array; //make available outside of function
        
        //initializes all the object counts in object_count_json and the class list
        update_object_type_counts();
        populate_table(currently_highligted_object_type);
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

//change what documentation is displayed
function documentation_source_button() {
    if(documentation_choice == "IDD") {
        documentation_choice = "IO Ref";
    } else {
        documentation_choice = "IDD";
    }
}

function new_object_button() {
    idf_array_changing('New Object ' + currently_highligted_object_type); //add current idf_array to undo_array
    var new_object_array = [currently_highligted_object_type];
    
    //put in the default values
    var field_index_key;
    for(var i = 0; i < object_fields_units_json[currently_highligted_object_type].length; i++) {
        field_index_key = object_fields_units_json[currently_highligted_object_type][i][0];
        if(idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("default")) {
            new_object_array[i+1] = idd_json[currently_highligted_object_type][field_index_key]["default"];
        }
    }
    
    idf_array.push(new_object_array); //add new object to idf_array;
    update_object_type_counts();
    populate_table(currently_highligted_object_type);
}

function duplicate_objects_button() {
    copy_objects_button();
    paste_objects_button();
}

function download_IDF() {
    var download_string = '';
    for(var i = 0; i < idf_array.length; i++) { //go through the IDF objects
        if(idf_array[i].length > 0) {
            download_string += idf_array[i].join(",\n") + ";\n\n";
        }
    }
    
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(download_string));
    element.setAttribute('download', uploaded_file_name);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function toggle_unused_objects() {
    if(unused_objects_display == "block") {
        unused_objects_display = "none";
    } else {
        unused_objects_display = "block";
    }
    
    filter_objects();
}

//given the object type name, set the count in the OBJECT_count div
function set_object_type_count(object_type) {
    var count = object_count_json[object_type];
    var count_div = document.getElementById(object_type);
    if(count == 0) {
        count_div.innerHTML = '[----] ' + object_type.toString();
    } else if(count < 10) {
        count_div.innerHTML = '[000' + count.toString() + '] ' + object_type.toString();
    } else if(count < 100) {
        count_div.innerHTML = '[00' + count.toString() + '] ' + object_type.toString();
    } else if(count < 1000) {
        count_div.innerHTML = '[0' + count.toString() + '] ' + object_type.toString();
    } else {
        console.log(object_type);
        count_div.innerHTML = '[' + count.toString() + '] ' + object_type.toString();
    }
}

//recalculate all the object counts
function update_object_type_counts() {
    for(key in object_count_json) { //reset all the counts to 0
        object_count_json[key] = 0;
    }
    for(var i = 0; i < idf_array.length; i++) { //go through all the objects in the uploaded IDF
        object_count_json[idf_array[i][0]] += 1; //increment object type count
    }
    for(var object_type in object_count_json) { //go through all the object type names
        set_object_type_count(object_type); //set the count in the OBJECT_count div
    }
}

//only allow legal class type characters in the filter object text box
function filter_objects_legal_characters(event) {
    if((event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z') || event.key == ':') { //character is a-z or A-Z or :
        
    } else {
        event.preventDefault();
    }
    
}

//allows changing of the heights of the class list/documentation div and object table div
//alters URL parameters for IDF upload
function set_IDF_editor_div_heights (top_vh,bottom_vh,geometry_vw,geometry_vh) {
    document.getElementById("top div").style.height = top_vh.toString() + "vh";
    document.getElementById("IDF table div").style.height = bottom_vh.toString() + "vh";
}

//triggers when a name in the class list is clicked
function object_type_clicked(object_type) {
    document.getElementById(currently_highligted_object_type).style.backgroundColor = "white"; //changes the background of the previously selected object type name back to white
    document.getElementById(object_type).style.backgroundColor = "beige"; //changes the background of the newly clicked on object type name for the user's benefit
    currently_highligted_object_type = object_type;
    
    populate_table(object_type); //repopulates the table of field names, units, and individual object field values
    refresh_documentation(0); //updates the documentation div with the first field of the object for IDD or refreshes
}

//redo object table when the checkbox changes state
function show_all_object_fields_checkbox() {
    populate_table(currently_highligted_object_type);
}

function filter_objects() {
    //filter the group names, br line, and dashed line based on the Toggle Unused Objects unused_objects_display
    if(filter_input.value.length == 0) { //no text in filter field
        for(var i = 0; i < group_names_array.length; i++) {
            document.getElementById(group_names_array[i] + "_br").style.display = unused_objects_display;
            document.getElementById(group_names_array[i]).style.display = unused_objects_display;
            document.getElementById(group_names_array[i] + "_dashes").style.display = unused_objects_display;
        }
    } else { //don't display group names when there is text in the filter field
        for(var i = 0; i < group_names_array.length; i++) {
            document.getElementById(group_names_array[i] + "_br").style.display = "none";
            document.getElementById(group_names_array[i]).style.display = "none";
            document.getElementById(group_names_array[i] + "_dashes").style.display = "none";
        }
    }
    
    for(object_type in object_count_json) {
        //filter object types in class list based on the Toggle Unused Objects unused_objects_display
        if (object_count_json[object_type] > 0) {
            document.getElementById(object_type).style.display = "block";
        } else {
            document.getElementById(object_type).style.display = unused_objects_display;
        }
        //futher filter based on the contents of the filter object text box
        if(!object_type.toLowerCase().includes(filter_input.value.toLowerCase())) { //there's text in the filter object text box to filter by
            document.getElementById(object_type).style.display = "none";
        }
    }
}

function return_field_index(object_type,field_name) {
    for(var i = 0; i < object_fields_units_json[object_type].length; i++) {
        if(object_fields_units_json[object_type][i][0] == field_name) {
            return i+1;
        }
    }
    return false;
}

//function is always called when a type in the clase list is clicked or the documentation toggle button is clicked
//function is called when a field row is clicked in the table and when documentation_choice is "IDD" since the iframe doesn't need to be refreshed when a field is clicked
function refresh_documentation(field_index) {
    if(documentation_choice == "IDD") {
        var idd_documentation_string = "Object Description: ";
        if(idd_json[currently_highligted_object_type].hasOwnProperty("memo")) {
            idd_documentation_string += idd_json[currently_highligted_object_type]["memo"];
        }
        idd_documentation_string += "<br><br>Field Description: ";
        var field_index_key = object_fields_units_json[currently_highligted_object_type][field_index][0];
        if(idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("note")) {
            idd_documentation_string += idd_json[currently_highligted_object_type][field_index_key]["note"] + "<br>";
        }
        //ID: line skipped
        if(idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("default")) {
            idd_documentation_string += "<br>Default: " + idd_json[currently_highligted_object_type][field_index_key]["default"];
        }
        if(idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("minimum") || idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("minimum>") || idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("maximum") || idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("maximum<")) {
            idd_documentation_string += "<br>Range: ";
            if(idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("minimum")) {
                idd_documentation_string += idd_json[currently_highligted_object_type][field_index_key]["minimum"] + " <= ";
            }
            if(idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("minimum>")) {
                idd_documentation_string += idd_json[currently_highligted_object_type][field_index_key]["minimum>"] + " < ";
            }
            idd_documentation_string += "X";
            if(idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("maximum")) {
                idd_documentation_string += " <= " + idd_json[currently_highligted_object_type][field_index_key]["maximum"];
            }
            if(idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("maximum<")) {
                idd_documentation_string += " < " + idd_json[currently_highligted_object_type][field_index_key]["maximum<"];
            }
        }
        
        if(idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("autosizable")) {
            idd_documentation_string += "<br>autosize";
        }
        if(idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("autocalculatable")) {
            idd_documentation_string += "<br>autocalculate";
        }
        
        if(idd_json[currently_highligted_object_type][field_index_key].hasOwnProperty("type")) {
            if(idd_json[currently_highligted_object_type][field_index_key]["type"] == "integer") {
                idd_documentation_string += "<br>Must be an integer.";
            } else if(idd_json[currently_highligted_object_type][field_index_key]["type"] == "real") {
                idd_documentation_string += "<br>Must be a number.";
            } else if(idd_json[currently_highligted_object_type][field_index_key]["type"] == "alpha") {
                idd_documentation_string += "<br>Must be an alphanumeric value.";
            } else if(idd_json[currently_highligted_object_type][field_index_key]["type"] == "choice") {
                idd_documentation_string += "<br>Choices:";
                for(var i = 0; i < idd_json[currently_highligted_object_type][field_index_key]["key"].length; i++) {
                    idd_documentation_string += "<br>" + idd_json[currently_highligted_object_type][field_index_key]["key"][i];
                }
            } else if(idd_json[currently_highligted_object_type][field_index_key]["type"] == "object-list") {
                idd_documentation_string += "<br>Choices:";
                var list_names_array = idd_json[currently_highligted_object_type][field_index_key]["object-list"];
                for(list_name of list_names_array) {
                    if(reference_class_name_json.hasOwnProperty(list_name)) {
                        for(var i = 0; i < reference_class_name_json[list_name].length; i++) {
                            idd_documentation_string += "<br>" + reference_class_name_json[list_name][i];
                        }
                    } else if(reference_object_field_json.hasOwnProperty(list_name)) {
                        var field_index;
                        for(var i = 0; i < reference_object_field_json[list_name].length; i++) {
                            field_index = return_field_index(reference_object_field_json[list_name][i][0],reference_object_field_json[list_name][i][1]);
                            for(var j = 0; j < idf_array.length; j++) {
                                if(idf_array[j][0] == reference_object_field_json[list_name][i][0]) {
                                    idd_documentation_string += "<br>" + idf_array[j][field_index];
                                }
                            }
                        }
                    } else {
                        idd_documentation_string += "<br>Something unexpected happenend! Be sublime and report this.";
                    }
                }
            } else if(idd_json[currently_highligted_object_type][field_index_key]["type"] == "external-list") {
                if(idd_json[currently_highligted_object_type][field_index_key]["external-list"] == "autoRDDvariable") {
                    idd_documentation_string += "<br>Pick from the RDD or MDD files.";
                } else if(idd_json[currently_highligted_object_type][field_index_key]["external-list"] == "autoRDDmeter") {
                    idd_documentation_string += "<br>Pick from the RDD file.";
                } else if(idd_json[currently_highligted_object_type][field_index_key]["external-list"] == "autoRDDvariableMeter") {
                    idd_documentation_string += "<br>Pick from the MDD file.";
                } else {
                    idd_documentation_string += "<br>Something unexpected happenend! Please be an upstanding citizen and report this.";
                }
            } else if(idd_json[currently_highligted_object_type][field_index_key]["type"] == "node") {
                idd_documentation_string += "<br>Must be a node name.";
            } else {
                idd_documentation_string += "<br>Something unexpected happenend! Please be a good person and report this.";
            }
        }

        document.getElementById("Documentation IDD div").innerHTML = idd_documentation_string;
    } else if(documentation_choice == "IO Ref") {
        document.getElementById("Documentation IO Ref iframe").src = "InputOutputReference.pdf#view=FitH&nameddest=" + currently_highligted_object_type; //view=FitH to stretch the pdf to the div and nameddest=OBJECT is a bookmark for the selected objec type
        document.getElementById("Documentation IO Ref iframe").contentWindow.location.reload(); //iframe must be refreshed to navigate to the pdf bookmark page
    }
}

function populate_table(object_type) {
    var minimum_table_rows = 0; //what't the length of the longest object in the idf_array of this type
    var object_type_indices = []; //find the indices of all object_type objects and put them in this array
    for(var i = 0; i < idf_array.length; i++) { //go through the IDF objects
        if(idf_array[i][0] == object_type) {
            object_type_indices.push(i); //add object index to array
            minimum_table_rows = Math.max(minimum_table_rows,idf_array[i].length)
        }
    }
    
    var table_rows; //how many rows will be displayed in the table
    if(document.getElementById("show_all_object_fields_checkbox_id").checked == true || object_fields_units_json[object_type].length < 300) { //display every object field row
        table_rows = object_fields_units_json[object_type].length;
    } else { //display enought rows for the longest object of that type in the idf_array
        table_rows = minimum_table_rows;
    }
    
    //creates the table with headers, field names, and units to be inserted into the left cell of the parent table
    var fields_units_tr_string_array = new Array(table_rows); //contains only the field names and units tr strings, not the header
    for(var i = 0; i < table_rows; i++) { //create tr string for each field name and units
        if(idd_json[object_type][object_fields_units_json[object_type][i][0]].hasOwnProperty("required-field")) {
            fields_units_tr_string_array[i] = '<tr><th style="color: DodgerBlue;">' + object_fields_units_json[object_type][i][0] + '</th><th>' + object_fields_units_json[object_type][i][1] + '</th></tr>';
        } else {
            fields_units_tr_string_array[i] = '<tr><th>' + object_fields_units_json[object_type][i][0] + '</th><th>' + object_fields_units_json[object_type][i][1] + '</th></tr>'; //row string for i'th field and i'th units of object type
        }
    }
    //add the header and join into one string
    var fields_units_table_string = '<table id="fields_units_table_id" style="border-collapse: collapse; border: 1px solid black; background-color: LightGray;"><tr><th>Field</th><th>Units</th></tr>' + fields_units_tr_string_array.join('') + '</table>';
    
    //creates the table with headers field values to be inserted into the right cell of the parent table
    if(object_type_indices.length > 0) { //only make the table cells if there are objects of this type
        var objects_values_array = new Array(table_rows) //first index is row and second index is column, contains all field values of object_type in idf_array, not the header
        for(var i = 0; i < objects_values_array.length; i++) {
            objects_values_array[i] = new Array(object_type_indices.length); //add second dimension
            objects_values_array[i].fill(''); //default value in case field in object subarray is not defined
        }
        
        //populate objects_values_array with the field values from each subarray of object_type from the idf_array, ordering j then i so that each object subarray is accessed once to not jump around memory too much
        for(var j = 0; j < object_type_indices.length; j++) { //j'th object index in the idf_array, j'th column of objects_values_array
            for(var i = 0; i+1 < idf_array[object_type_indices[j]].length; i++) { //i'th row of table, i'th field value, do not exceed the number of defined field values in the object subarray
                objects_values_array[i][j] = idf_array[object_type_indices[j]][i+1]; //i'th row, j'th column of table = idf_array[j'th object subarry][field i], [i+1] because [0] is the object type name in the subarray
            }
        }
        //combine each row into a tr string
        for(var i = 0; i < objects_values_array.length; i++) {
            if(i % 2 == 1) { //even odd row coloring
                objects_values_array[i] = '<tr style="background-color: WhiteSmoke;"><td contenteditable="true">' + objects_values_array[i].join('</td><td contenteditable="true">') + '</td></tr>';
            } else {
                objects_values_array[i] = '<tr><td contenteditable="true">' + objects_values_array[i].join('</td><td contenteditable="true">') + '</td></tr>';
            }
        }
         //add the header and join into one string
        var objects_values_table_string = '<table id="objects_table_id" style="border-collapse: collapse; border: 1px solid black;"><tr style="background-color: LightGray;"><td>Object' + object_type_indices.join('</td><td>Object') + '</td></tr>' + objects_values_array.join('') + '</table>';
    } else { //make an empty table
        var objects_values_table_string = '<table id="objects_table_id" style="border-collapse: collapse; border: 1px solid black;"><tr style="background-color: LightGray;"></table>';
    }
    //insert the parent table html string to insert into the div
    document.getElementById("IDF table div").innerHTML = '<table style="border-spacing: 0px;"><th style="position: -webkit-sticky; position: sticky; left: 0px; border: 0px; padding: 0px;">' + fields_units_table_string + '</th><td style="border: 0px; padding: 0px;">' + objects_values_table_string + '</td></table>';
    
    //add onclick function to all the th cells in the fields units table and all the td cells in the objects table
    var cells;
    cells = document.getElementById("fields_units_table_id").getElementsByTagName("th");
    for (var i = 0; i < cells.length; i++) { 
        cells[i].onclick = function(){table_cell_clicked(this);};
    }
    cells = document.getElementById("objects_table_id").getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) { 
        cells[i].onclick = function(){table_cell_clicked(this);};
    }
    
    //highlight cells if the field value is invalid
    var rows = document.getElementById("objects_table_id").rows;
    if(rows.length > 1) { //empty Object## row exisits, but none of the field rows
        for (var i = 1; i < table_rows; i++) { //skip the Object## row and don't check the rows that aren't displayed
            cells = rows[i].cells;
            for (var j = 0; j < cells.length; j++) {
                if(valid_field_contents(object_type,i-1,cells[j].innerHTML)) {
                    if(i % 2 == 1) { //even odd row coloring
                        cells[j].style.background = "White";
                    } else {
                        cells[j].style.background = "WhiteSmoke";
                    }
                } else {
                    cells[j].style.background = "Orange";
                }
            }
        }
    }
}

//flips the documentation source between "IDD" and "IO Ref" and hids/unhides the div or iframe
function documentation_source_button() {
    if(documentation_choice == "IDD") {
        documentation_choice = "IO Ref";
        document.getElementById("Documentation IDD div").style.display = "none";
        document.getElementById("Documentation IO Ref iframe").style.display = "block";
    } else {
        documentation_choice = "IDD";
        document.getElementById("Documentation IDD div").style.display = "block";
        document.getElementById("Documentation IO Ref iframe").style.display = "none";
    }
    
    refresh_documentation(0);
}

function highlighed_object_cells() {
    var highlighted_object_indices = [];
    var header_cells = document.getElementById("objects_table_id").rows[0].cells;
    for(var i = 0; i < header_cells.length; i++) {
        if(header_cells[i].style.getPropertyValue("background-color") == "dodgerblue") { //highlighted
            highlighted_object_indices.push(parseInt(header_cells[i].innerHTML.substring(6))); //get number in "Object##"
        }
    }
    return highlighted_object_indices;
}

//copy puts a string for currently selected objects on the clipboard in the format the IDF Editor uses when copying one or multiple objects
//paste will read the string from the clipboard and insert those objects into the idf_array
//IDF,Zone,Dining,0.0000,0.0000,0.0000,0.0000,1,1.0000,3.0488,1133.3855,autocalculate,,,Yes;Zone,Kitchen,0.0000,0.0000,0.0000,0.0000,1,1.0000,3.0488,425.0187,autocalculate,,,Yes;
function copy_objects_button() {
    var copy_paste_string;
    var highlighted_object_indices = highlighed_object_cells();
    if(highlighted_object_indices.length > 0) {
        copy_paste_string = "IDF,";
        for(var i = 0; i < highlighted_object_indices.length; i++) {
            copy_paste_string += idf_array[highlighted_object_indices[i]].join(',') + ";";
        }
    }
    navigator.clipboard.writeText(copy_paste_string);
}

function paste_objects_button() {
    navigator.clipboard.readText().then(text => {
        if(text.substring(0, 4) == "IDF,")
        {
            text = text.substring(4) //take off "IDF,""
            object_strings_array = text.split(';');
            object_strings_array.pop(); //remove last element because split creates an empty array element after the last ; in text
            currently_highligted_object_type = object_strings_array[0].split(',')[0];
            
            idf_array_changing('Paste/Duplicate ' + object_strings_array.length + ' ' + currently_highligted_object_type + ' objects'); //add current idf_array to undo_array
            
            for(var i = 0; i < object_strings_array.length; i++) {
                idf_array.push(object_strings_array[i].split(','));
            }
            
            update_object_type_counts();
            populate_table(currently_highligted_object_type);
        } else {
            console.log("Invalid Clipboard Contents: " + text);
        }
    }).catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    });
}

function delete_objects_button() {
    var highlighted_object_indices_reverse = highlighed_object_cells();
    highlighted_object_indices_reverse.reverse(); //must reverse indices order to descending beca removing an element changes all greater indices
    
    if(highlighted_object_indices_reverse.length > 0) {
        idf_array_changing('Delete ' + highlighted_object_indices_reverse.length + ' ' + currently_highligted_object_type + ' objects'); //add current idf_array to undo_array
        
        for(var i = 0; i < highlighted_object_indices_reverse.length; i++) {
            idf_array.splice(highlighted_object_indices_reverse[i],1); //removes highlighted_object_indices_reverse[i]'th element
        }
        
        update_object_type_counts();
        populate_table(currently_highligted_object_type);
    }
}

function show_find_replace_div() {
    if(document.getElementById('find replace div').style.display == "block") {
        document.getElementById('find replace div').style.display = "none";
    } else {
        document.getElementById('find replace div').style.display = "block";
    }
    
    find_button();
}

function find_button() {
    var find_string = document.getElementById('find_input').value;
    if(find_string.length > 0) {
        var inner_table_string = '<tr style="background-color: LightGray;"><th><input id="find_select_all_checkbox" type="checkbox" onclick="find_select_all_checkbox_clicked()"></th><th>Object Type</th><th>Name(First Field)</th><th>Field</th><th>Value</th><th></th></tr>';
        var exact_contents_bool = document.getElementById('match_entire_field_value_contents_checkbox').checked;
        var row_even_bool = true;
        for(var i = 0; i < idf_array.length; i++) {
            for(var j = 1; j < idf_array[i].length; j++) { //skip the object type name
                if( ( exact_contents_bool && idf_array[i][j].toLowerCase() == find_string.toLowerCase() ) || ( !exact_contents_bool && idf_array[i][j].toLowerCase().includes(find_string.toLowerCase()) ) ) {
                    if(row_even_bool) {
                        inner_table_string += '<tr>';
                    } else {
                        inner_table_string += '<tr style="background-color: WhiteSmoke;">';
                    }
                    row_even_bool = !row_even_bool;
                    inner_table_string += '<td><input id="find_select_checkbox_' + i + '_' + j + '" class="find_replace_table_checkbox_class" type="checkbox"></td><td>' + idf_array[i][0] + '</td><td>' + idf_array[i][1] + '</td><td>' + object_fields_units_json[idf_array[i][0]][j-1][0] + '</td><td>' + idf_array[i][j] + '</td><td><button onclick="goto_button(' + i + ',' + j + ')">Go To</button></td></tr>';
                }
            }
        }
        document.getElementById("find replace table").innerHTML = inner_table_string;
    }
}

function find_select_all_checkbox_clicked() {
    var select_all_bool = document.getElementById("find_select_all_checkbox").checked;
    var find_table_checkboxes = document.getElementsByClassName("find_replace_table_checkbox_class");
    for(var i = 0; i < find_table_checkboxes.length; i++) {
        find_table_checkboxes[i].checked = select_all_bool;
    }
}

function enable_disable_undo_redo_buttons() {
    if(undo_array.length == 0) {
        document.getElementById("undo_button_id").disabled = true;
    } else {
        document.getElementById("undo_button_id").disabled = false;
    }
    
    if(redo_array.length == 0) {
        document.getElementById("redo_button_id").disabled = true;
    } else {
        document.getElementById("redo_button_id").disabled = false;
    }
}

function replace_button() {
    var idf_array_changed_bool = false;
    var find_table_checkboxes = document.getElementsByClassName("find_replace_table_checkbox_class");
    for(var i = 0; i < find_table_checkboxes.length; i++) { //go through all the checkboxes
        if(find_table_checkboxes[i].checked) { //checkbox is checked
            idf_array_changed_bool = true; //something changed in the idf_array
            break;
        }
    }
    
    if(idf_array_changed_bool) { //something changed in the idf_array
        var find_string = document.getElementById('find_input').value;
        var replace_string = document.getElementById('replace_input').value;
        var replace_count = 0;
        for(var i = 0; i < find_table_checkboxes.length; i++) { //go through all the checkboxes
            if(find_table_checkboxes[i].checked) { //checkbox is checked
                replace_count += 1;
            }
        }
        
        idf_array_changing('Replace ' + replace_count + ' occurrences of ' + find_string + ' with ' + replace_string); //update undo and redo arrays
        
        var object_index;
        var field_index;
        var checkbox_id;
        var regex_object;
        for(var i = 0; i < find_table_checkboxes.length; i++) { //go through all the checkboxes
            if(find_table_checkboxes[i].checked) { //checkbox is checked
                //id = find_select_checkbox_ object_index _ field_index
                checkbox_id = find_table_checkboxes[i].id;
                checkbox_id = checkbox_id.split('_');
                object_index = checkbox_id[checkbox_id.length-2];
                field_index = checkbox_id[checkbox_id.length-1];
                regex_object = new RegExp(find_string,"gi");
                console.log(idf_array[object_index][field_index]);
                idf_array[object_index][field_index] = idf_array[object_index][field_index].replace(regex_object,replace_string); //global, case-insensitive replacement
                console.log(idf_array[object_index][field_index]);
            }
        }
        find_button(); //regenrate the find table
        populate_table(currently_highligted_object_type);
    }
}

//called when th or td clicked in table
function table_cell_clicked(dom_element) {
    var tag = dom_element.tagName; //"TH" or "TD"
    var column = dom_element.cellIndex;
    var row = dom_element.parentNode.rowIndex;
    
    if(tag == "TD" && row == 0) { //clicked on one of the Object## cells and change the background color
        if(dom_element.style.getPropertyValue("background-color") == "dodgerblue") { //difficult to get working, lowercase and this property access does work
            dom_element.style.background = "lightgray";
        } else {
            dom_element.style.background = "dodgerblue";
        }
        
    }
    
    if(row > 0 && documentation_choice == "IDD") { //clicked on a not header cell in either table and only refresh IDD documentation
        refresh_documentation(row-1); //row-1 since the field name indices are off by one from the row index because of the table header
    }
}

function td_focusin_behavior(event) {
    if(event.target && event.target.nodeName == 'TD')
    {
        original_field_value = event.target.innerHTML;
    }
}

function leave_td_behavior(event) {
    if(event.target && event.target.nodeName == 'TD' && (event.key === 'Enter' || event.key === 'Tab' || event.key === 'Escape') ) { //only trigger if user has pushed 
        event.preventDefault(); //stop normal
        var column = event.target.cellIndex;
        var row = event.target.parentNode.rowIndex;
        var object_index = document.getElementById("objects_table_id").rows[0].cells[column].innerHTML.substring(6);
        document.getSelection().removeAllRanges();
        
        if(event.key === 'Enter') {
            if(document.getElementById("objects_table_id").rows.length-1 == row) { //this is the last row displayed
                event.target.blur();
            } else { //focus on the next row's cell
                refresh_documentation(row);
                document.getElementById("objects_table_id").rows[row+1].cells[column].focus();
                
                const selection = window.getSelection();
                selection.removeAllRanges();
                const range = document.createRange();
                range.selectNodeContents(document.activeElement);
                selection.addRange(range);
            }
        }
        if(event.key === 'Tab') {
            if(document.getElementById("objects_table_id").rows[0].cells.length-1 == column) { //this is the last column displayed
                event.target.blur();
            } else { //focus on the next row's cell
                document.getElementById("objects_table_id").rows[row].cells[column+1].focus();
                
                const selection = window.getSelection();
                selection.removeAllRanges();
                const range = document.createRange();
                range.selectNodeContents(document.activeElement);
                selection.addRange(range);
            }
        }
        if(event.key === 'Escape') {
            event.target.innerHTML = original_field_value;
            event.target.blur();
        }
    }
}

function td_focusout_behavior(event) {
    if(event.target && event.target.nodeName == 'TD')
    {
        var column = event.target.cellIndex;
        var row = event.target.parentNode.rowIndex;
        var object_index = document.getElementById("objects_table_id").rows[0].cells[column].innerHTML.substring(6);
        
        event.target.innerHTML = event.target.innerHTML.replace(/<(.|\n)*?>/g, ''); //remove tags from copy-pasted text from the webpage
        if(event.target.innerHTML != original_field_value)
        {
            idf_array_changing('Change Object' + object_index + ',' + currently_highligted_object_type + ',' + object_fields_units_json[currently_highligted_object_type][row-1][0] + ' from ' + idf_array[object_index][row] + ' to ' + event.target.innerHTML); //update undo and redo arrays
            idf_array[object_index][row] = event.target.innerHTML;
            
            if(valid_field_contents(currently_highligted_object_type,row-1,event.target.innerHTML)) {
                if(row % 2 == 1) { //even odd row coloring
                    event.target.style.background = "White";
                } else {
                    event.target.style.background = "WhiteSmoke";
                }
            } else {
                event.target.style.background = "Orange";
            }
        }
    }
}

//moves versions of idf_array between undo_array, idf_array, and redo_array
//undo_array=[... A B C] idf_array=D redo_array=[E F G ...] -> undo -> undo_array=[... A B] idf_array=C redo_array=[D E F G ...]
function undo_button() {
    if(undo_array.length > 0) { //can only undo if there's a previous idf_array to undo into
        alert('UNDO ' + idf_array_note);
        redo_array.unshift(idf_array);
        redo_notes.unshift(idf_array_note);
        idf_array = undo_array.pop();
        idf_array_note = undo_notes.pop();
        update_object_type_counts();
        populate_table(currently_highligted_object_type);
        enable_disable_undo_redo_buttons();
    }
}
//undo_array=[... A B C] idf_array=D redo_array=[E F G ...] -> redo -> undo_array=[... A B C D] idf_array=E redo_array=[F G ...]
function redo_button() {
    if(redo_array.length > 0) { //can only redo if there's a future idf_array to redo into
        undo_array.push(idf_array);
        undo_notes.push(idf_array_note);
        idf_array = redo_array.shift();
        idf_array_note = redo_notes.shift();
        update_object_type_counts();
        populate_table(currently_highligted_object_type);
        enable_disable_undo_redo_buttons();
        alert('REDO ' + idf_array_note);
    }
}

//called for new objects, duplicated objects, deleted objects, pasted objects, and changed fields
function idf_array_changing(alteration) {
    var deep_copy = new Array(idf_array.length);
    for(var i = 0; i < idf_array.length; i++) {
        deep_copy[i] = new Array(idf_array[i].length);
        for(var j = 0; j < idf_array[i].length; j++) {
            deep_copy[i][j] = idf_array[i][j];
        }
    }
    
    redo_array = []; //clear the redo_array to start over with the current idf_array
    redo_notes = [];
    undo_array.push(idf_array);
    undo_notes.push(idf_array_note);
    if(undo_array.length > maximum_undos) { //don't let undo_array get too big
        undo_array.shift();
        undo_notes.shift();
    }
    
    idf_array_note = alteration;
    idf_array = deep_copy;
    enable_disable_undo_redo_buttons();
    find_button();
}

function goto_button(object_index,field_index) {
    object_type_clicked(idf_array[object_index][0]);
    var header_cells = document.getElementById("objects_table_id").rows[0].cells;
    for(var i = 0; i < header_cells.length; i++) {
        if(object_index == parseInt(header_cells[i].innerHTML.substring(6))) {
            document.getElementById("IDF table div").scrollLeft = document.getElementById("objects_table_id").rows[field_index].cells[i].offsetLeft;
            document.getElementById("IDF table div").scrollTop = document.getElementById("objects_table_id").rows[field_index].cells[i].offsetTop - document.getElementById("IDF table div").offsetHeight/2;
            show_find_replace_div();
            refresh_documentation(field_index);
            document.getElementById("objects_table_id").rows[field_index].cells[i].focus();
            break;
        }
    }
}

//highlight cell if incorrect value
function valid_field_contents(object_type,field_index,field_value) {
    var field_index_key = object_fields_units_json[object_type][field_index][0];
    var valid = true; //default when there are no rules
    
    if(idd_json[object_type][field_index_key].hasOwnProperty("type")) {
        if(idd_json[object_type][field_index_key]["type"] == "real") {
            if(parseFloat(field_value) == NaN) {
                valid = false;
            } else {
                valid = true;
            }
        }
        
        if(idd_json[object_type][field_index_key]["type"] == "integer") {
            if(Number.isInteger(parseFloat(field_value))) {
                valid = true;
            } else {
                valid = false;
            }
        }
        
        //skipped type = alpha
        
        if(idd_json[object_type][field_index_key]["type"] == "choice") {
            valid = false;
            for(key_value of idd_json[object_type][field_index_key]["key"]) {
                if(key_value.toLowerCase() == field_value.toLowerCase()) {
                    valid = true;
                }
            }
        }
        
        if(idd_json[object_type][field_index_key]["type"] == "object-list") {
            var list_names_array = idd_json[object_type][field_index_key]["object-list"];
            valid = false;
            for(list_name of list_names_array) {
                if(reference_class_name_json.hasOwnProperty(list_name)) {
                    for(class_name of reference_class_name_json[list_name]) {
                        if(class_name.toLowerCase() == field_value.toLowerCase()) {
                            valid = true;
                        }
                    }
                } else if(reference_object_field_json.hasOwnProperty(list_name)) {
                    var reference_array = [];
                    for(var i = 0; i < reference_object_field_json[list_name].length; i++) {
                        reference_field_index = return_field_index(reference_object_field_json[list_name][i][0],reference_object_field_json[list_name][i][1]);
                        for(var j = 0; j < idf_array.length; j++) {
                            if(idf_array[j][0].toLowerCase() == reference_object_field_json[list_name][i][0].toLowerCase()) {
                                reference_array.push(idf_array[j][reference_field_index]);
                            }
                        }
                    }
                    for(reference_name of reference_array) {
                        if(reference_name.toLowerCase() == field_value.toLowerCase() || field_value.length == 0) {
                            valid = true;
                        }
                    }
                }
            }
        }
        
        //skipped type = node
    }

    if(!isNaN(field_value) && field_value.length > 0) { //is a number
        if(idd_json[object_type][field_index_key].hasOwnProperty("minimum")) {
            if(parseFloat(field_value) >= idd_json[object_type][field_index_key]["minimum"]) {
                valid = true;
            } else {
                valid = false;
            }
        }
        if(idd_json[object_type][field_index_key].hasOwnProperty("minimum>")) {
            if(parseFloat(field_value) > idd_json[object_type][field_index_key]["minimum>"]) {
                valid = true;
            } else {
                valid = false;
            }
        }
        if(idd_json[object_type][field_index_key].hasOwnProperty("maximum")) {
            if(parseFloat(field_value) <= idd_json[object_type][field_index_key]["maximum"]) {
                valid = true;
            } else {
                valid = false;
            }
        }
        if(idd_json[object_type][field_index_key].hasOwnProperty("maximum<")) {
            if(parseFloat(field_value) < idd_json[object_type][field_index_key]["maximum<"]) {
                valid = true;
            } else {
                valid = false;
            }
        }
    }

    //autosize and autocalculate can override all previous logic
    if(idd_json[object_type][field_index_key].hasOwnProperty("autosizable") && field_value.toLowerCase() == "autosize") {
        valid = true;
    }
    if(idd_json[object_type][field_index_key].hasOwnProperty("autocalculatable") && field_value.toLowerCase() == "autocalculate") {
        valid = true;
    }

    if(field_value.trim().length == 0 && idd_json[object_type][field_index_key].hasOwnProperty("default")) {
        valid = true;
    }

    if(field_value.trim().length == 0) { //initial setting of valid to true or false
        if(idd_json[object_type][field_index_key].hasOwnProperty("required-field")) {
            valid = false;
        } else {
            valid = true;
        }
    }

    return valid;
}

//repetitve code for finding an object in the idf_array
function object_index_by_name_and_type(object_name,object_type) {
    for(i = 0; i < idf_array.length; i++) {
        if(idf_array[i][1] == object_name && idf_array[i][0] == object_type) {
            return i;
        }
    }
    return false;
}

//repetitve code for finding an object of a type in the idf_array
function object_indices_by_type(object_type) {
    var indices_array = [];
    for(i = 0; i < idf_array.length; i++) {
        if(idf_array[i][0] == object_type) {
            indices_array.push(i);
        }
    }
    return indices_array;
}

/*
didn't work very well
function onMouseClick(event) {
    //calculate mouse position in normalized device coordinates, (-1 to +1) for both components, offset needed to account for div position on page
    mouse.x = ( (event.clientX-three_js_container.offsetLeft) / width ) * 2 - 1;
    mouse.y = - ( (event.clientY-three_js_container.offsetTop) / height ) * 2 + 1;
    
    raycaster.setFromCamera(mouse,camera); //update the picking ray with the camera and mouse position
    var intersects = raycaster.intersectObjects(scene.children); //calculate objects intersecting the picking ray
    if(intersects.length > 0) {
        if(intersects[0].object.type == "Mesh") { //ensures only faces change color and not axes, wireframe line, etc
            intersects[0].object.material.color.set(0xffff00);
        }
    }
}
*/

//resize() and animate() handle real time update of the three.js scene
function resize(){ //when the browser window changes
    /*
    for raycaster which didn't work well
    width = three_js_container.offsetWidth;
    height = three_js_container.offsetHeight;
    */
    width = geometry_vw/100*window.innerWidth;
    height = geometry_vh/100*window.innerHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}
function animate() { //renders the scene
    renderer.render(scene,camera);
    //controls.update();
    
    //requestAnimationFrame(animate);
}

//takes a Vector3 and returns the vector rotated about the z-axis by argument degrees counterclockwise
function xy_rotate_Vector3(vector,degrees) {
    var radians = degrees*Math.PI/180;
    var rotated_x = Math.cos(radians)*vector.x - Math.sin(radians)*vector.y;
    var rotated_y = Math.sin(radians)*vector.x + Math.cos(radians)*vector.y;
    var z = vector.z;
    return new THREE.Vector3(rotated_x,rotated_y,z);
}

/*
I decided against implementing Shading:Building and Shading:Site, but didn't want to just through away the code

//takes a Vector3 and returns the vector rotated about the x-axis by argument degrees counterclockwise
function yz_rotate_Vector3(vector,degrees) {
    var radians = degrees*Math.PI/180;
    var x = vector.x;
    var rotated_y = Math.cos(radians)*vector.y - Math.sin(radians)*vector.z;
    var rotated_z = Math.sin(radians)*vector.y + Math.cos(radians)*vector.z;
    return new THREE.Vector3(x,rotated_y,rotated_z);
}

if(object_type == "Shading:Building") {
    var azimuth_angle = parseFloat(idf_array[object_index][2]); //rotates in the xy-plane clockwise, must do second
    var tilt_angle = parseFloat(idf_array[object_index][3]); //rotates in the yz-plane clockwise, must do first
    var starting_x = parseFloat(idf_array[object_index][4]);
    var starting_y = parseFloat(idf_array[object_index][5]);
    var starting_z = parseFloat(idf_array[object_index][6]);
    var x_length = parseFloat(idf_array[object_index][7]); //length field, but it's weirdly subtracted
    var y_width = parseFloat(idf_array[object_index][8]); //width field, but it's weirdly subtracted
    
    //create the rectangle, handedness of the vertices shouldn't matter, but here it is
    if(vertex_entry_position == "Counterclockwise") {
        vertex_array = [new THREE.Vector3(0,0,0)];
        vertex_array.concat(new THREE.Vector3(-x_length,0,0));
        vertex_array.concat(new THREE.Vector3(-x_length,-y_width,0));
        vertex_array.concat(new THREE.Vector3(0,-y_width,0));
    } else if (vertex_entry_position == "Clockwise") {
        vertex_array = [new THREE.Vector3(0,0,0)];
        vertex_array.concat(new THREE.Vector3(0,-y_width,0)); //switched pair
        vertex_array.concat(new THREE.Vector3(-x_length,-y_width,0));
        vertex_array.concat(new THREE.Vector3(-x_length,0,0)); //switched pair
    } else {
        console.log("vertex_entry_position = " + vertex_entry_position + " should be Counterclockwise or Clockwise");
    }
    
    //apply rotations, tilt_angle then azimuth_angle
    for(var index in vertex_array) {
        vertex_array[index] = yz_rotate_Vector3(vertex_array[index],-tilt_angle);
    }
    for(var index in vertex_array) {
        vertex_array[index] = xy_rotate_Vector3(vertex_array[index],-azimuth_angle);
    }
    
    //translate into position
    for(var index in vertex_array) {
        vertex_array[index].add(new THREE.Vector3(starting_x,starting_y,starting_z));
    }
}
*/
