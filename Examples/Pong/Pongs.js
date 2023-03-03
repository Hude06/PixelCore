import * as Engine from "../../Engine.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let parts = new Engine.ParticleSource();
parts.start_particles(hero.bounds.x,hero.bounds.y)
//Particals
parts.color = "blue"
//LEVEL INIT
let OverworldMaps = {
    DemoRoom: {
        src: "",
        gameObjects: {
            hero: new GameObject({
                x:5,
                y:6
            })
        }
    }
}
function drawHero() {
    
}
function loop() {
    Engine.ClearCanvas(ctx,canvas);
    parts.update_particles(ctx);
    parts.draw_particles(ctx,"3,255,247");
    requestAnimationFrame(loop);
}
loop();