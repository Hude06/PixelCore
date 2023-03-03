# PixelCore
### Engine Class
- Engine is the main Class, You can call many function from the class Engine If you want to log something just use 
- `Engine.log("Any Text")`
- It will Log Any text you want to the terminal

### Partical Engine
- To set up a new Partical Engine you just can run this command
- `let particals = new Engine.ParticleSource();`js
- Then in your main Game loop you have to run the update function and then you have to draw it
```js
function loop() {
    particals.update_particles(ctx);
    particals.draw_particles(ctx,"`COLOR 3,255,247");
    requestAnimationFrame(loop);
}
loop();
```
- Then Whenever you want to have particas just start the particals in that location like this.
- `particals.start_particles(x,y)`
