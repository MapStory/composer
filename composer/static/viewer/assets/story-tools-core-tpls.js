angular.module("storytools.core.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("error-dialog.html","<div><div class=modal-header><h3 class=modal-title>{{title}}</h3></div><div class=modal-body><span ng-bind-html=msg></span></div><div class=modal-footer><button class=\"btn btn-primary\" ng-click=$close()>OK</button></div></div>");
$templateCache.put("legend/legend.html","<div><div id=legend-btn-border class=map-btn-border tooltip-placement=top tooltip-append-to-body=true tooltip=\"Toggle Legend\"><div id=legend-btn ng-click=toggleLegend()><i class=\"glyphicon glyphicon-list-alt\"></i></div></div><div id=legend-container class=panel><div id=legend-panel class=\"panel collapse legend-panel-body\"><div id=legend-title-heading class=panel-heading><div class=\"legend-panel-title pull-left\" id=legend-title-text translate=legend_title>Legend</div><i class=\"glyphicon glyphicon-remove legend-panel-title pull-right\" ng-click=toggleLegend()></i></div><div class=\"panel in legend-panel-body\" ng-repeat=\"layer in mapManager.storyMap.getStoryLayers().getArray();\"><div class=\"panel-heading legend-item-header\" data-toggle=collapse data-target=\"{{\'#\' + layer.get(\'name\') + \'legend\'}}\">{{layer.get(\'title\')}}</div><div class=\"panel-collapse legend-item in legend-panel-body\" id=\"{{layer.get(\'name\') + \'legend\'}}\"><img ng-src={{getLegendUrl(layer)}}></div></div></div></div></div>");
$templateCache.put("loading/loading.html","<div class=loading-container ng-class=\"{\'hidden\':spinnerHidden}\"><div class=loading><div class=spinner><div class=mask><div class=loading-spinner></div></div></div></div></div>");
$templateCache.put("measure/measurepanel.tpl.html","<div class=\"panel-heading measure-content\"><label>Measure Tools</label><br><div class=\"measure-controls text-center\"><div class=btn-group><button class=\"btn btn-default\" tooltip=Line ng-class=\"{\'btn-primary\' : (measureType == \'line\')}\" ng-click=\"startMeasuring(\'line\')\"><i class=material-icons aria-hidden=true>mode_edit</i></button> <button class=\"btn btn-default\" tooltip=Area ng-class=\"{\'btn-primary\' : (measureType == \'area\')}\" ng-click=\"startMeasuring(\'area\')\"><i class=material-icons aria-hidden=true>picture_in_picture</i></button> <button class=\"btn btn-default\" ng-class=\"{\'disabled\': !isMeasuring}\" tooltip=Stop ng-click=stopMeasuring()><i class=material-icons aria-hidden=true>not_interested</i></button></div></div><label>Units</label><br><div class=\"measure-report text-center\"><div class=btn-group><button class=\"btn btn-default\" ng-repeat=\"unit in unitTypes\" ng-click=changeUnits(unit.type) ng-class=\"{\'btn-primary\' : (unit.type == units)}\">{{ unit.label }}</button></div></div><div ng-show=\"measureLabel > 0\"><label>{{ measureType }}</label><div class=measure-read-out>{{ measureLabel | number }} <em>{{ unitsLabel }}</em></div></div></div>");
$templateCache.put("time/playback-controls.html","<button class=\"btn btn-xs btn-inverse\" ng-click=play() tooltip-placement=top tooltip-append-to-body=true tooltip=\"{{ playbackState }}\"><i class=\"glyphicon glyphicon-{{ playbackState | lowercase }}\"></i></button><div id=slider tooltip-placement=top tooltip-append-to-body=true tooltip=\"{{ currentRange.start|date:\'medium\' }}\"></div><button class=\"btn btn-xs btn-inverse\" ng-click=prev() tooltip-placement=top tooltip-append-to-body=true tooltip=Previous><i class=\"glyphicon glyphicon-fast-backward\"></i></button> <span class=small style=\"color: white;\" ng-hide=\"playbackOptions.mode == \'cumulative\'\">{{ currentRange.start|date:\'medium\' }}</span> <span class=small style=\"color: white;\" ng-show=\"playbackOptions.mode == \'cumulative\'\">{{ currentRange.end|date:\'medium\' }}</span> <button class=\"btn btn-xs btn-inverse\" ng-click=next() tooltip-placement=top tooltip-append-to-body=true tooltip=Next><i class=\"glyphicon glyphicon-fast-forward\"></i></button> <button class=\"btn btn-xs btn-inverse\" ng-click=toggleLoop() tooltip-placement=top tooltip-append-to-body=true tooltip={{loopText}} ng-class=\"{ \'btn-warning\' : loopChapterEnabled, \'btn-success\' : loopStoryEnabled }\"><i ng-class=getLoopButtonGlyph()></i></button> <button class=\"btn btn-xs btn-inverse no-border\" ng-click=toggleTimeLine() tooltip-placement=top tooltip-append-to-body=true tooltip=\"Toggle Timeline\"><i class=\"glyphicon glyphicon-time\"></i></button> <button class=\"btn btn-xs btn-inverse no-border\" ng-click=toggleFullScreen() tooltip-placement=top tooltip-append-to-body=true tooltip=\"Toggle Fullscreen\"><i class=\"glyphicon glyphicon-fullscreen\"></i></button>");
$templateCache.put("time/playback-settings.html","<div style=padding:10px;><div class=radio-inline><label><input type=radio ng-model=playbackOptions.mode ng-change=optionsChanged() value=instant> Instant</label></div><div class=radio-inline><label><input type=radio ng-model=playbackOptions.mode ng-change=optionsChanged() value=range> Range</label></div><div class=radio-inline><label><input type=radio ng-model=playbackOptions.mode ng-change=optionsChanged() value=cumulative> Cumulative</label></div><div class=checkbox-inline><label><input type=checkbox ng-model=playbackOptions.fixed ng-change=optionsChanged()> Fixed Range</label></div></div><div style=padding:10px;><div class=radio-inline><label><input type=radio ng-model=playbackOptions.speed ng-change=optionsChanged() value=1500> 0.5x</label></div><div class=radio-inline><label><input type=radio ng-model=playbackOptions.speed ng-change=optionsChanged() value=1000> normal</label></div><div class=radio-inline><label><input type=radio ng-model=playbackOptions.speed ng-change=optionsChanged() value=500> 2x</label></div><div class=radio-inline><label><input type=radio ng-model=playbackOptions.speed ng-change=optionsChanged() value=300> 4x</label></div><div class=radio-inline><label><input type=radio ng-model=playbackOptions.speed ng-change=optionsChanged() value=125> 8x</label></div></div>");}]);