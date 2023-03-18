export class RigidBody {
    constructor() {
        this.YVelocity = 0.1;
        this.XVelocity = 0;
        this.gravity = -0.07;
        this.friction = 0;
        this.spin = 1;
        this.grounded = false;
        this.FrictionMoving = false;
    }
    loop(bounds) {        
        this.XVelocity -= this.friction
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
        if (this.grounded === true) {
            this.friction = -0.1
        }
        if (this.XVelocity > 0) {
            this.friction = 0;
        }
    }
}