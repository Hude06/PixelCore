export class RigidBody {
    constructor() {
        this.YVelocity = 0.1;
        this.XVelocity = 0;
        this.gravity = -0.07;
        this.friction = 0;
        this.spin = 1;
        this.grounded = false;
        this.moving = false;
    }
    loop(bounds) {        
        this.YVelocity += this.gravity;
        bounds.x -= this.XVelocity
        bounds.y -= this.YVelocity;
        if (bounds.y >= 435) {
            bounds.y = 435
            this.grounded = true;
            this.YVelocity = 0.1;
        } else {
            this.grounded = false;

        }
    }
}