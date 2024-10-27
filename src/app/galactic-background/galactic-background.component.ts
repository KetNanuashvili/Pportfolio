import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-galactic-background',
  templateUrl: './galactic-background.component.html',
  styleUrls: ['./galactic-background.component.css']
})
export class GalacticBackgroundComponent implements AfterViewInit {
  @ViewChild('galaxyCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private stars: { x: number; y: number; size: number; speed: number }[] = [];
  private starCount = 200; // Number of stars
  private baseSpeed = 0.5; // Base speed of stars
  private speedMultiplier = 2; // Speed increase on mouse over
  private mouseOver = false;
  private connectionLimit = 2; // Limit the number of connections per star
  private connectionDistance = 200; // Connection distance

  ngAfterViewInit() {
    this.initializeCanvas();
    this.createStars();
    this.animate();
  }

  private initializeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!; // Initialize context
    this.resizeCanvas(); // Set initial canvas size
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Set canvas background color
    this.ctx.fillStyle = 'black'; // Set the background color
    this.ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas with the background color
  }

  private createStars() {
    for (let i = 0; i < this.starCount; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1 + 0.2, // Size between 0.2 and 1.2 (scaled down)
        speed: Math.random() * 0.5 + 0.1 // Speed between 0.1 and 0.6
      });
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas(); // Resize canvas on window resize
  }

  @HostListener('mousemove')
  onMouseMove() {
    this.mouseOver = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.mouseOver = false;
  }

  private animate() {
    // Clear the canvas and redraw the background
    this.ctx.fillStyle = 'black'; // Set the background color
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight); // Fill the canvas with the background color

    // Draw stars and connect them
    this.stars.forEach((star, index) => {
      star.y += this.mouseOver ? star.speed * this.speedMultiplier : star.speed;

      // Reset star position if it moves off screen
      if (star.y > window.innerHeight) {
        star.y = 0;
        star.x = Math.random() * window.innerWidth; // Random horizontal position
      }

      // Draw star
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(200, 200, 200, 1)'; // Gray star color
      this.ctx.fill();

      // Connect to nearby stars
      this.connectStars(star, index);
    });

    requestAnimationFrame(() => this.animate());
  }

  private connectStars(star: { x: number; y: number }, index: number) {
    const connections: { x: number; y: number }[] = [];

    this.stars.forEach((otherStar, otherIndex) => {
      if (index !== otherIndex) {
        const distance = Math.sqrt(
          Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2)
        );

        // Limit the connections to a specified number and distance
        if (distance < this.connectionDistance && connections.length < this.connectionLimit) {
          connections.push(otherStar);
        }
      }
    });

    // Draw lines to the limited connections
    connections.forEach(otherStar => {
      this.ctx.strokeStyle = 'rgba(200, 200, 200, 0.3)'; // Line color in gray tone
      this.ctx.lineWidth = 0.3; // Thinner line thickness to simulate distance
      this.ctx.beginPath();
      this.ctx.moveTo(star.x, star.y);
      this.ctx.lineTo(otherStar.x, otherStar.y);
      this.ctx.stroke();
    });
  }
}
