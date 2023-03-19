import * as Engine from "../../Engine/Engine.js";
import { Rect } from "../../Engine/RectUtils.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let mouse = new Engine.Mouse();
let Menu = new Engine.Scene();
Menu.gameObjects = {
    startButton: new Engine.Button(canvas.width/2-125,10,150,50)
}
Menu.gameObjects.startButton.text = "Start"
function loop() {
    //DRAWING
    ctx.clearRect(0,0,canvas.width,canvas.height)
        // Menu.draw(ctx);
    //INIT
    mouse.init();
    //UPDATING
    if (mouse.clickOn(Menu.gameObjects.startButton)) [
        console.log("Clikced On")
    ]
    Menu.gameObjects.startButton.draw(ctx);
    requestAnimationFrame(loop);
}
loop();