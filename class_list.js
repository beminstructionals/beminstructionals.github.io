document.write(`            <br id="Simulation Parameters_br">
            <div id="Simulation Parameters">Simulation Parameters</div>
            <div id="Simulation Parameters_dashes">------------------</div>
            <div id="Version" onclick="object_type_clicked(this.id)">[----] Version</div>
            <div id="SimulationControl" onclick="object_type_clicked(this.id)">[----] SimulationControl</div>
            <div id="PerformancePrecisionTradeoffs" onclick="object_type_clicked(this.id)">[----] PerformancePrecisionTradeoffs</div>
            <div id="Building" onclick="object_type_clicked(this.id)">[----] Building</div>
            <div id="ShadowCalculation" onclick="object_type_clicked(this.id)">[----] ShadowCalculation</div>
            <div id="SurfaceConvectionAlgorithm:Inside" onclick="object_type_clicked(this.id)">[----] SurfaceConvectionAlgorithm:Inside</div>
            <div id="SurfaceConvectionAlgorithm:Outside" onclick="object_type_clicked(this.id)">[----] SurfaceConvectionAlgorithm:Outside</div>
            <div id="HeatBalanceAlgorithm" onclick="object_type_clicked(this.id)">[----] HeatBalanceAlgorithm</div>
            <div id="HeatBalanceSettings:ConductionFiniteDifference" onclick="object_type_clicked(this.id)">[----] HeatBalanceSettings:ConductionFiniteDifference</div>
            <div id="ZoneAirHeatBalanceAlgorithm" onclick="object_type_clicked(this.id)">[----] ZoneAirHeatBalanceAlgorithm</div>
            <div id="ZoneAirContaminantBalance" onclick="object_type_clicked(this.id)">[----] ZoneAirContaminantBalance</div>
            <div id="ZoneAirMassFlowConservation" onclick="object_type_clicked(this.id)">[----] ZoneAirMassFlowConservation</div>
            <div id="ZoneCapacitanceMultiplier:ResearchSpecial" onclick="object_type_clicked(this.id)">[----] ZoneCapacitanceMultiplier:ResearchSpecial</div>
            <div id="Timestep" onclick="object_type_clicked(this.id)">[----] Timestep</div>
            <div id="ConvergenceLimits" onclick="object_type_clicked(this.id)">[----] ConvergenceLimits</div>
            <div id="HVACSystemRootFindingAlgorithm" onclick="object_type_clicked(this.id)">[----] HVACSystemRootFindingAlgorithm</div>
            <br id="Compliance Objects_br">
            <div id="Compliance Objects">Compliance Objects</div>
            <div id="Compliance Objects_dashes">------------------</div>
            <div id="Compliance:Building" onclick="object_type_clicked(this.id)">[----] Compliance:Building</div>
            <br id="Location and Climate_br">
            <div id="Location and Climate">Location and Climate</div>
            <div id="Location and Climate_dashes">------------------</div>
            <div id="Site:Location" onclick="object_type_clicked(this.id)">[----] Site:Location</div>
            <div id="Site:VariableLocation" onclick="object_type_clicked(this.id)">[----] Site:VariableLocation</div>
            <div id="SizingPeriod:DesignDay" onclick="object_type_clicked(this.id)">[----] SizingPeriod:DesignDay</div>
            <div id="SizingPeriod:WeatherFileDays" onclick="object_type_clicked(this.id)">[----] SizingPeriod:WeatherFileDays</div>
            <div id="SizingPeriod:WeatherFileConditionType" onclick="object_type_clicked(this.id)">[----] SizingPeriod:WeatherFileConditionType</div>
            <div id="RunPeriod" onclick="object_type_clicked(this.id)">[----] RunPeriod</div>
            <div id="RunPeriodControl:SpecialDays" onclick="object_type_clicked(this.id)">[----] RunPeriodControl:SpecialDays</div>
            <div id="RunPeriodControl:DaylightSavingTime" onclick="object_type_clicked(this.id)">[----] RunPeriodControl:DaylightSavingTime</div>
            <div id="WeatherProperty:SkyTemperature" onclick="object_type_clicked(this.id)">[----] WeatherProperty:SkyTemperature</div>
            <div id="Site:WeatherStation" onclick="object_type_clicked(this.id)">[----] Site:WeatherStation</div>
            <div id="Site:HeightVariation" onclick="object_type_clicked(this.id)">[----] Site:HeightVariation</div>
            <div id="Site:GroundTemperature:BuildingSurface" onclick="object_type_clicked(this.id)">[----] Site:GroundTemperature:BuildingSurface</div>
            <div id="Site:GroundTemperature:FCfactorMethod" onclick="object_type_clicked(this.id)">[----] Site:GroundTemperature:FCfactorMethod</div>
            <div id="Site:GroundTemperature:Shallow" onclick="object_type_clicked(this.id)">[----] Site:GroundTemperature:Shallow</div>
            <div id="Site:GroundTemperature:Deep" onclick="object_type_clicked(this.id)">[----] Site:GroundTemperature:Deep</div>
            <div id="Site:GroundTemperature:Undisturbed:FiniteDifference" onclick="object_type_clicked(this.id)">[----] Site:GroundTemperature:Undisturbed:FiniteDifference</div>
            <div id="Site:GroundTemperature:Undisturbed:KusudaAchenbach" onclick="object_type_clicked(this.id)">[----] Site:GroundTemperature:Undisturbed:KusudaAchenbach</div>
            <div id="Site:GroundTemperature:Undisturbed:Xing" onclick="object_type_clicked(this.id)">[----] Site:GroundTemperature:Undisturbed:Xing</div>
            <div id="Site:GroundDomain:Slab" onclick="object_type_clicked(this.id)">[----] Site:GroundDomain:Slab</div>
            <div id="Site:GroundDomain:Basement" onclick="object_type_clicked(this.id)">[----] Site:GroundDomain:Basement</div>
            <div id="Site:GroundReflectance" onclick="object_type_clicked(this.id)">[----] Site:GroundReflectance</div>
            <div id="Site:GroundReflectance:SnowModifier" onclick="object_type_clicked(this.id)">[----] Site:GroundReflectance:SnowModifier</div>
            <div id="Site:WaterMainsTemperature" onclick="object_type_clicked(this.id)">[----] Site:WaterMainsTemperature</div>
            <div id="Site:Precipitation" onclick="object_type_clicked(this.id)">[----] Site:Precipitation</div>
            <div id="RoofIrrigation" onclick="object_type_clicked(this.id)">[----] RoofIrrigation</div>
            <div id="Site:SolarAndVisibleSpectrum" onclick="object_type_clicked(this.id)">[----] Site:SolarAndVisibleSpectrum</div>
            <div id="Site:SpectrumData" onclick="object_type_clicked(this.id)">[----] Site:SpectrumData</div>
            <br id="Schedules_br">
            <div id="Schedules">Schedules</div>
            <div id="Schedules_dashes">------------------</div>
            <div id="ScheduleTypeLimits" onclick="object_type_clicked(this.id)">[----] ScheduleTypeLimits</div>
            <div id="Schedule:Day:Hourly" onclick="object_type_clicked(this.id)">[----] Schedule:Day:Hourly</div>
            <div id="Schedule:Day:Interval" onclick="object_type_clicked(this.id)">[----] Schedule:Day:Interval</div>
            <div id="Schedule:Day:List" onclick="object_type_clicked(this.id)">[----] Schedule:Day:List</div>
            <div id="Schedule:Week:Daily" onclick="object_type_clicked(this.id)">[----] Schedule:Week:Daily</div>
            <div id="Schedule:Week:Compact" onclick="object_type_clicked(this.id)">[----] Schedule:Week:Compact</div>
            <div id="Schedule:Year" onclick="object_type_clicked(this.id)">[----] Schedule:Year</div>
            <div id="Schedule:Compact" onclick="object_type_clicked(this.id)">[----] Schedule:Compact</div>
            <div id="Schedule:Constant" onclick="object_type_clicked(this.id)">[----] Schedule:Constant</div>
            <div id="Schedule:File:Shading" onclick="object_type_clicked(this.id)">[----] Schedule:File:Shading</div>
            <div id="Schedule:File" onclick="object_type_clicked(this.id)">[----] Schedule:File</div>
            <br id="Surface Construction Elements_br">
            <div id="Surface Construction Elements">Surface Construction Elements</div>
            <div id="Surface Construction Elements_dashes">------------------</div>
            <div id="Material" onclick="object_type_clicked(this.id)">[----] Material</div>
            <div id="Material:NoMass" onclick="object_type_clicked(this.id)">[----] Material:NoMass</div>
            <div id="Material:InfraredTransparent" onclick="object_type_clicked(this.id)">[----] Material:InfraredTransparent</div>
            <div id="Material:AirGap" onclick="object_type_clicked(this.id)">[----] Material:AirGap</div>
            <div id="Material:RoofVegetation" onclick="object_type_clicked(this.id)">[----] Material:RoofVegetation</div>
            <div id="WindowMaterial:SimpleGlazingSystem" onclick="object_type_clicked(this.id)">[----] WindowMaterial:SimpleGlazingSystem</div>
            <div id="WindowMaterial:Glazing" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Glazing</div>
            <div id="WindowMaterial:GlazingGroup:Thermochromic" onclick="object_type_clicked(this.id)">[----] WindowMaterial:GlazingGroup:Thermochromic</div>
            <div id="WindowMaterial:Glazing:RefractionExtinctionMethod" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Glazing:RefractionExtinctionMethod</div>
            <div id="WindowMaterial:Gas" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Gas</div>
            <div id="WindowGap:SupportPillar" onclick="object_type_clicked(this.id)">[----] WindowGap:SupportPillar</div>
            <div id="WindowGap:DeflectionState" onclick="object_type_clicked(this.id)">[----] WindowGap:DeflectionState</div>
            <div id="WindowMaterial:GasMixture" onclick="object_type_clicked(this.id)">[----] WindowMaterial:GasMixture</div>
            <div id="WindowMaterial:Gap" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Gap</div>
            <div id="WindowMaterial:Shade" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Shade</div>
            <div id="WindowMaterial:ComplexShade" onclick="object_type_clicked(this.id)">[----] WindowMaterial:ComplexShade</div>
            <div id="WindowMaterial:Blind" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Blind</div>
            <div id="WindowMaterial:Screen" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Screen</div>
            <div id="WindowMaterial:Shade:EquivalentLayer" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Shade:EquivalentLayer</div>
            <div id="WindowMaterial:Drape:EquivalentLayer" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Drape:EquivalentLayer</div>
            <div id="WindowMaterial:Blind:EquivalentLayer" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Blind:EquivalentLayer</div>
            <div id="WindowMaterial:Screen:EquivalentLayer" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Screen:EquivalentLayer</div>
            <div id="WindowMaterial:Glazing:EquivalentLayer" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Glazing:EquivalentLayer</div>
            <div id="WindowMaterial:Gap:EquivalentLayer" onclick="object_type_clicked(this.id)">[----] WindowMaterial:Gap:EquivalentLayer</div>
            <div id="MaterialProperty:MoisturePenetrationDepth:Settings" onclick="object_type_clicked(this.id)">[----] MaterialProperty:MoisturePenetrationDepth:Settings</div>
            <div id="MaterialProperty:PhaseChange" onclick="object_type_clicked(this.id)">[----] MaterialProperty:PhaseChange</div>
            <div id="MaterialProperty:PhaseChangeHysteresis" onclick="object_type_clicked(this.id)">[----] MaterialProperty:PhaseChangeHysteresis</div>
            <div id="MaterialProperty:VariableThermalConductivity" onclick="object_type_clicked(this.id)">[----] MaterialProperty:VariableThermalConductivity</div>
            <div id="MaterialProperty:HeatAndMoistureTransfer:Settings" onclick="object_type_clicked(this.id)">[----] MaterialProperty:HeatAndMoistureTransfer:Settings</div>
            <div id="MaterialProperty:HeatAndMoistureTransfer:SorptionIsotherm" onclick="object_type_clicked(this.id)">[----] MaterialProperty:HeatAndMoistureTransfer:SorptionIsotherm</div>
            <div id="MaterialProperty:HeatAndMoistureTransfer:Suction" onclick="object_type_clicked(this.id)">[----] MaterialProperty:HeatAndMoistureTransfer:Suction</div>
            <div id="MaterialProperty:HeatAndMoistureTransfer:Redistribution" onclick="object_type_clicked(this.id)">[----] MaterialProperty:HeatAndMoistureTransfer:Redistribution</div>
            <div id="MaterialProperty:HeatAndMoistureTransfer:Diffusion" onclick="object_type_clicked(this.id)">[----] MaterialProperty:HeatAndMoistureTransfer:Diffusion</div>
            <div id="MaterialProperty:HeatAndMoistureTransfer:ThermalConductivity" onclick="object_type_clicked(this.id)">[----] MaterialProperty:HeatAndMoistureTransfer:ThermalConductivity</div>
            <div id="MaterialProperty:GlazingSpectralData" onclick="object_type_clicked(this.id)">[----] MaterialProperty:GlazingSpectralData</div>
            <div id="Construction" onclick="object_type_clicked(this.id)">[----] Construction</div>
            <div id="Construction:CfactorUndergroundWall" onclick="object_type_clicked(this.id)">[----] Construction:CfactorUndergroundWall</div>
            <div id="Construction:FfactorGroundFloor" onclick="object_type_clicked(this.id)">[----] Construction:FfactorGroundFloor</div>
            <div id="Construction:InternalSource" onclick="object_type_clicked(this.id)">[----] Construction:InternalSource</div>
            <div id="Construction:AirBoundary" onclick="object_type_clicked(this.id)">[----] Construction:AirBoundary</div>
            <div id="WindowThermalModel:Params" onclick="object_type_clicked(this.id)">[----] WindowThermalModel:Params</div>
            <div id="WindowsCalculationEngine" onclick="object_type_clicked(this.id)">[----] WindowsCalculationEngine</div>
            <div id="Construction:ComplexFenestrationState" onclick="object_type_clicked(this.id)">[----] Construction:ComplexFenestrationState</div>
            <div id="Construction:WindowEquivalentLayer" onclick="object_type_clicked(this.id)">[----] Construction:WindowEquivalentLayer</div>
            <div id="Construction:WindowDataFile" onclick="object_type_clicked(this.id)">[----] Construction:WindowDataFile</div>
            <br id="Thermal Zones and Surfaces_br">
            <div id="Thermal Zones and Surfaces">Thermal Zones and Surfaces</div>
            <div id="Thermal Zones and Surfaces_dashes">------------------</div>
            <div id="GlobalGeometryRules" onclick="object_type_clicked(this.id)">[----] GlobalGeometryRules</div>
            <div id="GeometryTransform" onclick="object_type_clicked(this.id)">[----] GeometryTransform</div>
            <div id="Zone" onclick="object_type_clicked(this.id)">[----] Zone</div>
            <div id="ZoneList" onclick="object_type_clicked(this.id)">[----] ZoneList</div>
            <div id="ZoneGroup" onclick="object_type_clicked(this.id)">[----] ZoneGroup</div>
            <div id="BuildingSurface:Detailed" onclick="object_type_clicked(this.id)">[----] BuildingSurface:Detailed</div>
            <div id="Wall:Detailed" onclick="object_type_clicked(this.id)">[----] Wall:Detailed</div>
            <div id="RoofCeiling:Detailed" onclick="object_type_clicked(this.id)">[----] RoofCeiling:Detailed</div>
            <div id="Floor:Detailed" onclick="object_type_clicked(this.id)">[----] Floor:Detailed</div>
            <div id="Wall:Exterior" onclick="object_type_clicked(this.id)">[----] Wall:Exterior</div>
            <div id="Wall:Adiabatic" onclick="object_type_clicked(this.id)">[----] Wall:Adiabatic</div>
            <div id="Wall:Underground" onclick="object_type_clicked(this.id)">[----] Wall:Underground</div>
            <div id="Wall:Interzone" onclick="object_type_clicked(this.id)">[----] Wall:Interzone</div>
            <div id="Roof" onclick="object_type_clicked(this.id)">[----] Roof</div>
            <div id="Ceiling:Adiabatic" onclick="object_type_clicked(this.id)">[----] Ceiling:Adiabatic</div>
            <div id="Ceiling:Interzone" onclick="object_type_clicked(this.id)">[----] Ceiling:Interzone</div>
            <div id="Floor:GroundContact" onclick="object_type_clicked(this.id)">[----] Floor:GroundContact</div>
            <div id="Floor:Adiabatic" onclick="object_type_clicked(this.id)">[----] Floor:Adiabatic</div>
            <div id="Floor:Interzone" onclick="object_type_clicked(this.id)">[----] Floor:Interzone</div>
            <div id="FenestrationSurface:Detailed" onclick="object_type_clicked(this.id)">[----] FenestrationSurface:Detailed</div>
            <div id="Window" onclick="object_type_clicked(this.id)">[----] Window</div>
            <div id="Door" onclick="object_type_clicked(this.id)">[----] Door</div>
            <div id="GlazedDoor" onclick="object_type_clicked(this.id)">[----] GlazedDoor</div>
            <div id="Window:Interzone" onclick="object_type_clicked(this.id)">[----] Window:Interzone</div>
            <div id="Door:Interzone" onclick="object_type_clicked(this.id)">[----] Door:Interzone</div>
            <div id="GlazedDoor:Interzone" onclick="object_type_clicked(this.id)">[----] GlazedDoor:Interzone</div>
            <div id="WindowShadingControl" onclick="object_type_clicked(this.id)">[----] WindowShadingControl</div>
            <div id="WindowProperty:FrameAndDivider" onclick="object_type_clicked(this.id)">[----] WindowProperty:FrameAndDivider</div>
            <div id="WindowProperty:AirflowControl" onclick="object_type_clicked(this.id)">[----] WindowProperty:AirflowControl</div>
            <div id="WindowProperty:StormWindow" onclick="object_type_clicked(this.id)">[----] WindowProperty:StormWindow</div>
            <div id="InternalMass" onclick="object_type_clicked(this.id)">[----] InternalMass</div>
            <div id="Shading:Site" onclick="object_type_clicked(this.id)">[----] Shading:Site</div>
            <div id="Shading:Building" onclick="object_type_clicked(this.id)">[----] Shading:Building</div>
            <div id="Shading:Site:Detailed" onclick="object_type_clicked(this.id)">[----] Shading:Site:Detailed</div>
            <div id="Shading:Building:Detailed" onclick="object_type_clicked(this.id)">[----] Shading:Building:Detailed</div>
            <div id="Shading:Overhang" onclick="object_type_clicked(this.id)">[----] Shading:Overhang</div>
            <div id="Shading:Overhang:Projection" onclick="object_type_clicked(this.id)">[----] Shading:Overhang:Projection</div>
            <div id="Shading:Fin" onclick="object_type_clicked(this.id)">[----] Shading:Fin</div>
            <div id="Shading:Fin:Projection" onclick="object_type_clicked(this.id)">[----] Shading:Fin:Projection</div>
            <div id="Shading:Zone:Detailed" onclick="object_type_clicked(this.id)">[----] Shading:Zone:Detailed</div>
            <div id="ShadingProperty:Reflectance" onclick="object_type_clicked(this.id)">[----] ShadingProperty:Reflectance</div>
            <br id="Advanced Construction, Surface, Zone Concepts_br">
            <div id="Advanced Construction, Surface, Zone Concepts">Advanced Construction, Surface, Zone Concepts</div>
            <div id="Advanced Construction, Surface, Zone Concepts_dashes">------------------</div>
            <div id="SurfaceProperty:HeatTransferAlgorithm" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:HeatTransferAlgorithm</div>
            <div id="SurfaceProperty:HeatTransferAlgorithm:MultipleSurface" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:HeatTransferAlgorithm:MultipleSurface</div>
            <div id="SurfaceProperty:HeatTransferAlgorithm:SurfaceList" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:HeatTransferAlgorithm:SurfaceList</div>
            <div id="SurfaceProperty:HeatTransferAlgorithm:Construction" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:HeatTransferAlgorithm:Construction</div>
            <div id="SurfaceProperty:HeatBalanceSourceTerm" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:HeatBalanceSourceTerm</div>
            <div id="SurfaceControl:MovableInsulation" onclick="object_type_clicked(this.id)">[----] SurfaceControl:MovableInsulation</div>
            <div id="SurfaceProperty:OtherSideCoefficients" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:OtherSideCoefficients</div>
            <div id="SurfaceProperty:OtherSideConditionsModel" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:OtherSideConditionsModel</div>
            <div id="SurfaceProperty:Underwater" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:Underwater</div>
            <div id="Foundation:Kiva" onclick="object_type_clicked(this.id)">[----] Foundation:Kiva</div>
            <div id="Foundation:Kiva:Settings" onclick="object_type_clicked(this.id)">[----] Foundation:Kiva:Settings</div>
            <div id="SurfaceProperty:ExposedFoundationPerimeter" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:ExposedFoundationPerimeter</div>
            <div id="SurfaceConvectionAlgorithm:Inside:AdaptiveModelSelections" onclick="object_type_clicked(this.id)">[----] SurfaceConvectionAlgorithm:Inside:AdaptiveModelSelections</div>
            <div id="SurfaceConvectionAlgorithm:Outside:AdaptiveModelSelections" onclick="object_type_clicked(this.id)">[----] SurfaceConvectionAlgorithm:Outside:AdaptiveModelSelections</div>
            <div id="SurfaceConvectionAlgorithm:Inside:UserCurve" onclick="object_type_clicked(this.id)">[----] SurfaceConvectionAlgorithm:Inside:UserCurve</div>
            <div id="SurfaceConvectionAlgorithm:Outside:UserCurve" onclick="object_type_clicked(this.id)">[----] SurfaceConvectionAlgorithm:Outside:UserCurve</div>
            <div id="SurfaceProperty:ConvectionCoefficients" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:ConvectionCoefficients</div>
            <div id="SurfaceProperty:ConvectionCoefficients:MultipleSurface" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:ConvectionCoefficients:MultipleSurface</div>
            <div id="SurfaceProperties:VaporCoefficients" onclick="object_type_clicked(this.id)">[----] SurfaceProperties:VaporCoefficients</div>
            <div id="SurfaceProperty:ExteriorNaturalVentedCavity" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:ExteriorNaturalVentedCavity</div>
            <div id="SurfaceProperty:SolarIncidentInside" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:SolarIncidentInside</div>
            <div id="SurfaceProperty:LocalEnvironment" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:LocalEnvironment</div>
            <div id="ZoneProperty:LocalEnvironment" onclick="object_type_clicked(this.id)">[----] ZoneProperty:LocalEnvironment</div>
            <div id="SurfaceProperty:SurroundingSurfaces" onclick="object_type_clicked(this.id)">[----] SurfaceProperty:SurroundingSurfaces</div>
            <div id="ComplexFenestrationProperty:SolarAbsorbedLayers" onclick="object_type_clicked(this.id)">[----] ComplexFenestrationProperty:SolarAbsorbedLayers</div>
            <div id="ZoneProperty:UserViewFactors:bySurfaceName" onclick="object_type_clicked(this.id)">[----] ZoneProperty:UserViewFactors:bySurfaceName</div>
            <br id="Detailed Ground Heat Transfer_br">
            <div id="Detailed Ground Heat Transfer">Detailed Ground Heat Transfer</div>
            <div id="Detailed Ground Heat Transfer_dashes">------------------</div>
            <div id="GroundHeatTransfer:Control" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Control</div>
            <div id="GroundHeatTransfer:Slab:Materials" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Slab:Materials</div>
            <div id="GroundHeatTransfer:Slab:MatlProps" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Slab:MatlProps</div>
            <div id="GroundHeatTransfer:Slab:BoundConds" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Slab:BoundConds</div>
            <div id="GroundHeatTransfer:Slab:BldgProps" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Slab:BldgProps</div>
            <div id="GroundHeatTransfer:Slab:Insulation" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Slab:Insulation</div>
            <div id="GroundHeatTransfer:Slab:EquivalentSlab" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Slab:EquivalentSlab</div>
            <div id="GroundHeatTransfer:Slab:AutoGrid" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Slab:AutoGrid</div>
            <div id="GroundHeatTransfer:Slab:ManualGrid" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Slab:ManualGrid</div>
            <div id="GroundHeatTransfer:Slab:XFACE" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Slab:XFACE</div>
            <div id="GroundHeatTransfer:Slab:YFACE" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Slab:YFACE</div>
            <div id="GroundHeatTransfer:Slab:ZFACE" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Slab:ZFACE</div>
            <div id="GroundHeatTransfer:Basement:SimParameters" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:SimParameters</div>
            <div id="GroundHeatTransfer:Basement:MatlProps" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:MatlProps</div>
            <div id="GroundHeatTransfer:Basement:Insulation" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:Insulation</div>
            <div id="GroundHeatTransfer:Basement:SurfaceProps" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:SurfaceProps</div>
            <div id="GroundHeatTransfer:Basement:BldgData" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:BldgData</div>
            <div id="GroundHeatTransfer:Basement:Interior" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:Interior</div>
            <div id="GroundHeatTransfer:Basement:ComBldg" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:ComBldg</div>
            <div id="GroundHeatTransfer:Basement:EquivSlab" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:EquivSlab</div>
            <div id="GroundHeatTransfer:Basement:EquivAutoGrid" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:EquivAutoGrid</div>
            <div id="GroundHeatTransfer:Basement:AutoGrid" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:AutoGrid</div>
            <div id="GroundHeatTransfer:Basement:ManualGrid" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:ManualGrid</div>
            <div id="GroundHeatTransfer:Basement:XFACE" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:XFACE</div>
            <div id="GroundHeatTransfer:Basement:YFACE" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:YFACE</div>
            <div id="GroundHeatTransfer:Basement:ZFACE" onclick="object_type_clicked(this.id)">[----] GroundHeatTransfer:Basement:ZFACE</div>
            <br id="Room Air Models_br">
            <div id="Room Air Models">Room Air Models</div>
            <div id="Room Air Models_dashes">------------------</div>
            <div id="RoomAirModelType" onclick="object_type_clicked(this.id)">[----] RoomAirModelType</div>
            <div id="RoomAir:TemperaturePattern:UserDefined" onclick="object_type_clicked(this.id)">[----] RoomAir:TemperaturePattern:UserDefined</div>
            <div id="RoomAir:TemperaturePattern:ConstantGradient" onclick="object_type_clicked(this.id)">[----] RoomAir:TemperaturePattern:ConstantGradient</div>
            <div id="RoomAir:TemperaturePattern:TwoGradient" onclick="object_type_clicked(this.id)">[----] RoomAir:TemperaturePattern:TwoGradient</div>
            <div id="RoomAir:TemperaturePattern:NondimensionalHeight" onclick="object_type_clicked(this.id)">[----] RoomAir:TemperaturePattern:NondimensionalHeight</div>
            <div id="RoomAir:TemperaturePattern:SurfaceMapping" onclick="object_type_clicked(this.id)">[----] RoomAir:TemperaturePattern:SurfaceMapping</div>
            <div id="RoomAir:Node" onclick="object_type_clicked(this.id)">[----] RoomAir:Node</div>
            <div id="RoomAirSettings:OneNodeDisplacementVentilation" onclick="object_type_clicked(this.id)">[----] RoomAirSettings:OneNodeDisplacementVentilation</div>
            <div id="RoomAirSettings:ThreeNodeDisplacementVentilation" onclick="object_type_clicked(this.id)">[----] RoomAirSettings:ThreeNodeDisplacementVentilation</div>
            <div id="RoomAirSettings:CrossVentilation" onclick="object_type_clicked(this.id)">[----] RoomAirSettings:CrossVentilation</div>
            <div id="RoomAirSettings:UnderFloorAirDistributionInterior" onclick="object_type_clicked(this.id)">[----] RoomAirSettings:UnderFloorAirDistributionInterior</div>
            <div id="RoomAirSettings:UnderFloorAirDistributionExterior" onclick="object_type_clicked(this.id)">[----] RoomAirSettings:UnderFloorAirDistributionExterior</div>
            <div id="RoomAir:Node:AirflowNetwork" onclick="object_type_clicked(this.id)">[----] RoomAir:Node:AirflowNetwork</div>
            <div id="RoomAir:Node:AirflowNetwork:AdjacentSurfaceList" onclick="object_type_clicked(this.id)">[----] RoomAir:Node:AirflowNetwork:AdjacentSurfaceList</div>
            <div id="RoomAir:Node:AirflowNetwork:InternalGains" onclick="object_type_clicked(this.id)">[----] RoomAir:Node:AirflowNetwork:InternalGains</div>
            <div id="RoomAir:Node:AirflowNetwork:HVACEquipment" onclick="object_type_clicked(this.id)">[----] RoomAir:Node:AirflowNetwork:HVACEquipment</div>
            <div id="RoomAirSettings:AirflowNetwork" onclick="object_type_clicked(this.id)">[----] RoomAirSettings:AirflowNetwork</div>
            <br id="Internal Gains_br">
            <div id="Internal Gains">Internal Gains</div>
            <div id="Internal Gains_dashes">------------------</div>
            <div id="People" onclick="object_type_clicked(this.id)">[----] People</div>
            <div id="ComfortViewFactorAngles" onclick="object_type_clicked(this.id)">[----] ComfortViewFactorAngles</div>
            <div id="Lights" onclick="object_type_clicked(this.id)">[----] Lights</div>
            <div id="ElectricEquipment" onclick="object_type_clicked(this.id)">[----] ElectricEquipment</div>
            <div id="GasEquipment" onclick="object_type_clicked(this.id)">[----] GasEquipment</div>
            <div id="HotWaterEquipment" onclick="object_type_clicked(this.id)">[----] HotWaterEquipment</div>
            <div id="SteamEquipment" onclick="object_type_clicked(this.id)">[----] SteamEquipment</div>
            <div id="OtherEquipment" onclick="object_type_clicked(this.id)">[----] OtherEquipment</div>
            <div id="ElectricEquipment:ITE:AirCooled" onclick="object_type_clicked(this.id)">[----] ElectricEquipment:ITE:AirCooled</div>
            <div id="ZoneBaseboard:OutdoorTemperatureControlled" onclick="object_type_clicked(this.id)">[----] ZoneBaseboard:OutdoorTemperatureControlled</div>
            <div id="SwimmingPool:Indoor" onclick="object_type_clicked(this.id)">[----] SwimmingPool:Indoor</div>
            <div id="ZoneContaminantSourceAndSink:CarbonDioxide" onclick="object_type_clicked(this.id)">[----] ZoneContaminantSourceAndSink:CarbonDioxide</div>
            <div id="ZoneContaminantSourceAndSink:Generic:Constant" onclick="object_type_clicked(this.id)">[----] ZoneContaminantSourceAndSink:Generic:Constant</div>
            <div id="SurfaceContaminantSourceAndSink:Generic:PressureDriven" onclick="object_type_clicked(this.id)">[----] SurfaceContaminantSourceAndSink:Generic:PressureDriven</div>
            <div id="ZoneContaminantSourceAndSink:Generic:CutoffModel" onclick="object_type_clicked(this.id)">[----] ZoneContaminantSourceAndSink:Generic:CutoffModel</div>
            <div id="ZoneContaminantSourceAndSink:Generic:DecaySource" onclick="object_type_clicked(this.id)">[----] ZoneContaminantSourceAndSink:Generic:DecaySource</div>
            <div id="SurfaceContaminantSourceAndSink:Generic:BoundaryLayerDiffusion" onclick="object_type_clicked(this.id)">[----] SurfaceContaminantSourceAndSink:Generic:BoundaryLayerDiffusion</div>
            <div id="SurfaceContaminantSourceAndSink:Generic:DepositionVelocitySink" onclick="object_type_clicked(this.id)">[----] SurfaceContaminantSourceAndSink:Generic:DepositionVelocitySink</div>
            <div id="ZoneContaminantSourceAndSink:Generic:DepositionRateSink" onclick="object_type_clicked(this.id)">[----] ZoneContaminantSourceAndSink:Generic:DepositionRateSink</div>
            <br id="Daylighting_br">
            <div id="Daylighting">Daylighting</div>
            <div id="Daylighting_dashes">------------------</div>
            <div id="Daylighting:Controls" onclick="object_type_clicked(this.id)">[----] Daylighting:Controls</div>
            <div id="Daylighting:ReferencePoint" onclick="object_type_clicked(this.id)">[----] Daylighting:ReferencePoint</div>
            <div id="Daylighting:DELight:ComplexFenestration" onclick="object_type_clicked(this.id)">[----] Daylighting:DELight:ComplexFenestration</div>
            <div id="DaylightingDevice:Tubular" onclick="object_type_clicked(this.id)">[----] DaylightingDevice:Tubular</div>
            <div id="DaylightingDevice:Shelf" onclick="object_type_clicked(this.id)">[----] DaylightingDevice:Shelf</div>
            <div id="DaylightingDevice:LightWell" onclick="object_type_clicked(this.id)">[----] DaylightingDevice:LightWell</div>
            <div id="Output:DaylightFactors" onclick="object_type_clicked(this.id)">[----] Output:DaylightFactors</div>
            <div id="Output:IlluminanceMap" onclick="object_type_clicked(this.id)">[----] Output:IlluminanceMap</div>
            <div id="OutputControl:IlluminanceMap:Style" onclick="object_type_clicked(this.id)">[----] OutputControl:IlluminanceMap:Style</div>
            <br id="Zone Airflow_br">
            <div id="Zone Airflow">Zone Airflow</div>
            <div id="Zone Airflow_dashes">------------------</div>
            <div id="ZoneInfiltration:DesignFlowRate" onclick="object_type_clicked(this.id)">[----] ZoneInfiltration:DesignFlowRate</div>
            <div id="ZoneInfiltration:EffectiveLeakageArea" onclick="object_type_clicked(this.id)">[----] ZoneInfiltration:EffectiveLeakageArea</div>
            <div id="ZoneInfiltration:FlowCoefficient" onclick="object_type_clicked(this.id)">[----] ZoneInfiltration:FlowCoefficient</div>
            <div id="ZoneVentilation:DesignFlowRate" onclick="object_type_clicked(this.id)">[----] ZoneVentilation:DesignFlowRate</div>
            <div id="ZoneVentilation:WindandStackOpenArea" onclick="object_type_clicked(this.id)">[----] ZoneVentilation:WindandStackOpenArea</div>
            <div id="ZoneAirBalance:OutdoorAir" onclick="object_type_clicked(this.id)">[----] ZoneAirBalance:OutdoorAir</div>
            <div id="ZoneMixing" onclick="object_type_clicked(this.id)">[----] ZoneMixing</div>
            <div id="ZoneCrossMixing" onclick="object_type_clicked(this.id)">[----] ZoneCrossMixing</div>
            <div id="ZoneRefrigerationDoorMixing" onclick="object_type_clicked(this.id)">[----] ZoneRefrigerationDoorMixing</div>
            <div id="ZoneEarthtube" onclick="object_type_clicked(this.id)">[----] ZoneEarthtube</div>
            <div id="ZoneCoolTower:Shower" onclick="object_type_clicked(this.id)">[----] ZoneCoolTower:Shower</div>
            <div id="ZoneThermalChimney" onclick="object_type_clicked(this.id)">[----] ZoneThermalChimney</div>
            <br id="Natural Ventilation and Duct Leakage_br">
            <div id="Natural Ventilation and Duct Leakage">Natural Ventilation and Duct Leakage</div>
            <div id="Natural Ventilation and Duct Leakage_dashes">------------------</div>
            <div id="AirflowNetwork:SimulationControl" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:SimulationControl</div>
            <div id="AirflowNetwork:MultiZone:Zone" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:Zone</div>
            <div id="AirflowNetwork:MultiZone:Surface" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:Surface</div>
            <div id="AirflowNetwork:MultiZone:ReferenceCrackConditions" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:ReferenceCrackConditions</div>
            <div id="AirflowNetwork:MultiZone:Surface:Crack" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:Surface:Crack</div>
            <div id="AirflowNetwork:MultiZone:Surface:EffectiveLeakageArea" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:Surface:EffectiveLeakageArea</div>
            <div id="AirflowNetwork:MultiZone:Component:DetailedOpening" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:Component:DetailedOpening</div>
            <div id="AirflowNetwork:MultiZone:Component:SimpleOpening" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:Component:SimpleOpening</div>
            <div id="AirflowNetwork:MultiZone:Component:HorizontalOpening" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:Component:HorizontalOpening</div>
            <div id="AirflowNetwork:MultiZone:Component:ZoneExhaustFan" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:Component:ZoneExhaustFan</div>
            <div id="AirflowNetwork:MultiZone:ExternalNode" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:ExternalNode</div>
            <div id="AirflowNetwork:MultiZone:WindPressureCoefficientArray" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:WindPressureCoefficientArray</div>
            <div id="AirflowNetwork:MultiZone:WindPressureCoefficientValues" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:MultiZone:WindPressureCoefficientValues</div>
            <div id="AirflowNetwork:ZoneControl:PressureController" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:ZoneControl:PressureController</div>
            <div id="AirflowNetwork:Distribution:Node" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Node</div>
            <div id="AirflowNetwork:Distribution:Component:Leak" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Component:Leak</div>
            <div id="AirflowNetwork:Distribution:Component:LeakageRatio" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Component:LeakageRatio</div>
            <div id="AirflowNetwork:Distribution:Component:Duct" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Component:Duct</div>
            <div id="AirflowNetwork:Distribution:Component:Fan" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Component:Fan</div>
            <div id="AirflowNetwork:Distribution:Component:Coil" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Component:Coil</div>
            <div id="AirflowNetwork:Distribution:Component:HeatExchanger" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Component:HeatExchanger</div>
            <div id="AirflowNetwork:Distribution:Component:TerminalUnit" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Component:TerminalUnit</div>
            <div id="AirflowNetwork:Distribution:Component:ConstantPressureDrop" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Component:ConstantPressureDrop</div>
            <div id="AirflowNetwork:Distribution:Component:OutdoorAirFlow" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Component:OutdoorAirFlow</div>
            <div id="AirflowNetwork:Distribution:Component:ReliefAirFlow" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Component:ReliefAirFlow</div>
            <div id="AirflowNetwork:Distribution:Linkage" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:Linkage</div>
            <div id="AirflowNetwork:Distribution:DuctViewFactors" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:Distribution:DuctViewFactors</div>
            <div id="AirflowNetwork:OccupantVentilationControl" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:OccupantVentilationControl</div>
            <div id="AirflowNetwork:IntraZone:Node" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:IntraZone:Node</div>
            <div id="AirflowNetwork:IntraZone:Linkage" onclick="object_type_clicked(this.id)">[----] AirflowNetwork:IntraZone:Linkage</div>
            <br id="Exterior Equipment_br">
            <div id="Exterior Equipment">Exterior Equipment</div>
            <div id="Exterior Equipment_dashes">------------------</div>
            <div id="Exterior:Lights" onclick="object_type_clicked(this.id)">[----] Exterior:Lights</div>
            <div id="Exterior:FuelEquipment" onclick="object_type_clicked(this.id)">[----] Exterior:FuelEquipment</div>
            <div id="Exterior:WaterEquipment" onclick="object_type_clicked(this.id)">[----] Exterior:WaterEquipment</div>
            <br id="HVAC Templates_br">
            <div id="HVAC Templates">HVAC Templates</div>
            <div id="HVAC Templates_dashes">------------------</div>
            <div id="HVACTemplate:Thermostat" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Thermostat</div>
            <div id="HVACTemplate:Zone:IdealLoadsAirSystem" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:IdealLoadsAirSystem</div>
            <div id="HVACTemplate:Zone:BaseboardHeat" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:BaseboardHeat</div>
            <div id="HVACTemplate:Zone:FanCoil" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:FanCoil</div>
            <div id="HVACTemplate:Zone:PTAC" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:PTAC</div>
            <div id="HVACTemplate:Zone:PTHP" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:PTHP</div>
            <div id="HVACTemplate:Zone:WaterToAirHeatPump" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:WaterToAirHeatPump</div>
            <div id="HVACTemplate:Zone:VRF" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:VRF</div>
            <div id="HVACTemplate:Zone:Unitary" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:Unitary</div>
            <div id="HVACTemplate:Zone:VAV" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:VAV</div>
            <div id="HVACTemplate:Zone:VAV:FanPowered" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:VAV:FanPowered</div>
            <div id="HVACTemplate:Zone:VAV:HeatAndCool" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:VAV:HeatAndCool</div>
            <div id="HVACTemplate:Zone:ConstantVolume" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:ConstantVolume</div>
            <div id="HVACTemplate:Zone:DualDuct" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Zone:DualDuct</div>
            <div id="HVACTemplate:System:VRF" onclick="object_type_clicked(this.id)">[----] HVACTemplate:System:VRF</div>
            <div id="HVACTemplate:System:Unitary" onclick="object_type_clicked(this.id)">[----] HVACTemplate:System:Unitary</div>
            <div id="HVACTemplate:System:UnitaryHeatPump:AirToAir" onclick="object_type_clicked(this.id)">[----] HVACTemplate:System:UnitaryHeatPump:AirToAir</div>
            <div id="HVACTemplate:System:UnitarySystem" onclick="object_type_clicked(this.id)">[----] HVACTemplate:System:UnitarySystem</div>
            <div id="HVACTemplate:System:VAV" onclick="object_type_clicked(this.id)">[----] HVACTemplate:System:VAV</div>
            <div id="HVACTemplate:System:PackagedVAV" onclick="object_type_clicked(this.id)">[----] HVACTemplate:System:PackagedVAV</div>
            <div id="HVACTemplate:System:ConstantVolume" onclick="object_type_clicked(this.id)">[----] HVACTemplate:System:ConstantVolume</div>
            <div id="HVACTemplate:System:DualDuct" onclick="object_type_clicked(this.id)">[----] HVACTemplate:System:DualDuct</div>
            <div id="HVACTemplate:System:DedicatedOutdoorAir" onclick="object_type_clicked(this.id)">[----] HVACTemplate:System:DedicatedOutdoorAir</div>
            <div id="HVACTemplate:Plant:ChilledWaterLoop" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Plant:ChilledWaterLoop</div>
            <div id="HVACTemplate:Plant:Chiller" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Plant:Chiller</div>
            <div id="HVACTemplate:Plant:Chiller:ObjectReference" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Plant:Chiller:ObjectReference</div>
            <div id="HVACTemplate:Plant:Tower" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Plant:Tower</div>
            <div id="HVACTemplate:Plant:Tower:ObjectReference" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Plant:Tower:ObjectReference</div>
            <div id="HVACTemplate:Plant:HotWaterLoop" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Plant:HotWaterLoop</div>
            <div id="HVACTemplate:Plant:Boiler" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Plant:Boiler</div>
            <div id="HVACTemplate:Plant:Boiler:ObjectReference" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Plant:Boiler:ObjectReference</div>
            <div id="HVACTemplate:Plant:MixedWaterLoop" onclick="object_type_clicked(this.id)">[----] HVACTemplate:Plant:MixedWaterLoop</div>
            <br id="HVAC Design Objects_br">
            <div id="HVAC Design Objects">HVAC Design Objects</div>
            <div id="HVAC Design Objects_dashes">------------------</div>
            <div id="DesignSpecification:OutdoorAir" onclick="object_type_clicked(this.id)">[----] DesignSpecification:OutdoorAir</div>
            <div id="DesignSpecification:ZoneAirDistribution" onclick="object_type_clicked(this.id)">[----] DesignSpecification:ZoneAirDistribution</div>
            <div id="Sizing:Parameters" onclick="object_type_clicked(this.id)">[----] Sizing:Parameters</div>
            <div id="Sizing:Zone" onclick="object_type_clicked(this.id)">[----] Sizing:Zone</div>
            <div id="DesignSpecification:ZoneHVAC:Sizing" onclick="object_type_clicked(this.id)">[----] DesignSpecification:ZoneHVAC:Sizing</div>
            <div id="DesignSpecification:AirTerminal:Sizing" onclick="object_type_clicked(this.id)">[----] DesignSpecification:AirTerminal:Sizing</div>
            <div id="Sizing:System" onclick="object_type_clicked(this.id)">[----] Sizing:System</div>
            <div id="Sizing:Plant" onclick="object_type_clicked(this.id)">[----] Sizing:Plant</div>
            <div id="OutputControl:Sizing:Style" onclick="object_type_clicked(this.id)">[----] OutputControl:Sizing:Style</div>
            <br id="Zone HVAC Controls and Thermostats_br">
            <div id="Zone HVAC Controls and Thermostats">Zone HVAC Controls and Thermostats</div>
            <div id="Zone HVAC Controls and Thermostats_dashes">------------------</div>
            <div id="ZoneControl:Humidistat" onclick="object_type_clicked(this.id)">[----] ZoneControl:Humidistat</div>
            <div id="ZoneControl:Thermostat" onclick="object_type_clicked(this.id)">[----] ZoneControl:Thermostat</div>
            <div id="ZoneControl:Thermostat:OperativeTemperature" onclick="object_type_clicked(this.id)">[----] ZoneControl:Thermostat:OperativeTemperature</div>
            <div id="ZoneControl:Thermostat:ThermalComfort" onclick="object_type_clicked(this.id)">[----] ZoneControl:Thermostat:ThermalComfort</div>
            <div id="ZoneControl:Thermostat:TemperatureAndHumidity" onclick="object_type_clicked(this.id)">[----] ZoneControl:Thermostat:TemperatureAndHumidity</div>
            <div id="ThermostatSetpoint:SingleHeating" onclick="object_type_clicked(this.id)">[----] ThermostatSetpoint:SingleHeating</div>
            <div id="ThermostatSetpoint:SingleCooling" onclick="object_type_clicked(this.id)">[----] ThermostatSetpoint:SingleCooling</div>
            <div id="ThermostatSetpoint:SingleHeatingOrCooling" onclick="object_type_clicked(this.id)">[----] ThermostatSetpoint:SingleHeatingOrCooling</div>
            <div id="ThermostatSetpoint:DualSetpoint" onclick="object_type_clicked(this.id)">[----] ThermostatSetpoint:DualSetpoint</div>
            <div id="ThermostatSetpoint:ThermalComfort:Fanger:SingleHeating" onclick="object_type_clicked(this.id)">[----] ThermostatSetpoint:ThermalComfort:Fanger:SingleHeating</div>
            <div id="ThermostatSetpoint:ThermalComfort:Fanger:SingleCooling" onclick="object_type_clicked(this.id)">[----] ThermostatSetpoint:ThermalComfort:Fanger:SingleCooling</div>
            <div id="ThermostatSetpoint:ThermalComfort:Fanger:SingleHeatingOrCooling" onclick="object_type_clicked(this.id)">[----] ThermostatSetpoint:ThermalComfort:Fanger:SingleHeatingOrCooling</div>
            <div id="ThermostatSetpoint:ThermalComfort:Fanger:DualSetpoint" onclick="object_type_clicked(this.id)">[----] ThermostatSetpoint:ThermalComfort:Fanger:DualSetpoint</div>
            <div id="ZoneControl:Thermostat:StagedDualSetpoint" onclick="object_type_clicked(this.id)">[----] ZoneControl:Thermostat:StagedDualSetpoint</div>
            <div id="ZoneControl:ContaminantController" onclick="object_type_clicked(this.id)">[----] ZoneControl:ContaminantController</div>
            <br id="Zone HVAC Forced Air Units_br">
            <div id="Zone HVAC Forced Air Units">Zone HVAC Forced Air Units</div>
            <div id="Zone HVAC Forced Air Units_dashes">------------------</div>
            <div id="ZoneHVAC:IdealLoadsAirSystem" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:IdealLoadsAirSystem</div>
            <div id="ZoneHVAC:FourPipeFanCoil" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:FourPipeFanCoil</div>
            <div id="ZoneHVAC:WindowAirConditioner" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:WindowAirConditioner</div>
            <div id="ZoneHVAC:PackagedTerminalAirConditioner" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:PackagedTerminalAirConditioner</div>
            <div id="ZoneHVAC:PackagedTerminalHeatPump" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:PackagedTerminalHeatPump</div>
            <div id="ZoneHVAC:WaterToAirHeatPump" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:WaterToAirHeatPump</div>
            <div id="ZoneHVAC:Dehumidifier:DX" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:Dehumidifier:DX</div>
            <div id="ZoneHVAC:EnergyRecoveryVentilator" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:EnergyRecoveryVentilator</div>
            <div id="ZoneHVAC:EnergyRecoveryVentilator:Controller" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:EnergyRecoveryVentilator:Controller</div>
            <div id="ZoneHVAC:UnitVentilator" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:UnitVentilator</div>
            <div id="ZoneHVAC:UnitHeater" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:UnitHeater</div>
            <div id="ZoneHVAC:EvaporativeCoolerUnit" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:EvaporativeCoolerUnit</div>
            <div id="ZoneHVAC:HybridUnitaryHVAC" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:HybridUnitaryHVAC</div>
            <div id="ZoneHVAC:OutdoorAirUnit" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:OutdoorAirUnit</div>
            <div id="ZoneHVAC:OutdoorAirUnit:EquipmentList" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:OutdoorAirUnit:EquipmentList</div>
            <div id="ZoneHVAC:TerminalUnit:VariableRefrigerantFlow" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:TerminalUnit:VariableRefrigerantFlow</div>
            <br id="Zone HVAC Radiative/Convective Units_br">
            <div id="Zone HVAC Radiative/Convective Units">Zone HVAC Radiative/Convective Units</div>
            <div id="Zone HVAC Radiative/Convective Units_dashes">------------------</div>
            <div id="ZoneHVAC:Baseboard:RadiantConvective:Water" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:Baseboard:RadiantConvective:Water</div>
            <div id="ZoneHVAC:Baseboard:RadiantConvective:Steam" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:Baseboard:RadiantConvective:Steam</div>
            <div id="ZoneHVAC:Baseboard:RadiantConvective:Electric" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:Baseboard:RadiantConvective:Electric</div>
            <div id="ZoneHVAC:CoolingPanel:RadiantConvective:Water" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:CoolingPanel:RadiantConvective:Water</div>
            <div id="ZoneHVAC:Baseboard:Convective:Water" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:Baseboard:Convective:Water</div>
            <div id="ZoneHVAC:Baseboard:Convective:Electric" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:Baseboard:Convective:Electric</div>
            <div id="ZoneHVAC:LowTemperatureRadiant:VariableFlow" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:LowTemperatureRadiant:VariableFlow</div>
            <div id="ZoneHVAC:LowTemperatureRadiant:ConstantFlow" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:LowTemperatureRadiant:ConstantFlow</div>
            <div id="ZoneHVAC:LowTemperatureRadiant:Electric" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:LowTemperatureRadiant:Electric</div>
            <div id="ZoneHVAC:LowTemperatureRadiant:SurfaceGroup" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:LowTemperatureRadiant:SurfaceGroup</div>
            <div id="ZoneHVAC:HighTemperatureRadiant" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:HighTemperatureRadiant</div>
            <div id="ZoneHVAC:VentilatedSlab" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:VentilatedSlab</div>
            <div id="ZoneHVAC:VentilatedSlab:SlabGroup" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:VentilatedSlab:SlabGroup</div>
            <br id="Zone HVAC Air Loop Terminal Units_br">
            <div id="Zone HVAC Air Loop Terminal Units">Zone HVAC Air Loop Terminal Units</div>
            <div id="Zone HVAC Air Loop Terminal Units_dashes">------------------</div>
            <div id="AirTerminal:SingleDuct:ConstantVolume:Reheat" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:ConstantVolume:Reheat</div>
            <div id="AirTerminal:SingleDuct:ConstantVolume:NoReheat" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:ConstantVolume:NoReheat</div>
            <div id="AirTerminal:SingleDuct:VAV:NoReheat" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:VAV:NoReheat</div>
            <div id="AirTerminal:SingleDuct:VAV:Reheat" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:VAV:Reheat</div>
            <div id="AirTerminal:SingleDuct:VAV:Reheat:VariableSpeedFan" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:VAV:Reheat:VariableSpeedFan</div>
            <div id="AirTerminal:SingleDuct:VAV:HeatAndCool:NoReheat" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:VAV:HeatAndCool:NoReheat</div>
            <div id="AirTerminal:SingleDuct:VAV:HeatAndCool:Reheat" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:VAV:HeatAndCool:Reheat</div>
            <div id="AirTerminal:SingleDuct:SeriesPIU:Reheat" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:SeriesPIU:Reheat</div>
            <div id="AirTerminal:SingleDuct:ParallelPIU:Reheat" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:ParallelPIU:Reheat</div>
            <div id="AirTerminal:SingleDuct:ConstantVolume:FourPipeInduction" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:ConstantVolume:FourPipeInduction</div>
            <div id="AirTerminal:SingleDuct:ConstantVolume:FourPipeBeam" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:ConstantVolume:FourPipeBeam</div>
            <div id="AirTerminal:SingleDuct:ConstantVolume:CooledBeam" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:ConstantVolume:CooledBeam</div>
            <div id="AirTerminal:SingleDuct:Mixer" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:Mixer</div>
            <div id="AirTerminal:DualDuct:ConstantVolume" onclick="object_type_clicked(this.id)">[----] AirTerminal:DualDuct:ConstantVolume</div>
            <div id="AirTerminal:DualDuct:VAV" onclick="object_type_clicked(this.id)">[----] AirTerminal:DualDuct:VAV</div>
            <div id="AirTerminal:DualDuct:VAV:OutdoorAir" onclick="object_type_clicked(this.id)">[----] AirTerminal:DualDuct:VAV:OutdoorAir</div>
            <div id="ZoneHVAC:AirDistributionUnit" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:AirDistributionUnit</div>
            <br id="Zone HVAC Equipment Connections_br">
            <div id="Zone HVAC Equipment Connections">Zone HVAC Equipment Connections</div>
            <div id="Zone HVAC Equipment Connections_dashes">------------------</div>
            <div id="ZoneHVAC:EquipmentList" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:EquipmentList</div>
            <div id="ZoneHVAC:EquipmentConnections" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:EquipmentConnections</div>
            <br id="Fans_br">
            <div id="Fans">Fans</div>
            <div id="Fans_dashes">------------------</div>
            <div id="Fan:SystemModel" onclick="object_type_clicked(this.id)">[----] Fan:SystemModel</div>
            <div id="Fan:ConstantVolume" onclick="object_type_clicked(this.id)">[----] Fan:ConstantVolume</div>
            <div id="Fan:VariableVolume" onclick="object_type_clicked(this.id)">[----] Fan:VariableVolume</div>
            <div id="Fan:OnOff" onclick="object_type_clicked(this.id)">[----] Fan:OnOff</div>
            <div id="Fan:ZoneExhaust" onclick="object_type_clicked(this.id)">[----] Fan:ZoneExhaust</div>
            <div id="FanPerformance:NightVentilation" onclick="object_type_clicked(this.id)">[----] FanPerformance:NightVentilation</div>
            <div id="Fan:ComponentModel" onclick="object_type_clicked(this.id)">[----] Fan:ComponentModel</div>
            <br id="Coils_br">
            <div id="Coils">Coils</div>
            <div id="Coils_dashes">------------------</div>
            <div id="Coil:Cooling:Water" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:Water</div>
            <div id="Coil:Cooling:Water:DetailedGeometry" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:Water:DetailedGeometry</div>
            <div id="Coil:Cooling:DX" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX</div>
            <div id="Coil:Cooling:DX:CurveFit:Performance" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX:CurveFit:Performance</div>
            <div id="Coil:Cooling:DX:CurveFit:OperatingMode" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX:CurveFit:OperatingMode</div>
            <div id="Coil:Cooling:DX:CurveFit:Speed" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX:CurveFit:Speed</div>
            <div id="Coil:Cooling:DX:SingleSpeed" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX:SingleSpeed</div>
            <div id="Coil:Cooling:DX:TwoSpeed" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX:TwoSpeed</div>
            <div id="Coil:Cooling:DX:MultiSpeed" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX:MultiSpeed</div>
            <div id="Coil:Cooling:DX:VariableSpeed" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX:VariableSpeed</div>
            <div id="Coil:Cooling:DX:TwoStageWithHumidityControlMode" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX:TwoStageWithHumidityControlMode</div>
            <div id="CoilPerformance:DX:Cooling" onclick="object_type_clicked(this.id)">[----] CoilPerformance:DX:Cooling</div>
            <div id="Coil:Cooling:DX:VariableRefrigerantFlow" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX:VariableRefrigerantFlow</div>
            <div id="Coil:Heating:DX:VariableRefrigerantFlow" onclick="object_type_clicked(this.id)">[----] Coil:Heating:DX:VariableRefrigerantFlow</div>
            <div id="Coil:Cooling:DX:VariableRefrigerantFlow:FluidTemperatureControl" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX:VariableRefrigerantFlow:FluidTemperatureControl</div>
            <div id="Coil:Heating:DX:VariableRefrigerantFlow:FluidTemperatureControl" onclick="object_type_clicked(this.id)">[----] Coil:Heating:DX:VariableRefrigerantFlow:FluidTemperatureControl</div>
            <div id="Coil:Heating:Water" onclick="object_type_clicked(this.id)">[----] Coil:Heating:Water</div>
            <div id="Coil:Heating:Steam" onclick="object_type_clicked(this.id)">[----] Coil:Heating:Steam</div>
            <div id="Coil:Heating:Electric" onclick="object_type_clicked(this.id)">[----] Coil:Heating:Electric</div>
            <div id="Coil:Heating:Electric:MultiStage" onclick="object_type_clicked(this.id)">[----] Coil:Heating:Electric:MultiStage</div>
            <div id="Coil:Heating:Fuel" onclick="object_type_clicked(this.id)">[----] Coil:Heating:Fuel</div>
            <div id="Coil:Heating:Gas:MultiStage" onclick="object_type_clicked(this.id)">[----] Coil:Heating:Gas:MultiStage</div>
            <div id="Coil:Heating:Desuperheater" onclick="object_type_clicked(this.id)">[----] Coil:Heating:Desuperheater</div>
            <div id="Coil:Heating:DX:SingleSpeed" onclick="object_type_clicked(this.id)">[----] Coil:Heating:DX:SingleSpeed</div>
            <div id="Coil:Heating:DX:MultiSpeed" onclick="object_type_clicked(this.id)">[----] Coil:Heating:DX:MultiSpeed</div>
            <div id="Coil:Heating:DX:VariableSpeed" onclick="object_type_clicked(this.id)">[----] Coil:Heating:DX:VariableSpeed</div>
            <div id="Coil:Cooling:WaterToAirHeatPump:ParameterEstimation" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:WaterToAirHeatPump:ParameterEstimation</div>
            <div id="Coil:Heating:WaterToAirHeatPump:ParameterEstimation" onclick="object_type_clicked(this.id)">[----] Coil:Heating:WaterToAirHeatPump:ParameterEstimation</div>
            <div id="Coil:Cooling:WaterToAirHeatPump:EquationFit" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:WaterToAirHeatPump:EquationFit</div>
            <div id="Coil:Cooling:WaterToAirHeatPump:VariableSpeedEquationFit" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:WaterToAirHeatPump:VariableSpeedEquationFit</div>
            <div id="Coil:Heating:WaterToAirHeatPump:EquationFit" onclick="object_type_clicked(this.id)">[----] Coil:Heating:WaterToAirHeatPump:EquationFit</div>
            <div id="Coil:Heating:WaterToAirHeatPump:VariableSpeedEquationFit" onclick="object_type_clicked(this.id)">[----] Coil:Heating:WaterToAirHeatPump:VariableSpeedEquationFit</div>
            <div id="Coil:WaterHeating:AirToWaterHeatPump:Pumped" onclick="object_type_clicked(this.id)">[----] Coil:WaterHeating:AirToWaterHeatPump:Pumped</div>
            <div id="Coil:WaterHeating:AirToWaterHeatPump:Wrapped" onclick="object_type_clicked(this.id)">[----] Coil:WaterHeating:AirToWaterHeatPump:Wrapped</div>
            <div id="Coil:WaterHeating:AirToWaterHeatPump:VariableSpeed" onclick="object_type_clicked(this.id)">[----] Coil:WaterHeating:AirToWaterHeatPump:VariableSpeed</div>
            <div id="Coil:WaterHeating:Desuperheater" onclick="object_type_clicked(this.id)">[----] Coil:WaterHeating:Desuperheater</div>
            <div id="CoilSystem:Cooling:DX" onclick="object_type_clicked(this.id)">[----] CoilSystem:Cooling:DX</div>
            <div id="CoilSystem:Heating:DX" onclick="object_type_clicked(this.id)">[----] CoilSystem:Heating:DX</div>
            <div id="CoilSystem:Cooling:Water:HeatExchangerAssisted" onclick="object_type_clicked(this.id)">[----] CoilSystem:Cooling:Water:HeatExchangerAssisted</div>
            <div id="CoilSystem:Cooling:DX:HeatExchangerAssisted" onclick="object_type_clicked(this.id)">[----] CoilSystem:Cooling:DX:HeatExchangerAssisted</div>
            <div id="CoilSystem:IntegratedHeatPump:AirSource" onclick="object_type_clicked(this.id)">[----] CoilSystem:IntegratedHeatPump:AirSource</div>
            <div id="Coil:Cooling:DX:SingleSpeed:ThermalStorage" onclick="object_type_clicked(this.id)">[----] Coil:Cooling:DX:SingleSpeed:ThermalStorage</div>
            <br id="Evaporative Coolers_br">
            <div id="Evaporative Coolers">Evaporative Coolers</div>
            <div id="Evaporative Coolers_dashes">------------------</div>
            <div id="EvaporativeCooler:Direct:CelDekPad" onclick="object_type_clicked(this.id)">[----] EvaporativeCooler:Direct:CelDekPad</div>
            <div id="EvaporativeCooler:Indirect:CelDekPad" onclick="object_type_clicked(this.id)">[----] EvaporativeCooler:Indirect:CelDekPad</div>
            <div id="EvaporativeCooler:Indirect:WetCoil" onclick="object_type_clicked(this.id)">[----] EvaporativeCooler:Indirect:WetCoil</div>
            <div id="EvaporativeCooler:Indirect:ResearchSpecial" onclick="object_type_clicked(this.id)">[----] EvaporativeCooler:Indirect:ResearchSpecial</div>
            <div id="EvaporativeCooler:Direct:ResearchSpecial" onclick="object_type_clicked(this.id)">[----] EvaporativeCooler:Direct:ResearchSpecial</div>
            <br id="Humidifiers and Dehumidifiers_br">
            <div id="Humidifiers and Dehumidifiers">Humidifiers and Dehumidifiers</div>
            <div id="Humidifiers and Dehumidifiers_dashes">------------------</div>
            <div id="Humidifier:Steam:Electric" onclick="object_type_clicked(this.id)">[----] Humidifier:Steam:Electric</div>
            <div id="Humidifier:Steam:Gas" onclick="object_type_clicked(this.id)">[----] Humidifier:Steam:Gas</div>
            <div id="Dehumidifier:Desiccant:NoFans" onclick="object_type_clicked(this.id)">[----] Dehumidifier:Desiccant:NoFans</div>
            <div id="Dehumidifier:Desiccant:System" onclick="object_type_clicked(this.id)">[----] Dehumidifier:Desiccant:System</div>
            <br id="Heat Recovery_br">
            <div id="Heat Recovery">Heat Recovery</div>
            <div id="Heat Recovery_dashes">------------------</div>
            <div id="HeatExchanger:AirToAir:FlatPlate" onclick="object_type_clicked(this.id)">[----] HeatExchanger:AirToAir:FlatPlate</div>
            <div id="HeatExchanger:AirToAir:SensibleAndLatent" onclick="object_type_clicked(this.id)">[----] HeatExchanger:AirToAir:SensibleAndLatent</div>
            <div id="HeatExchanger:Desiccant:BalancedFlow" onclick="object_type_clicked(this.id)">[----] HeatExchanger:Desiccant:BalancedFlow</div>
            <div id="HeatExchanger:Desiccant:BalancedFlow:PerformanceDataType1" onclick="object_type_clicked(this.id)">[----] HeatExchanger:Desiccant:BalancedFlow:PerformanceDataType1</div>
            <br id="Unitary Equipment_br">
            <div id="Unitary Equipment">Unitary Equipment</div>
            <div id="Unitary Equipment_dashes">------------------</div>
            <div id="AirLoopHVAC:UnitarySystem" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:UnitarySystem</div>
            <div id="UnitarySystemPerformance:Multispeed" onclick="object_type_clicked(this.id)">[----] UnitarySystemPerformance:Multispeed</div>
            <div id="AirLoopHVAC:Unitary:Furnace:HeatOnly" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:Unitary:Furnace:HeatOnly</div>
            <div id="AirLoopHVAC:Unitary:Furnace:HeatCool" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:Unitary:Furnace:HeatCool</div>
            <div id="AirLoopHVAC:UnitaryHeatOnly" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:UnitaryHeatOnly</div>
            <div id="AirLoopHVAC:UnitaryHeatCool" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:UnitaryHeatCool</div>
            <div id="AirLoopHVAC:UnitaryHeatPump:AirToAir" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:UnitaryHeatPump:AirToAir</div>
            <div id="AirLoopHVAC:UnitaryHeatPump:WaterToAir" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:UnitaryHeatPump:WaterToAir</div>
            <div id="AirLoopHVAC:UnitaryHeatCool:VAVChangeoverBypass" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:UnitaryHeatCool:VAVChangeoverBypass</div>
            <div id="AirLoopHVAC:UnitaryHeatPump:AirToAir:MultiSpeed" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:UnitaryHeatPump:AirToAir:MultiSpeed</div>
            <br id="Variable Refrigerant Flow Equipment_br">
            <div id="Variable Refrigerant Flow Equipment">Variable Refrigerant Flow Equipment</div>
            <div id="Variable Refrigerant Flow Equipment_dashes">------------------</div>
            <div id="AirConditioner:VariableRefrigerantFlow" onclick="object_type_clicked(this.id)">[----] AirConditioner:VariableRefrigerantFlow</div>
            <div id="AirConditioner:VariableRefrigerantFlow:FluidTemperatureControl" onclick="object_type_clicked(this.id)">[----] AirConditioner:VariableRefrigerantFlow:FluidTemperatureControl</div>
            <div id="AirConditioner:VariableRefrigerantFlow:FluidTemperatureControl:HR" onclick="object_type_clicked(this.id)">[----] AirConditioner:VariableRefrigerantFlow:FluidTemperatureControl:HR</div>
            <div id="ZoneTerminalUnitList" onclick="object_type_clicked(this.id)">[----] ZoneTerminalUnitList</div>
            <br id="Controllers_br">
            <div id="Controllers">Controllers</div>
            <div id="Controllers_dashes">------------------</div>
            <div id="Controller:WaterCoil" onclick="object_type_clicked(this.id)">[----] Controller:WaterCoil</div>
            <div id="Controller:OutdoorAir" onclick="object_type_clicked(this.id)">[----] Controller:OutdoorAir</div>
            <div id="Controller:MechanicalVentilation" onclick="object_type_clicked(this.id)">[----] Controller:MechanicalVentilation</div>
            <div id="AirLoopHVAC:ControllerList" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:ControllerList</div>
            <br id="Air Distribution_br">
            <div id="Air Distribution">Air Distribution</div>
            <div id="Air Distribution_dashes">------------------</div>
            <div id="AirLoopHVAC" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC</div>
            <div id="AirLoopHVAC:OutdoorAirSystem:EquipmentList" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:OutdoorAirSystem:EquipmentList</div>
            <div id="AirLoopHVAC:OutdoorAirSystem" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:OutdoorAirSystem</div>
            <div id="OutdoorAir:Mixer" onclick="object_type_clicked(this.id)">[----] OutdoorAir:Mixer</div>
            <div id="AirLoopHVAC:ZoneSplitter" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:ZoneSplitter</div>
            <div id="AirLoopHVAC:SupplyPlenum" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:SupplyPlenum</div>
            <div id="AirLoopHVAC:SupplyPath" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:SupplyPath</div>
            <div id="AirLoopHVAC:ZoneMixer" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:ZoneMixer</div>
            <div id="AirLoopHVAC:ReturnPlenum" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:ReturnPlenum</div>
            <div id="AirLoopHVAC:ReturnPath" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:ReturnPath</div>
            <div id="AirLoopHVAC:DedicatedOutdoorAirSystem" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:DedicatedOutdoorAirSystem</div>
            <div id="AirLoopHVAC:Mixer" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:Mixer</div>
            <div id="AirLoopHVAC:Splitter" onclick="object_type_clicked(this.id)">[----] AirLoopHVAC:Splitter</div>
            <br id="Node-Branch Management_br">
            <div id="Node-Branch Management">Node-Branch Management</div>
            <div id="Node-Branch Management_dashes">------------------</div>
            <div id="Branch" onclick="object_type_clicked(this.id)">[----] Branch</div>
            <div id="BranchList" onclick="object_type_clicked(this.id)">[----] BranchList</div>
            <div id="Connector:Splitter" onclick="object_type_clicked(this.id)">[----] Connector:Splitter</div>
            <div id="Connector:Mixer" onclick="object_type_clicked(this.id)">[----] Connector:Mixer</div>
            <div id="ConnectorList" onclick="object_type_clicked(this.id)">[----] ConnectorList</div>
            <div id="NodeList" onclick="object_type_clicked(this.id)">[----] NodeList</div>
            <div id="OutdoorAir:Node" onclick="object_type_clicked(this.id)">[----] OutdoorAir:Node</div>
            <div id="OutdoorAir:NodeList" onclick="object_type_clicked(this.id)">[----] OutdoorAir:NodeList</div>
            <div id="Pipe:Adiabatic" onclick="object_type_clicked(this.id)">[----] Pipe:Adiabatic</div>
            <div id="Pipe:Adiabatic:Steam" onclick="object_type_clicked(this.id)">[----] Pipe:Adiabatic:Steam</div>
            <div id="Pipe:Indoor" onclick="object_type_clicked(this.id)">[----] Pipe:Indoor</div>
            <div id="Pipe:Outdoor" onclick="object_type_clicked(this.id)">[----] Pipe:Outdoor</div>
            <div id="Pipe:Underground" onclick="object_type_clicked(this.id)">[----] Pipe:Underground</div>
            <div id="PipingSystem:Underground:Domain" onclick="object_type_clicked(this.id)">[----] PipingSystem:Underground:Domain</div>
            <div id="PipingSystem:Underground:PipeCircuit" onclick="object_type_clicked(this.id)">[----] PipingSystem:Underground:PipeCircuit</div>
            <div id="PipingSystem:Underground:PipeSegment" onclick="object_type_clicked(this.id)">[----] PipingSystem:Underground:PipeSegment</div>
            <div id="Duct" onclick="object_type_clicked(this.id)">[----] Duct</div>
            <br id="Pumps_br">
            <div id="Pumps">Pumps</div>
            <div id="Pumps_dashes">------------------</div>
            <div id="Pump:VariableSpeed" onclick="object_type_clicked(this.id)">[----] Pump:VariableSpeed</div>
            <div id="Pump:ConstantSpeed" onclick="object_type_clicked(this.id)">[----] Pump:ConstantSpeed</div>
            <div id="Pump:VariableSpeed:Condensate" onclick="object_type_clicked(this.id)">[----] Pump:VariableSpeed:Condensate</div>
            <div id="HeaderedPumps:ConstantSpeed" onclick="object_type_clicked(this.id)">[----] HeaderedPumps:ConstantSpeed</div>
            <div id="HeaderedPumps:VariableSpeed" onclick="object_type_clicked(this.id)">[----] HeaderedPumps:VariableSpeed</div>
            <br id="Plant-Condenser Flow Control_br">
            <div id="Plant-Condenser Flow Control">Plant-Condenser Flow Control</div>
            <div id="Plant-Condenser Flow Control_dashes">------------------</div>
            <div id="TemperingValve" onclick="object_type_clicked(this.id)">[----] TemperingValve</div>
            <br id="Non-Zone Equipment_br">
            <div id="Non-Zone Equipment">Non-Zone Equipment</div>
            <div id="Non-Zone Equipment_dashes">------------------</div>
            <div id="LoadProfile:Plant" onclick="object_type_clicked(this.id)">[----] LoadProfile:Plant</div>
            <br id="Solar Collectors_br">
            <div id="Solar Collectors">Solar Collectors</div>
            <div id="Solar Collectors_dashes">------------------</div>
            <div id="SolarCollectorPerformance:FlatPlate" onclick="object_type_clicked(this.id)">[----] SolarCollectorPerformance:FlatPlate</div>
            <div id="SolarCollector:FlatPlate:Water" onclick="object_type_clicked(this.id)">[----] SolarCollector:FlatPlate:Water</div>
            <div id="SolarCollector:FlatPlate:PhotovoltaicThermal" onclick="object_type_clicked(this.id)">[----] SolarCollector:FlatPlate:PhotovoltaicThermal</div>
            <div id="SolarCollectorPerformance:PhotovoltaicThermal:Simple" onclick="object_type_clicked(this.id)">[----] SolarCollectorPerformance:PhotovoltaicThermal:Simple</div>
            <div id="SolarCollector:IntegralCollectorStorage" onclick="object_type_clicked(this.id)">[----] SolarCollector:IntegralCollectorStorage</div>
            <div id="SolarCollectorPerformance:IntegralCollectorStorage" onclick="object_type_clicked(this.id)">[----] SolarCollectorPerformance:IntegralCollectorStorage</div>
            <div id="SolarCollector:UnglazedTranspired" onclick="object_type_clicked(this.id)">[----] SolarCollector:UnglazedTranspired</div>
            <div id="SolarCollector:UnglazedTranspired:Multisystem" onclick="object_type_clicked(this.id)">[----] SolarCollector:UnglazedTranspired:Multisystem</div>
            <br id="Plant Heating and Cooling Equipment_br">
            <div id="Plant Heating and Cooling Equipment">Plant Heating and Cooling Equipment</div>
            <div id="Plant Heating and Cooling Equipment_dashes">------------------</div>
            <div id="Boiler:HotWater" onclick="object_type_clicked(this.id)">[----] Boiler:HotWater</div>
            <div id="Boiler:Steam" onclick="object_type_clicked(this.id)">[----] Boiler:Steam</div>
            <div id="Chiller:Electric:EIR" onclick="object_type_clicked(this.id)">[----] Chiller:Electric:EIR</div>
            <div id="Chiller:Electric:ReformulatedEIR" onclick="object_type_clicked(this.id)">[----] Chiller:Electric:ReformulatedEIR</div>
            <div id="Chiller:Electric" onclick="object_type_clicked(this.id)">[----] Chiller:Electric</div>
            <div id="Chiller:Absorption:Indirect" onclick="object_type_clicked(this.id)">[----] Chiller:Absorption:Indirect</div>
            <div id="Chiller:Absorption" onclick="object_type_clicked(this.id)">[----] Chiller:Absorption</div>
            <div id="Chiller:ConstantCOP" onclick="object_type_clicked(this.id)">[----] Chiller:ConstantCOP</div>
            <div id="Chiller:EngineDriven" onclick="object_type_clicked(this.id)">[----] Chiller:EngineDriven</div>
            <div id="Chiller:CombustionTurbine" onclick="object_type_clicked(this.id)">[----] Chiller:CombustionTurbine</div>
            <div id="ChillerHeater:Absorption:DirectFired" onclick="object_type_clicked(this.id)">[----] ChillerHeater:Absorption:DirectFired</div>
            <div id="ChillerHeater:Absorption:DoubleEffect" onclick="object_type_clicked(this.id)">[----] ChillerHeater:Absorption:DoubleEffect</div>
            <div id="HeatPump:PlantLoop:EIR:Cooling" onclick="object_type_clicked(this.id)">[----] HeatPump:PlantLoop:EIR:Cooling</div>
            <div id="HeatPump:PlantLoop:EIR:Heating" onclick="object_type_clicked(this.id)">[----] HeatPump:PlantLoop:EIR:Heating</div>
            <div id="HeatPump:WaterToWater:EquationFit:Heating" onclick="object_type_clicked(this.id)">[----] HeatPump:WaterToWater:EquationFit:Heating</div>
            <div id="HeatPump:WaterToWater:EquationFit:Cooling" onclick="object_type_clicked(this.id)">[----] HeatPump:WaterToWater:EquationFit:Cooling</div>
            <div id="HeatPump:WaterToWater:ParameterEstimation:Cooling" onclick="object_type_clicked(this.id)">[----] HeatPump:WaterToWater:ParameterEstimation:Cooling</div>
            <div id="HeatPump:WaterToWater:ParameterEstimation:Heating" onclick="object_type_clicked(this.id)">[----] HeatPump:WaterToWater:ParameterEstimation:Heating</div>
            <div id="DistrictCooling" onclick="object_type_clicked(this.id)">[----] DistrictCooling</div>
            <div id="DistrictHeating" onclick="object_type_clicked(this.id)">[----] DistrictHeating</div>
            <div id="PlantComponent:TemperatureSource" onclick="object_type_clicked(this.id)">[----] PlantComponent:TemperatureSource</div>
            <div id="CentralHeatPumpSystem" onclick="object_type_clicked(this.id)">[----] CentralHeatPumpSystem</div>
            <div id="ChillerHeaterPerformance:Electric:EIR" onclick="object_type_clicked(this.id)">[----] ChillerHeaterPerformance:Electric:EIR</div>
            <br id="Condenser Equipment and Heat Exchangers_br">
            <div id="Condenser Equipment and Heat Exchangers">Condenser Equipment and Heat Exchangers</div>
            <div id="Condenser Equipment and Heat Exchangers_dashes">------------------</div>
            <div id="CoolingTower:SingleSpeed" onclick="object_type_clicked(this.id)">[----] CoolingTower:SingleSpeed</div>
            <div id="CoolingTower:TwoSpeed" onclick="object_type_clicked(this.id)">[----] CoolingTower:TwoSpeed</div>
            <div id="CoolingTower:VariableSpeed:Merkel" onclick="object_type_clicked(this.id)">[----] CoolingTower:VariableSpeed:Merkel</div>
            <div id="CoolingTower:VariableSpeed" onclick="object_type_clicked(this.id)">[----] CoolingTower:VariableSpeed</div>
            <div id="CoolingTowerPerformance:CoolTools" onclick="object_type_clicked(this.id)">[----] CoolingTowerPerformance:CoolTools</div>
            <div id="CoolingTowerPerformance:YorkCalc" onclick="object_type_clicked(this.id)">[----] CoolingTowerPerformance:YorkCalc</div>
            <div id="EvaporativeFluidCooler:SingleSpeed" onclick="object_type_clicked(this.id)">[----] EvaporativeFluidCooler:SingleSpeed</div>
            <div id="EvaporativeFluidCooler:TwoSpeed" onclick="object_type_clicked(this.id)">[----] EvaporativeFluidCooler:TwoSpeed</div>
            <div id="FluidCooler:SingleSpeed" onclick="object_type_clicked(this.id)">[----] FluidCooler:SingleSpeed</div>
            <div id="FluidCooler:TwoSpeed" onclick="object_type_clicked(this.id)">[----] FluidCooler:TwoSpeed</div>
            <div id="GroundHeatExchanger:System" onclick="object_type_clicked(this.id)">[----] GroundHeatExchanger:System</div>
            <div id="GroundHeatExchanger:Vertical:Properties" onclick="object_type_clicked(this.id)">[----] GroundHeatExchanger:Vertical:Properties</div>
            <div id="GroundHeatExchanger:Vertical:Array" onclick="object_type_clicked(this.id)">[----] GroundHeatExchanger:Vertical:Array</div>
            <div id="GroundHeatExchanger:Vertical:Single" onclick="object_type_clicked(this.id)">[----] GroundHeatExchanger:Vertical:Single</div>
            <div id="GroundHeatExchanger:ResponseFactors" onclick="object_type_clicked(this.id)">[----] GroundHeatExchanger:ResponseFactors</div>
            <div id="GroundHeatExchanger:Pond" onclick="object_type_clicked(this.id)">[----] GroundHeatExchanger:Pond</div>
            <div id="GroundHeatExchanger:Surface" onclick="object_type_clicked(this.id)">[----] GroundHeatExchanger:Surface</div>
            <div id="GroundHeatExchanger:HorizontalTrench" onclick="object_type_clicked(this.id)">[----] GroundHeatExchanger:HorizontalTrench</div>
            <div id="GroundHeatExchanger:Slinky" onclick="object_type_clicked(this.id)">[----] GroundHeatExchanger:Slinky</div>
            <div id="HeatExchanger:FluidToFluid" onclick="object_type_clicked(this.id)">[----] HeatExchanger:FluidToFluid</div>
            <br id="Water Heaters and Thermal Storage_br">
            <div id="Water Heaters and Thermal Storage">Water Heaters and Thermal Storage</div>
            <div id="Water Heaters and Thermal Storage_dashes">------------------</div>
            <div id="WaterHeater:Mixed" onclick="object_type_clicked(this.id)">[----] WaterHeater:Mixed</div>
            <div id="WaterHeater:Stratified" onclick="object_type_clicked(this.id)">[----] WaterHeater:Stratified</div>
            <div id="WaterHeater:Sizing" onclick="object_type_clicked(this.id)">[----] WaterHeater:Sizing</div>
            <div id="WaterHeater:HeatPump:PumpedCondenser" onclick="object_type_clicked(this.id)">[----] WaterHeater:HeatPump:PumpedCondenser</div>
            <div id="WaterHeater:HeatPump:WrappedCondenser" onclick="object_type_clicked(this.id)">[----] WaterHeater:HeatPump:WrappedCondenser</div>
            <div id="ThermalStorage:Ice:Simple" onclick="object_type_clicked(this.id)">[----] ThermalStorage:Ice:Simple</div>
            <div id="ThermalStorage:Ice:Detailed" onclick="object_type_clicked(this.id)">[----] ThermalStorage:Ice:Detailed</div>
            <div id="ThermalStorage:ChilledWater:Mixed" onclick="object_type_clicked(this.id)">[----] ThermalStorage:ChilledWater:Mixed</div>
            <div id="ThermalStorage:ChilledWater:Stratified" onclick="object_type_clicked(this.id)">[----] ThermalStorage:ChilledWater:Stratified</div>
            <br id="Plant-Condenser Loops_br">
            <div id="Plant-Condenser Loops">Plant-Condenser Loops</div>
            <div id="Plant-Condenser Loops_dashes">------------------</div>
            <div id="PlantLoop" onclick="object_type_clicked(this.id)">[----] PlantLoop</div>
            <div id="CondenserLoop" onclick="object_type_clicked(this.id)">[----] CondenserLoop</div>
            <br id="Plant-Condenser Control_br">
            <div id="Plant-Condenser Control">Plant-Condenser Control</div>
            <div id="Plant-Condenser Control_dashes">------------------</div>
            <div id="PlantEquipmentList" onclick="object_type_clicked(this.id)">[----] PlantEquipmentList</div>
            <div id="CondenserEquipmentList" onclick="object_type_clicked(this.id)">[----] CondenserEquipmentList</div>
            <div id="PlantEquipmentOperation:Uncontrolled" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:Uncontrolled</div>
            <div id="PlantEquipmentOperation:CoolingLoad" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:CoolingLoad</div>
            <div id="PlantEquipmentOperation:HeatingLoad" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:HeatingLoad</div>
            <div id="PlantEquipmentOperation:OutdoorDryBulb" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:OutdoorDryBulb</div>
            <div id="PlantEquipmentOperation:OutdoorWetBulb" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:OutdoorWetBulb</div>
            <div id="PlantEquipmentOperation:OutdoorRelativeHumidity" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:OutdoorRelativeHumidity</div>
            <div id="PlantEquipmentOperation:OutdoorDewpoint" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:OutdoorDewpoint</div>
            <div id="PlantEquipmentOperation:ComponentSetpoint" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:ComponentSetpoint</div>
            <div id="PlantEquipmentOperation:ThermalEnergyStorage" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:ThermalEnergyStorage</div>
            <div id="PlantEquipmentOperation:OutdoorDryBulbDifference" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:OutdoorDryBulbDifference</div>
            <div id="PlantEquipmentOperation:OutdoorWetBulbDifference" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:OutdoorWetBulbDifference</div>
            <div id="PlantEquipmentOperation:OutdoorDewpointDifference" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:OutdoorDewpointDifference</div>
            <div id="PlantEquipmentOperationSchemes" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperationSchemes</div>
            <div id="CondenserEquipmentOperationSchemes" onclick="object_type_clicked(this.id)">[----] CondenserEquipmentOperationSchemes</div>
            <br id="Energy Management System (EMS)_br">
            <div id="Energy Management System (EMS)">Energy Management System (EMS)</div>
            <div id="Energy Management System (EMS)_dashes">------------------</div>
            <div id="EnergyManagementSystem:Sensor" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:Sensor</div>
            <div id="EnergyManagementSystem:Actuator" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:Actuator</div>
            <div id="EnergyManagementSystem:ProgramCallingManager" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:ProgramCallingManager</div>
            <div id="EnergyManagementSystem:Program" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:Program</div>
            <div id="EnergyManagementSystem:Subroutine" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:Subroutine</div>
            <div id="EnergyManagementSystem:GlobalVariable" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:GlobalVariable</div>
            <div id="EnergyManagementSystem:OutputVariable" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:OutputVariable</div>
            <div id="EnergyManagementSystem:MeteredOutputVariable" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:MeteredOutputVariable</div>
            <div id="EnergyManagementSystem:TrendVariable" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:TrendVariable</div>
            <div id="EnergyManagementSystem:InternalVariable" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:InternalVariable</div>
            <div id="EnergyManagementSystem:CurveOrTableIndexVariable" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:CurveOrTableIndexVariable</div>
            <div id="EnergyManagementSystem:ConstructionIndexVariable" onclick="object_type_clicked(this.id)">[----] EnergyManagementSystem:ConstructionIndexVariable</div>
            <br id="External Interface_br">
            <div id="External Interface">External Interface</div>
            <div id="External Interface_dashes">------------------</div>
            <div id="ExternalInterface" onclick="object_type_clicked(this.id)">[----] ExternalInterface</div>
            <div id="ExternalInterface:Schedule" onclick="object_type_clicked(this.id)">[----] ExternalInterface:Schedule</div>
            <div id="ExternalInterface:Variable" onclick="object_type_clicked(this.id)">[----] ExternalInterface:Variable</div>
            <div id="ExternalInterface:Actuator" onclick="object_type_clicked(this.id)">[----] ExternalInterface:Actuator</div>
            <div id="ExternalInterface:FunctionalMockupUnitImport" onclick="object_type_clicked(this.id)">[----] ExternalInterface:FunctionalMockupUnitImport</div>
            <div id="ExternalInterface:FunctionalMockupUnitImport:From:Variable" onclick="object_type_clicked(this.id)">[----] ExternalInterface:FunctionalMockupUnitImport:From:Variable</div>
            <div id="ExternalInterface:FunctionalMockupUnitImport:To:Schedule" onclick="object_type_clicked(this.id)">[----] ExternalInterface:FunctionalMockupUnitImport:To:Schedule</div>
            <div id="ExternalInterface:FunctionalMockupUnitImport:To:Actuator" onclick="object_type_clicked(this.id)">[----] ExternalInterface:FunctionalMockupUnitImport:To:Actuator</div>
            <div id="ExternalInterface:FunctionalMockupUnitImport:To:Variable" onclick="object_type_clicked(this.id)">[----] ExternalInterface:FunctionalMockupUnitImport:To:Variable</div>
            <div id="ExternalInterface:FunctionalMockupUnitExport:From:Variable" onclick="object_type_clicked(this.id)">[----] ExternalInterface:FunctionalMockupUnitExport:From:Variable</div>
            <div id="ExternalInterface:FunctionalMockupUnitExport:To:Schedule" onclick="object_type_clicked(this.id)">[----] ExternalInterface:FunctionalMockupUnitExport:To:Schedule</div>
            <div id="ExternalInterface:FunctionalMockupUnitExport:To:Actuator" onclick="object_type_clicked(this.id)">[----] ExternalInterface:FunctionalMockupUnitExport:To:Actuator</div>
            <div id="ExternalInterface:FunctionalMockupUnitExport:To:Variable" onclick="object_type_clicked(this.id)">[----] ExternalInterface:FunctionalMockupUnitExport:To:Variable</div>
            <br id="User Defined HVAC and Plant Component Models_br">
            <div id="User Defined HVAC and Plant Component Models">User Defined HVAC and Plant Component Models</div>
            <div id="User Defined HVAC and Plant Component Models_dashes">------------------</div>
            <div id="ZoneHVAC:ForcedAir:UserDefined" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:ForcedAir:UserDefined</div>
            <div id="AirTerminal:SingleDuct:UserDefined" onclick="object_type_clicked(this.id)">[----] AirTerminal:SingleDuct:UserDefined</div>
            <div id="Coil:UserDefined" onclick="object_type_clicked(this.id)">[----] Coil:UserDefined</div>
            <div id="PlantComponent:UserDefined" onclick="object_type_clicked(this.id)">[----] PlantComponent:UserDefined</div>
            <div id="PlantEquipmentOperation:UserDefined" onclick="object_type_clicked(this.id)">[----] PlantEquipmentOperation:UserDefined</div>
            <br id="System Availability Managers_br">
            <div id="System Availability Managers">System Availability Managers</div>
            <div id="System Availability Managers_dashes">------------------</div>
            <div id="AvailabilityManager:Scheduled" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:Scheduled</div>
            <div id="AvailabilityManager:ScheduledOn" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:ScheduledOn</div>
            <div id="AvailabilityManager:ScheduledOff" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:ScheduledOff</div>
            <div id="AvailabilityManager:OptimumStart" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:OptimumStart</div>
            <div id="AvailabilityManager:NightCycle" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:NightCycle</div>
            <div id="AvailabilityManager:DifferentialThermostat" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:DifferentialThermostat</div>
            <div id="AvailabilityManager:HighTemperatureTurnOff" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:HighTemperatureTurnOff</div>
            <div id="AvailabilityManager:HighTemperatureTurnOn" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:HighTemperatureTurnOn</div>
            <div id="AvailabilityManager:LowTemperatureTurnOff" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:LowTemperatureTurnOff</div>
            <div id="AvailabilityManager:LowTemperatureTurnOn" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:LowTemperatureTurnOn</div>
            <div id="AvailabilityManager:NightVentilation" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:NightVentilation</div>
            <div id="AvailabilityManager:HybridVentilation" onclick="object_type_clicked(this.id)">[----] AvailabilityManager:HybridVentilation</div>
            <div id="AvailabilityManagerAssignmentList" onclick="object_type_clicked(this.id)">[----] AvailabilityManagerAssignmentList</div>
            <br id="Setpoint Managers_br">
            <div id="Setpoint Managers">Setpoint Managers</div>
            <div id="Setpoint Managers_dashes">------------------</div>
            <div id="SetpointManager:Scheduled" onclick="object_type_clicked(this.id)">[----] SetpointManager:Scheduled</div>
            <div id="SetpointManager:Scheduled:DualSetpoint" onclick="object_type_clicked(this.id)">[----] SetpointManager:Scheduled:DualSetpoint</div>
            <div id="SetpointManager:OutdoorAirReset" onclick="object_type_clicked(this.id)">[----] SetpointManager:OutdoorAirReset</div>
            <div id="SetpointManager:SingleZone:Reheat" onclick="object_type_clicked(this.id)">[----] SetpointManager:SingleZone:Reheat</div>
            <div id="SetpointManager:SingleZone:Heating" onclick="object_type_clicked(this.id)">[----] SetpointManager:SingleZone:Heating</div>
            <div id="SetpointManager:SingleZone:Cooling" onclick="object_type_clicked(this.id)">[----] SetpointManager:SingleZone:Cooling</div>
            <div id="SetpointManager:SingleZone:Humidity:Minimum" onclick="object_type_clicked(this.id)">[----] SetpointManager:SingleZone:Humidity:Minimum</div>
            <div id="SetpointManager:SingleZone:Humidity:Maximum" onclick="object_type_clicked(this.id)">[----] SetpointManager:SingleZone:Humidity:Maximum</div>
            <div id="SetpointManager:MixedAir" onclick="object_type_clicked(this.id)">[----] SetpointManager:MixedAir</div>
            <div id="SetpointManager:OutdoorAirPretreat" onclick="object_type_clicked(this.id)">[----] SetpointManager:OutdoorAirPretreat</div>
            <div id="SetpointManager:Warmest" onclick="object_type_clicked(this.id)">[----] SetpointManager:Warmest</div>
            <div id="SetpointManager:Coldest" onclick="object_type_clicked(this.id)">[----] SetpointManager:Coldest</div>
            <div id="SetpointManager:ReturnAirBypassFlow" onclick="object_type_clicked(this.id)">[----] SetpointManager:ReturnAirBypassFlow</div>
            <div id="SetpointManager:WarmestTemperatureFlow" onclick="object_type_clicked(this.id)">[----] SetpointManager:WarmestTemperatureFlow</div>
            <div id="SetpointManager:MultiZone:Heating:Average" onclick="object_type_clicked(this.id)">[----] SetpointManager:MultiZone:Heating:Average</div>
            <div id="SetpointManager:MultiZone:Cooling:Average" onclick="object_type_clicked(this.id)">[----] SetpointManager:MultiZone:Cooling:Average</div>
            <div id="SetpointManager:MultiZone:MinimumHumidity:Average" onclick="object_type_clicked(this.id)">[----] SetpointManager:MultiZone:MinimumHumidity:Average</div>
            <div id="SetpointManager:MultiZone:MaximumHumidity:Average" onclick="object_type_clicked(this.id)">[----] SetpointManager:MultiZone:MaximumHumidity:Average</div>
            <div id="SetpointManager:MultiZone:Humidity:Minimum" onclick="object_type_clicked(this.id)">[----] SetpointManager:MultiZone:Humidity:Minimum</div>
            <div id="SetpointManager:MultiZone:Humidity:Maximum" onclick="object_type_clicked(this.id)">[----] SetpointManager:MultiZone:Humidity:Maximum</div>
            <div id="SetpointManager:FollowOutdoorAirTemperature" onclick="object_type_clicked(this.id)">[----] SetpointManager:FollowOutdoorAirTemperature</div>
            <div id="SetpointManager:FollowSystemNodeTemperature" onclick="object_type_clicked(this.id)">[----] SetpointManager:FollowSystemNodeTemperature</div>
            <div id="SetpointManager:FollowGroundTemperature" onclick="object_type_clicked(this.id)">[----] SetpointManager:FollowGroundTemperature</div>
            <div id="SetpointManager:CondenserEnteringReset" onclick="object_type_clicked(this.id)">[----] SetpointManager:CondenserEnteringReset</div>
            <div id="SetpointManager:CondenserEnteringReset:Ideal" onclick="object_type_clicked(this.id)">[----] SetpointManager:CondenserEnteringReset:Ideal</div>
            <div id="SetpointManager:SingleZone:OneStageCooling" onclick="object_type_clicked(this.id)">[----] SetpointManager:SingleZone:OneStageCooling</div>
            <div id="SetpointManager:SingleZone:OneStageHeating" onclick="object_type_clicked(this.id)">[----] SetpointManager:SingleZone:OneStageHeating</div>
            <div id="SetpointManager:ReturnTemperature:ChilledWater" onclick="object_type_clicked(this.id)">[----] SetpointManager:ReturnTemperature:ChilledWater</div>
            <div id="SetpointManager:ReturnTemperature:HotWater" onclick="object_type_clicked(this.id)">[----] SetpointManager:ReturnTemperature:HotWater</div>
            <br id="Refrigeration_br">
            <div id="Refrigeration">Refrigeration</div>
            <div id="Refrigeration_dashes">------------------</div>
            <div id="Refrigeration:Case" onclick="object_type_clicked(this.id)">[----] Refrigeration:Case</div>
            <div id="Refrigeration:CompressorRack" onclick="object_type_clicked(this.id)">[----] Refrigeration:CompressorRack</div>
            <div id="Refrigeration:CaseAndWalkInList" onclick="object_type_clicked(this.id)">[----] Refrigeration:CaseAndWalkInList</div>
            <div id="Refrigeration:Condenser:AirCooled" onclick="object_type_clicked(this.id)">[----] Refrigeration:Condenser:AirCooled</div>
            <div id="Refrigeration:Condenser:EvaporativeCooled" onclick="object_type_clicked(this.id)">[----] Refrigeration:Condenser:EvaporativeCooled</div>
            <div id="Refrigeration:Condenser:WaterCooled" onclick="object_type_clicked(this.id)">[----] Refrigeration:Condenser:WaterCooled</div>
            <div id="Refrigeration:Condenser:Cascade" onclick="object_type_clicked(this.id)">[----] Refrigeration:Condenser:Cascade</div>
            <div id="Refrigeration:GasCooler:AirCooled" onclick="object_type_clicked(this.id)">[----] Refrigeration:GasCooler:AirCooled</div>
            <div id="Refrigeration:TransferLoadList" onclick="object_type_clicked(this.id)">[----] Refrigeration:TransferLoadList</div>
            <div id="Refrigeration:Subcooler" onclick="object_type_clicked(this.id)">[----] Refrigeration:Subcooler</div>
            <div id="Refrigeration:Compressor" onclick="object_type_clicked(this.id)">[----] Refrigeration:Compressor</div>
            <div id="Refrigeration:CompressorList" onclick="object_type_clicked(this.id)">[----] Refrigeration:CompressorList</div>
            <div id="Refrigeration:System" onclick="object_type_clicked(this.id)">[----] Refrigeration:System</div>
            <div id="Refrigeration:TranscriticalSystem" onclick="object_type_clicked(this.id)">[----] Refrigeration:TranscriticalSystem</div>
            <div id="Refrigeration:SecondarySystem" onclick="object_type_clicked(this.id)">[----] Refrigeration:SecondarySystem</div>
            <div id="Refrigeration:WalkIn" onclick="object_type_clicked(this.id)">[----] Refrigeration:WalkIn</div>
            <div id="Refrigeration:AirChiller" onclick="object_type_clicked(this.id)">[----] Refrigeration:AirChiller</div>
            <div id="ZoneHVAC:RefrigerationChillerSet" onclick="object_type_clicked(this.id)">[----] ZoneHVAC:RefrigerationChillerSet</div>
            <br id="Demand Limiting Controls_br">
            <div id="Demand Limiting Controls">Demand Limiting Controls</div>
            <div id="Demand Limiting Controls_dashes">------------------</div>
            <div id="DemandManagerAssignmentList" onclick="object_type_clicked(this.id)">[----] DemandManagerAssignmentList</div>
            <div id="DemandManager:ExteriorLights" onclick="object_type_clicked(this.id)">[----] DemandManager:ExteriorLights</div>
            <div id="DemandManager:Lights" onclick="object_type_clicked(this.id)">[----] DemandManager:Lights</div>
            <div id="DemandManager:ElectricEquipment" onclick="object_type_clicked(this.id)">[----] DemandManager:ElectricEquipment</div>
            <div id="DemandManager:Thermostats" onclick="object_type_clicked(this.id)">[----] DemandManager:Thermostats</div>
            <div id="DemandManager:Ventilation" onclick="object_type_clicked(this.id)">[----] DemandManager:Ventilation</div>
            <br id="Electric Load Center-Generator Specifications_br">
            <div id="Electric Load Center-Generator Specifications">Electric Load Center-Generator Specifications</div>
            <div id="Electric Load Center-Generator Specifications_dashes">------------------</div>
            <div id="Generator:InternalCombustionEngine" onclick="object_type_clicked(this.id)">[----] Generator:InternalCombustionEngine</div>
            <div id="Generator:CombustionTurbine" onclick="object_type_clicked(this.id)">[----] Generator:CombustionTurbine</div>
            <div id="Generator:MicroTurbine" onclick="object_type_clicked(this.id)">[----] Generator:MicroTurbine</div>
            <div id="Generator:Photovoltaic" onclick="object_type_clicked(this.id)">[----] Generator:Photovoltaic</div>
            <div id="PhotovoltaicPerformance:Simple" onclick="object_type_clicked(this.id)">[----] PhotovoltaicPerformance:Simple</div>
            <div id="PhotovoltaicPerformance:EquivalentOne-Diode" onclick="object_type_clicked(this.id)">[----] PhotovoltaicPerformance:EquivalentOne-Diode</div>
            <div id="PhotovoltaicPerformance:Sandia" onclick="object_type_clicked(this.id)">[----] PhotovoltaicPerformance:Sandia</div>
            <div id="Generator:PVWatts" onclick="object_type_clicked(this.id)">[----] Generator:PVWatts</div>
            <div id="ElectricLoadCenter:Inverter:PVWatts" onclick="object_type_clicked(this.id)">[----] ElectricLoadCenter:Inverter:PVWatts</div>
            <div id="Generator:FuelCell" onclick="object_type_clicked(this.id)">[----] Generator:FuelCell</div>
            <div id="Generator:FuelCell:PowerModule" onclick="object_type_clicked(this.id)">[----] Generator:FuelCell:PowerModule</div>
            <div id="Generator:FuelCell:AirSupply" onclick="object_type_clicked(this.id)">[----] Generator:FuelCell:AirSupply</div>
            <div id="Generator:FuelCell:WaterSupply" onclick="object_type_clicked(this.id)">[----] Generator:FuelCell:WaterSupply</div>
            <div id="Generator:FuelCell:AuxiliaryHeater" onclick="object_type_clicked(this.id)">[----] Generator:FuelCell:AuxiliaryHeater</div>
            <div id="Generator:FuelCell:ExhaustGasToWaterHeatExchanger" onclick="object_type_clicked(this.id)">[----] Generator:FuelCell:ExhaustGasToWaterHeatExchanger</div>
            <div id="Generator:FuelCell:ElectricalStorage" onclick="object_type_clicked(this.id)">[----] Generator:FuelCell:ElectricalStorage</div>
            <div id="Generator:FuelCell:Inverter" onclick="object_type_clicked(this.id)">[----] Generator:FuelCell:Inverter</div>
            <div id="Generator:FuelCell:StackCooler" onclick="object_type_clicked(this.id)">[----] Generator:FuelCell:StackCooler</div>
            <div id="Generator:MicroCHP" onclick="object_type_clicked(this.id)">[----] Generator:MicroCHP</div>
            <div id="Generator:MicroCHP:NonNormalizedParameters" onclick="object_type_clicked(this.id)">[----] Generator:MicroCHP:NonNormalizedParameters</div>
            <div id="Generator:FuelSupply" onclick="object_type_clicked(this.id)">[----] Generator:FuelSupply</div>
            <div id="Generator:WindTurbine" onclick="object_type_clicked(this.id)">[----] Generator:WindTurbine</div>
            <div id="ElectricLoadCenter:Generators" onclick="object_type_clicked(this.id)">[----] ElectricLoadCenter:Generators</div>
            <div id="ElectricLoadCenter:Inverter:Simple" onclick="object_type_clicked(this.id)">[----] ElectricLoadCenter:Inverter:Simple</div>
            <div id="ElectricLoadCenter:Inverter:FunctionOfPower" onclick="object_type_clicked(this.id)">[----] ElectricLoadCenter:Inverter:FunctionOfPower</div>
            <div id="ElectricLoadCenter:Inverter:LookUpTable" onclick="object_type_clicked(this.id)">[----] ElectricLoadCenter:Inverter:LookUpTable</div>
            <div id="ElectricLoadCenter:Storage:Simple" onclick="object_type_clicked(this.id)">[----] ElectricLoadCenter:Storage:Simple</div>
            <div id="ElectricLoadCenter:Storage:Battery" onclick="object_type_clicked(this.id)">[----] ElectricLoadCenter:Storage:Battery</div>
            <div id="ElectricLoadCenter:Transformer" onclick="object_type_clicked(this.id)">[----] ElectricLoadCenter:Transformer</div>
            <div id="ElectricLoadCenter:Distribution" onclick="object_type_clicked(this.id)">[----] ElectricLoadCenter:Distribution</div>
            <div id="ElectricLoadCenter:Storage:Converter" onclick="object_type_clicked(this.id)">[----] ElectricLoadCenter:Storage:Converter</div>
            <br id="Water Systems_br">
            <div id="Water Systems">Water Systems</div>
            <div id="Water Systems_dashes">------------------</div>
            <div id="WaterUse:Equipment" onclick="object_type_clicked(this.id)">[----] WaterUse:Equipment</div>
            <div id="WaterUse:Connections" onclick="object_type_clicked(this.id)">[----] WaterUse:Connections</div>
            <div id="WaterUse:Storage" onclick="object_type_clicked(this.id)">[----] WaterUse:Storage</div>
            <div id="WaterUse:Well" onclick="object_type_clicked(this.id)">[----] WaterUse:Well</div>
            <div id="WaterUse:RainCollector" onclick="object_type_clicked(this.id)">[----] WaterUse:RainCollector</div>
            <br id="Operational Faults_br">
            <div id="Operational Faults">Operational Faults</div>
            <div id="Operational Faults_dashes">------------------</div>
            <div id="FaultModel:TemperatureSensorOffset:OutdoorAir" onclick="object_type_clicked(this.id)">[----] FaultModel:TemperatureSensorOffset:OutdoorAir</div>
            <div id="FaultModel:HumiditySensorOffset:OutdoorAir" onclick="object_type_clicked(this.id)">[----] FaultModel:HumiditySensorOffset:OutdoorAir</div>
            <div id="FaultModel:EnthalpySensorOffset:OutdoorAir" onclick="object_type_clicked(this.id)">[----] FaultModel:EnthalpySensorOffset:OutdoorAir</div>
            <div id="FaultModel:TemperatureSensorOffset:ReturnAir" onclick="object_type_clicked(this.id)">[----] FaultModel:TemperatureSensorOffset:ReturnAir</div>
            <div id="FaultModel:EnthalpySensorOffset:ReturnAir" onclick="object_type_clicked(this.id)">[----] FaultModel:EnthalpySensorOffset:ReturnAir</div>
            <div id="FaultModel:TemperatureSensorOffset:ChillerSupplyWater" onclick="object_type_clicked(this.id)">[----] FaultModel:TemperatureSensorOffset:ChillerSupplyWater</div>
            <div id="FaultModel:TemperatureSensorOffset:CoilSupplyAir" onclick="object_type_clicked(this.id)">[----] FaultModel:TemperatureSensorOffset:CoilSupplyAir</div>
            <div id="FaultModel:TemperatureSensorOffset:CondenserSupplyWater" onclick="object_type_clicked(this.id)">[----] FaultModel:TemperatureSensorOffset:CondenserSupplyWater</div>
            <div id="FaultModel:ThermostatOffset" onclick="object_type_clicked(this.id)">[----] FaultModel:ThermostatOffset</div>
            <div id="FaultModel:HumidistatOffset" onclick="object_type_clicked(this.id)">[----] FaultModel:HumidistatOffset</div>
            <div id="FaultModel:Fouling:AirFilter" onclick="object_type_clicked(this.id)">[----] FaultModel:Fouling:AirFilter</div>
            <div id="FaultModel:Fouling:Boiler" onclick="object_type_clicked(this.id)">[----] FaultModel:Fouling:Boiler</div>
            <div id="FaultModel:Fouling:EvaporativeCooler" onclick="object_type_clicked(this.id)">[----] FaultModel:Fouling:EvaporativeCooler</div>
            <div id="FaultModel:Fouling:Chiller" onclick="object_type_clicked(this.id)">[----] FaultModel:Fouling:Chiller</div>
            <div id="FaultModel:Fouling:CoolingTower" onclick="object_type_clicked(this.id)">[----] FaultModel:Fouling:CoolingTower</div>
            <div id="FaultModel:Fouling:Coil" onclick="object_type_clicked(this.id)">[----] FaultModel:Fouling:Coil</div>
            <br id="General Data Entry_br">
            <div id="General Data Entry">General Data Entry</div>
            <div id="General Data Entry_dashes">------------------</div>
            <div id="Matrix:TwoDimension" onclick="object_type_clicked(this.id)">[----] Matrix:TwoDimension</div>
            <br id="Hybrid Model_br">
            <div id="Hybrid Model">Hybrid Model</div>
            <div id="Hybrid Model_dashes">------------------</div>
            <div id="HybridModel:Zone" onclick="object_type_clicked(this.id)">[----] HybridModel:Zone</div>
            <br id="Performance Curves_br">
            <div id="Performance Curves">Performance Curves</div>
            <div id="Performance Curves_dashes">------------------</div>
            <div id="Curve:Linear" onclick="object_type_clicked(this.id)">[----] Curve:Linear</div>
            <div id="Curve:QuadLinear" onclick="object_type_clicked(this.id)">[----] Curve:QuadLinear</div>
            <div id="Curve:Quadratic" onclick="object_type_clicked(this.id)">[----] Curve:Quadratic</div>
            <div id="Curve:Cubic" onclick="object_type_clicked(this.id)">[----] Curve:Cubic</div>
            <div id="Curve:Quartic" onclick="object_type_clicked(this.id)">[----] Curve:Quartic</div>
            <div id="Curve:Exponent" onclick="object_type_clicked(this.id)">[----] Curve:Exponent</div>
            <div id="Curve:Bicubic" onclick="object_type_clicked(this.id)">[----] Curve:Bicubic</div>
            <div id="Curve:Biquadratic" onclick="object_type_clicked(this.id)">[----] Curve:Biquadratic</div>
            <div id="Curve:QuadraticLinear" onclick="object_type_clicked(this.id)">[----] Curve:QuadraticLinear</div>
            <div id="Curve:CubicLinear" onclick="object_type_clicked(this.id)">[----] Curve:CubicLinear</div>
            <div id="Curve:Triquadratic" onclick="object_type_clicked(this.id)">[----] Curve:Triquadratic</div>
            <div id="Curve:Functional:PressureDrop" onclick="object_type_clicked(this.id)">[----] Curve:Functional:PressureDrop</div>
            <div id="Curve:FanPressureRise" onclick="object_type_clicked(this.id)">[----] Curve:FanPressureRise</div>
            <div id="Curve:ExponentialSkewNormal" onclick="object_type_clicked(this.id)">[----] Curve:ExponentialSkewNormal</div>
            <div id="Curve:Sigmoid" onclick="object_type_clicked(this.id)">[----] Curve:Sigmoid</div>
            <div id="Curve:RectangularHyperbola1" onclick="object_type_clicked(this.id)">[----] Curve:RectangularHyperbola1</div>
            <div id="Curve:RectangularHyperbola2" onclick="object_type_clicked(this.id)">[----] Curve:RectangularHyperbola2</div>
            <div id="Curve:ExponentialDecay" onclick="object_type_clicked(this.id)">[----] Curve:ExponentialDecay</div>
            <div id="Curve:DoubleExponentialDecay" onclick="object_type_clicked(this.id)">[----] Curve:DoubleExponentialDecay</div>
            <div id="Curve:ChillerPartLoadWithLift" onclick="object_type_clicked(this.id)">[----] Curve:ChillerPartLoadWithLift</div>
            <br id="Performance Tables_br">
            <div id="Performance Tables">Performance Tables</div>
            <div id="Performance Tables_dashes">------------------</div>
            <div id="Table:IndependentVariable" onclick="object_type_clicked(this.id)">[----] Table:IndependentVariable</div>
            <div id="Table:IndependentVariableList" onclick="object_type_clicked(this.id)">[----] Table:IndependentVariableList</div>
            <div id="Table:Lookup" onclick="object_type_clicked(this.id)">[----] Table:Lookup</div>
            <br id="Fluid Properties_br">
            <div id="Fluid Properties">Fluid Properties</div>
            <div id="Fluid Properties_dashes">------------------</div>
            <div id="FluidProperties:Name" onclick="object_type_clicked(this.id)">[----] FluidProperties:Name</div>
            <div id="FluidProperties:GlycolConcentration" onclick="object_type_clicked(this.id)">[----] FluidProperties:GlycolConcentration</div>
            <div id="FluidProperties:Temperatures" onclick="object_type_clicked(this.id)">[----] FluidProperties:Temperatures</div>
            <div id="FluidProperties:Saturated" onclick="object_type_clicked(this.id)">[----] FluidProperties:Saturated</div>
            <div id="FluidProperties:Superheated" onclick="object_type_clicked(this.id)">[----] FluidProperties:Superheated</div>
            <div id="FluidProperties:Concentration" onclick="object_type_clicked(this.id)">[----] FluidProperties:Concentration</div>
            <br id="Economics_br">
            <div id="Economics">Economics</div>
            <div id="Economics_dashes">------------------</div>
            <div id="CurrencyType" onclick="object_type_clicked(this.id)">[----] CurrencyType</div>
            <div id="ComponentCost:Adjustments" onclick="object_type_clicked(this.id)">[----] ComponentCost:Adjustments</div>
            <div id="ComponentCost:Reference" onclick="object_type_clicked(this.id)">[----] ComponentCost:Reference</div>
            <div id="ComponentCost:LineItem" onclick="object_type_clicked(this.id)">[----] ComponentCost:LineItem</div>
            <div id="UtilityCost:Tariff" onclick="object_type_clicked(this.id)">[----] UtilityCost:Tariff</div>
            <div id="UtilityCost:Qualify" onclick="object_type_clicked(this.id)">[----] UtilityCost:Qualify</div>
            <div id="UtilityCost:Charge:Simple" onclick="object_type_clicked(this.id)">[----] UtilityCost:Charge:Simple</div>
            <div id="UtilityCost:Charge:Block" onclick="object_type_clicked(this.id)">[----] UtilityCost:Charge:Block</div>
            <div id="UtilityCost:Ratchet" onclick="object_type_clicked(this.id)">[----] UtilityCost:Ratchet</div>
            <div id="UtilityCost:Variable" onclick="object_type_clicked(this.id)">[----] UtilityCost:Variable</div>
            <div id="UtilityCost:Computation" onclick="object_type_clicked(this.id)">[----] UtilityCost:Computation</div>
            <div id="LifeCycleCost:Parameters" onclick="object_type_clicked(this.id)">[----] LifeCycleCost:Parameters</div>
            <div id="LifeCycleCost:RecurringCosts" onclick="object_type_clicked(this.id)">[----] LifeCycleCost:RecurringCosts</div>
            <div id="LifeCycleCost:NonrecurringCost" onclick="object_type_clicked(this.id)">[----] LifeCycleCost:NonrecurringCost</div>
            <div id="LifeCycleCost:UsePriceEscalation" onclick="object_type_clicked(this.id)">[----] LifeCycleCost:UsePriceEscalation</div>
            <div id="LifeCycleCost:UseAdjustment" onclick="object_type_clicked(this.id)">[----] LifeCycleCost:UseAdjustment</div>
            <br id="Parametrics_br">
            <div id="Parametrics">Parametrics</div>
            <div id="Parametrics_dashes">------------------</div>
            <div id="Parametric:SetValueForRun" onclick="object_type_clicked(this.id)">[----] Parametric:SetValueForRun</div>
            <div id="Parametric:Logic" onclick="object_type_clicked(this.id)">[----] Parametric:Logic</div>
            <div id="Parametric:RunControl" onclick="object_type_clicked(this.id)">[----] Parametric:RunControl</div>
            <div id="Parametric:FileNameSuffix" onclick="object_type_clicked(this.id)">[----] Parametric:FileNameSuffix</div>
            <br id="Output Reporting_br">
            <div id="Output Reporting">Output Reporting</div>
            <div id="Output Reporting_dashes">------------------</div>
            <div id="Output:VariableDictionary" onclick="object_type_clicked(this.id)">[----] Output:VariableDictionary</div>
            <div id="Output:Surfaces:List" onclick="object_type_clicked(this.id)">[----] Output:Surfaces:List</div>
            <div id="Output:Surfaces:Drawing" onclick="object_type_clicked(this.id)">[----] Output:Surfaces:Drawing</div>
            <div id="Output:Schedules" onclick="object_type_clicked(this.id)">[----] Output:Schedules</div>
            <div id="Output:Constructions" onclick="object_type_clicked(this.id)">[----] Output:Constructions</div>
            <div id="Output:EnergyManagementSystem" onclick="object_type_clicked(this.id)">[----] Output:EnergyManagementSystem</div>
            <div id="OutputControl:SurfaceColorScheme" onclick="object_type_clicked(this.id)">[----] OutputControl:SurfaceColorScheme</div>
            <div id="Output:Table:SummaryReports" onclick="object_type_clicked(this.id)">[----] Output:Table:SummaryReports</div>
            <div id="Output:Table:TimeBins" onclick="object_type_clicked(this.id)">[----] Output:Table:TimeBins</div>
            <div id="Output:Table:Monthly" onclick="object_type_clicked(this.id)">[----] Output:Table:Monthly</div>
            <div id="Output:Table:Annual" onclick="object_type_clicked(this.id)">[----] Output:Table:Annual</div>
            <div id="OutputControl:Table:Style" onclick="object_type_clicked(this.id)">[----] OutputControl:Table:Style</div>
            <div id="OutputControl:ReportingTolerances" onclick="object_type_clicked(this.id)">[----] OutputControl:ReportingTolerances</div>
            <div id="Output:Variable" onclick="object_type_clicked(this.id)">[----] Output:Variable</div>
            <div id="Output:Meter" onclick="object_type_clicked(this.id)">[----] Output:Meter</div>
            <div id="Output:Meter:MeterFileOnly" onclick="object_type_clicked(this.id)">[----] Output:Meter:MeterFileOnly</div>
            <div id="Output:Meter:Cumulative" onclick="object_type_clicked(this.id)">[----] Output:Meter:Cumulative</div>
            <div id="Output:Meter:Cumulative:MeterFileOnly" onclick="object_type_clicked(this.id)">[----] Output:Meter:Cumulative:MeterFileOnly</div>
            <div id="Meter:Custom" onclick="object_type_clicked(this.id)">[----] Meter:Custom</div>
            <div id="Meter:CustomDecrement" onclick="object_type_clicked(this.id)">[----] Meter:CustomDecrement</div>
            <div id="Output:JSON" onclick="object_type_clicked(this.id)">[----] Output:JSON</div>
            <div id="Output:SQLite" onclick="object_type_clicked(this.id)">[----] Output:SQLite</div>
            <div id="Output:EnvironmentalImpactFactors" onclick="object_type_clicked(this.id)">[----] Output:EnvironmentalImpactFactors</div>
            <div id="EnvironmentalImpactFactors" onclick="object_type_clicked(this.id)">[----] EnvironmentalImpactFactors</div>
            <div id="FuelFactors" onclick="object_type_clicked(this.id)">[----] FuelFactors</div>
            <div id="Output:Diagnostics" onclick="object_type_clicked(this.id)">[----] Output:Diagnostics</div>
            <div id="Output:DebuggingData" onclick="object_type_clicked(this.id)">[----] Output:DebuggingData</div>
            <div id="Output:PreprocessorMessage" onclick="object_type_clicked(this.id)">[----] Output:PreprocessorMessage</div>
            <br id="Python Plugin System_br">
            <div id="Python Plugin System">Python Plugin System</div>
            <div id="Python Plugin System_dashes">------------------</div>
            <div id="PythonPlugin:SearchPaths" onclick="object_type_clicked(this.id)">[----] PythonPlugin:SearchPaths</div>
            <div id="PythonPlugin:Instance" onclick="object_type_clicked(this.id)">[----] PythonPlugin:Instance</div>
            <div id="PythonPlugin:Variables" onclick="object_type_clicked(this.id)">[----] PythonPlugin:Variables</div>
            <div id="PythonPlugin:TrendVariable" onclick="object_type_clicked(this.id)">[----] PythonPlugin:TrendVariable</div>
            <div id="PythonPlugin:OutputVariable" onclick="object_type_clicked(this.id)">[----] PythonPlugin:OutputVariable</div>
            <br>`);