// MyGame - Example implementation of Game interface

import { Game, GameFramework } from "./index.js";

// start using objects
class MyGame extends Game {
    private x: number = 0;
    private y: number = 0;
    
    init(): void {

    }

    update(deltaTime: number): void {
        console.log("Delta Time" + deltaTime);
        this.x += deltaTime * 100;
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, 800, 600); // Clear the canvas
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 50, 50); // Draw a rectangle at the current position
    }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600, "canvas");
framework.start();
console.log("test");
