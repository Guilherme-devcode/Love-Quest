gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDTitlescreenObjects1= [];
gdjs.Title_32ScreenCode.GDTitlescreenObjects2= [];
gdjs.Title_32ScreenCode.GDLogoObjects1= [];
gdjs.Title_32ScreenCode.GDLogoObjects2= [];
gdjs.Title_32ScreenCode.GDStartGameObjects1= [];
gdjs.Title_32ScreenCode.GDStartGameObjects2= [];
gdjs.Title_32ScreenCode.GDNewSpriteObjects1= [];
gdjs.Title_32ScreenCode.GDNewSpriteObjects2= [];
gdjs.Title_32ScreenCode.GDDuckArtworkObjects1= [];
gdjs.Title_32ScreenCode.GDDuckArtworkObjects2= [];


gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11672820);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Maneater [8 Bit Tribute to Hall & Oates] - 8 Bit Universe.mp3", 1, true, 25, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.Title_32ScreenCode.GDStartGameObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDStartGameObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDStartGameObjects1[i].getBehavior("Flash").Flash(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDTitlescreenObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitlescreenObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLogoObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLogoObjects2.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects1.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects2.length = 0;
gdjs.Title_32ScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDuckArtworkObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDuckArtworkObjects2.length = 0;

gdjs.Title_32ScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
