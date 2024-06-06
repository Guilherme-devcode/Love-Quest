gdjs.Level_324Code = {};
gdjs.Level_324Code.GDDuckObjects3_1final = [];

gdjs.Level_324Code.GDDuckObjects1= [];
gdjs.Level_324Code.GDDuckObjects2= [];
gdjs.Level_324Code.GDDuckObjects3= [];
gdjs.Level_324Code.GDDuckObjects4= [];
gdjs.Level_324Code.GDBlockObjects1= [];
gdjs.Level_324Code.GDBlockObjects2= [];
gdjs.Level_324Code.GDBlockObjects3= [];
gdjs.Level_324Code.GDBlockObjects4= [];
gdjs.Level_324Code.GDKeyObjects1= [];
gdjs.Level_324Code.GDKeyObjects2= [];
gdjs.Level_324Code.GDKeyObjects3= [];
gdjs.Level_324Code.GDKeyObjects4= [];
gdjs.Level_324Code.GDDoorObjects1= [];
gdjs.Level_324Code.GDDoorObjects2= [];
gdjs.Level_324Code.GDDoorObjects3= [];
gdjs.Level_324Code.GDDoorObjects4= [];
gdjs.Level_324Code.GDSpikeObjects1= [];
gdjs.Level_324Code.GDSpikeObjects2= [];
gdjs.Level_324Code.GDSpikeObjects3= [];
gdjs.Level_324Code.GDSpikeObjects4= [];
gdjs.Level_324Code.GDLevelObjects1= [];
gdjs.Level_324Code.GDLevelObjects2= [];
gdjs.Level_324Code.GDLevelObjects3= [];
gdjs.Level_324Code.GDLevelObjects4= [];
gdjs.Level_324Code.GDSparkleParticleObjects1= [];
gdjs.Level_324Code.GDSparkleParticleObjects2= [];
gdjs.Level_324Code.GDSparkleParticleObjects3= [];
gdjs.Level_324Code.GDSparkleParticleObjects4= [];
gdjs.Level_324Code.GDCloudsObjects1= [];
gdjs.Level_324Code.GDCloudsObjects2= [];
gdjs.Level_324Code.GDCloudsObjects3= [];
gdjs.Level_324Code.GDCloudsObjects4= [];
gdjs.Level_324Code.GDDownButtonObjects1= [];
gdjs.Level_324Code.GDDownButtonObjects2= [];
gdjs.Level_324Code.GDDownButtonObjects3= [];
gdjs.Level_324Code.GDDownButtonObjects4= [];
gdjs.Level_324Code.GDDuckArtworkObjects1= [];
gdjs.Level_324Code.GDDuckArtworkObjects2= [];
gdjs.Level_324Code.GDDuckArtworkObjects3= [];
gdjs.Level_324Code.GDDuckArtworkObjects4= [];


gdjs.Level_324Code.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects3[k] = gdjs.Level_324Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects3[k] = gdjs.Level_324Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11719988);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].setAnimationName("Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects3.length;i<l;++i) {
    if ( !(gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects3[k] = gdjs.Level_324Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11720948);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].setAnimationName("Idle");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_324Code.GDDownButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].setPosition((( gdjs.Level_324Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects3[0].getPointX("")),(( gdjs.Level_324Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects3[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDownButtonObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDownButtonObjects3[i].setPosition((( gdjs.Level_324Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects3[0].getPointX("")) - 32,(( gdjs.Level_324Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects3[0].getPointY("")) - 150);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}}

}


};gdjs.Level_324Code.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11728788);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDDuckObjects3 */
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{runtimeScene.getScene().getVariables().get("JumpsRemaining").sub(1);
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].setHeight(115);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].setWidth(120);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectWidthTween("Squash Jump", 120, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectHeightTween("Stretch Jump", 120, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


};gdjs.Level_324Code.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{

gdjs.Level_324Code.GDDuckObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_324Code.GDDuckObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects4);
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects4[i].getBehavior("PlatformerObject").canJump() ) {
        isConditionTrue_1 = true;
        gdjs.Level_324Code.GDDuckObjects4[k] = gdjs.Level_324Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_324Code.GDDuckObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_324Code.GDDuckObjects3_1final.indexOf(gdjs.Level_324Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_324Code.GDDuckObjects3_1final.push(gdjs.Level_324Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects4);
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects4[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_1 = true;
        gdjs.Level_324Code.GDDuckObjects4[k] = gdjs.Level_324Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_324Code.GDDuckObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_324Code.GDDuckObjects3_1final.indexOf(gdjs.Level_324Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_324Code.GDDuckObjects3_1final.push(gdjs.Level_324Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_324Code.GDDuckObjects3_1final, gdjs.Level_324Code.GDDuckObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("JumpsRemaining")) > 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_324Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects2[k] = gdjs.Level_324Code.GDDuckObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("JumpsRemaining")) != 1;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("JumpsRemaining").setNumber(2);
}}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_324Code.GDDuckObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSpikeObjects2Objects = Hashtable.newFrom({"Spike": gdjs.Level_324Code.GDSpikeObjects2});
gdjs.Level_324Code.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_324Code.GDSpikeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSpikeObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Key").setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Hit 1.aac", false, 30, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs.Level_324Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects2[k] = gdjs.Level_324Code.GDDuckObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11734868);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects2);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects2[i].setHeight(40);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects2[i].setWidth(90);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectHeightTween("Stretch", 120, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectWidthTween("Squash", 120, "linear", 80, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDuckObjects1.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDuckObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDuckObjects1[k] = gdjs.Level_324Code.GDDuckObjects1[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDuckObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11736468);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectHeightTween("Stretch Air", 125, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectWidthTween("Squash Air", 110, "linear", 80, false);
}
}}

}


};gdjs.Level_324Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level_324Code.eventsList0(runtimeScene);
}


{


gdjs.Level_324Code.eventsList2(runtimeScene);
}


{


gdjs.Level_324Code.eventsList3(runtimeScene);
}


{


gdjs.Level_324Code.eventsList4(runtimeScene);
}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_324Code.GDDuckObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDKeyObjects2Objects = Hashtable.newFrom({"Key": gdjs.Level_324Code.GDKeyObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSparkleParticleObjects2Objects = Hashtable.newFrom({"SparkleParticle": gdjs.Level_324Code.GDSparkleParticleObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_324Code.GDDuckObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_324Code.GDDoorObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_324Code.GDDuckObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_324Code.GDDoorObjects2});
gdjs.Level_324Code.eventsList6 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11743052);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), false);
}}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects1Objects = Hashtable.newFrom({"Duck": gdjs.Level_324Code.GDDuckObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_324Code.GDDoorObjects1});
gdjs.Level_324Code.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Key"), gdjs.Level_324Code.GDKeyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDKeyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDKeyObjects2 */
gdjs.Level_324Code.GDSparkleParticleObjects2.length = 0;

{runtimeScene.getScene().getVariables().get("Key").setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSparkleParticleObjects2Objects, (( gdjs.Level_324Code.GDKeyObjects2.length === 0 ) ? 0 :gdjs.Level_324Code.GDKeyObjects2[0].getPointX("Center")), (( gdjs.Level_324Code.GDKeyObjects2.length === 0 ) ? 0 :gdjs.Level_324Code.GDKeyObjects2[0].getPointY("Center")), "Player");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Level_324Code.GDKeyObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDKeyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_324Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Key")) > 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDoorObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock.wav", false, 50, 1);
}{runtimeScene.getScene().getVariables().get("Key").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_324Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDDoorObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDDoorObjects2[i].isCurrentAnimationName("Unlocked") ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDDoorObjects2[k] = gdjs.Level_324Code.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDDoorObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_324Code.GDDownButtonObjects2);
/* Reuse gdjs.Level_324Code.GDDuckObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDownButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDDownButtonObjects2[i].setPosition((( gdjs.Level_324Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects2[0].getPointX("")) - 32,(( gdjs.Level_324Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_324Code.GDDuckObjects2[0].getPointY("")) - 150);
}
}
{ //Subevents
gdjs.Level_324Code.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_324Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_324Code.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDuckObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11743820);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_324Code.GDDownButtonObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDDownButtonObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDDownButtonObjects1[i].hide();
}
}}

}


};gdjs.Level_324Code.eventsList8 = function(runtimeScene) {

{



}


{


gdjs.Level_324Code.eventsList5(runtimeScene);
}


{


gdjs.Level_324Code.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_324Code.GDDuckArtworkObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects1[i].getBehavior("Resizable").setHeight(68);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDDuckArtworkObjects1[i].getBehavior("Resizable").setWidth(68);
}
}}

}


};

gdjs.Level_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_324Code.GDDuckObjects1.length = 0;
gdjs.Level_324Code.GDDuckObjects2.length = 0;
gdjs.Level_324Code.GDDuckObjects3.length = 0;
gdjs.Level_324Code.GDDuckObjects4.length = 0;
gdjs.Level_324Code.GDBlockObjects1.length = 0;
gdjs.Level_324Code.GDBlockObjects2.length = 0;
gdjs.Level_324Code.GDBlockObjects3.length = 0;
gdjs.Level_324Code.GDBlockObjects4.length = 0;
gdjs.Level_324Code.GDKeyObjects1.length = 0;
gdjs.Level_324Code.GDKeyObjects2.length = 0;
gdjs.Level_324Code.GDKeyObjects3.length = 0;
gdjs.Level_324Code.GDKeyObjects4.length = 0;
gdjs.Level_324Code.GDDoorObjects1.length = 0;
gdjs.Level_324Code.GDDoorObjects2.length = 0;
gdjs.Level_324Code.GDDoorObjects3.length = 0;
gdjs.Level_324Code.GDDoorObjects4.length = 0;
gdjs.Level_324Code.GDSpikeObjects1.length = 0;
gdjs.Level_324Code.GDSpikeObjects2.length = 0;
gdjs.Level_324Code.GDSpikeObjects3.length = 0;
gdjs.Level_324Code.GDSpikeObjects4.length = 0;
gdjs.Level_324Code.GDLevelObjects1.length = 0;
gdjs.Level_324Code.GDLevelObjects2.length = 0;
gdjs.Level_324Code.GDLevelObjects3.length = 0;
gdjs.Level_324Code.GDLevelObjects4.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_324Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_324Code.GDCloudsObjects1.length = 0;
gdjs.Level_324Code.GDCloudsObjects2.length = 0;
gdjs.Level_324Code.GDCloudsObjects3.length = 0;
gdjs.Level_324Code.GDCloudsObjects4.length = 0;
gdjs.Level_324Code.GDDownButtonObjects1.length = 0;
gdjs.Level_324Code.GDDownButtonObjects2.length = 0;
gdjs.Level_324Code.GDDownButtonObjects3.length = 0;
gdjs.Level_324Code.GDDownButtonObjects4.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects1.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects2.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects3.length = 0;
gdjs.Level_324Code.GDDuckArtworkObjects4.length = 0;

gdjs.Level_324Code.eventsList8(runtimeScene);

return;

}

gdjs['Level_324Code'] = gdjs.Level_324Code;
