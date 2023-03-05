import * as Engine from "./Engine.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let particals = new Engine.ParticleSource();
let brickSize = 50
let OverworldMap = {
    DemoRoom: {
        LowerSrc: "./DemoLower.png",
        UpperSrc: "./DemoUpper.png",
        gameObjects: {
            hero: new Engine.GameObject(2,1),
            npc1: new Engine.GameObject(5,1),
            npc5: new Engine.GameObject(1,6)
        }
    },
    Kitchen: {
        LowerSrc: "./DemoLower.png",
        UpperSrc: "./DemoUpper.png",
        gameObjects: {
            hero: new Engine.GameObject(6,1),
            npc1: new Engine.GameObject(4,1),
            npc5: new Engine.GameObject(3,6)
        }
    }
}
particals.start_particles(10,10);
function grid() {
    for (let w = 0; w < 10; w++) {
        for (let h = 0; h < 10;h++) {
            ctx.strokeRect(h*50,0 + w*50,50,50)
        }
    }
}
function loop() {
    Engine.ClearCanvas(ctx,canvas);
    grid();
    Engine.drawMap(OverworldMap.Kitchen,brickSize,ctx)


    if (Engine.keyboard.get("w") === true) {
        OverworldMap.DemoRoom.gameObjects.hero.bounds.y -= 1
    }
    if (Engine.keyboard.get("s") === true) {
        OverworldMap.DemoRoom.gameObjects.hero.bounds.y += 1
    }
    if (Engine.keyboard.get("a") === true) {
        OverworldMap.DemoRoom.gameObjects.hero.bounds.x -= 1
    }
    if (Engine.keyboard.get("d") === true) {
        OverworldMap.DemoRoom.gameObjects.hero.bounds.x += 1
    }
    particals.update_particles(ctx);
    particals.draw_particles(ctx,"3,255,247");
    Engine.keyboard.clear();
    requestAnimationFrame(loop);
}
loop();