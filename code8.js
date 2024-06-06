gdjs.Level_328Code = {};
gdjs.Level_328Code.GDTheEndObjects1= [];
gdjs.Level_328Code.GDTheEndObjects2= [];
gdjs.Level_328Code.GDBackgroundObjects1= [];
gdjs.Level_328Code.GDBackgroundObjects2= [];
gdjs.Level_328Code.GDBlackBarsObjects1= [];
gdjs.Level_328Code.GDBlackBarsObjects2= [];
gdjs.Level_328Code.GDNestObjects1= [];
gdjs.Level_328Code.GDNestObjects2= [];
gdjs.Level_328Code.GDHeartObjects1= [];
gdjs.Level_328Code.GDHeartObjects2= [];
gdjs.Level_328Code.GDNewSpriteObjects1= [];
gdjs.Level_328Code.GDNewSpriteObjects2= [];
gdjs.Level_328Code.GDNewSprite2Objects1= [];
gdjs.Level_328Code.GDNewSprite2Objects2= [];
gdjs.Level_328Code.GDDuckArtworkObjects1= [];
gdjs.Level_328Code.GDDuckArtworkObjects2= [];


gdjs.Level_328Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "TheEnd.mp3", true, 100, 1);
}}

}


};

gdjs.Level_328Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_328Code.GDTheEndObjects1.length = 0;
gdjs.Level_328Code.GDTheEndObjects2.length = 0;
gdjs.Level_328Code.GDBackgroundObjects1.length = 0;
gdjs.Level_328Code.GDBackgroundObjects2.length = 0;
gdjs.Level_328Code.GDBlackBarsObjects1.length = 0;
gdjs.Level_328Code.GDBlackBarsObjects2.length = 0;
gdjs.Level_328Code.GDNestObjects1.length = 0;
gdjs.Level_328Code.GDNestObjects2.length = 0;
gdjs.Level_328Code.GDHeartObjects1.length = 0;
gdjs.Level_328Code.GDHeartObjects2.length = 0;
gdjs.Level_328Code.GDNewSpriteObjects1.length = 0;
gdjs.Level_328Code.GDNewSpriteObjects2.length = 0;
gdjs.Level_328Code.GDNewSprite2Objects1.length = 0;
gdjs.Level_328Code.GDNewSprite2Objects2.length = 0;
gdjs.Level_328Code.GDDuckArtworkObjects1.length = 0;
gdjs.Level_328Code.GDDuckArtworkObjects2.length = 0;

gdjs.Level_328Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_328Code'] = gdjs.Level_328Code;
