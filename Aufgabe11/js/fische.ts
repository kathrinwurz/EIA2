namespace Aufgabe11 {

    export class Fische {
        x: number;
        y: number;
        dx: number;

        draw(): void {

            let koerper: Path2D = new Path2D();
            koerper.ellipse(this.x, this.y, 30, 50, 1.5, 0, 2 * Math.PI);
            crc.fillStyle = "#ffb6c1";
            crc.fill(koerper);
            crc.strokeStyle = "#8b0a50";
            crc.stroke(koerper);

            let schwanz: Path2D = new Path2D();
            schwanz.moveTo(this.x - 50, this.y + 4);
            schwanz.lineTo(this.x - 70, this.y + 25);
            schwanz.lineTo(this.x - 70, this.y - 15);
            crc.fillStyle = "#cd6090";
            crc.fill(schwanz);
            crc.strokeStyle = "#8b0a50";
            crc.stroke(schwanz);

            let fischAuge: Path2D = new Path2D();
            fischAuge.arc(this.x + 20, this.y - 2, 8, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill(fischAuge);
            crc.strokeStyle = "#000000";
            crc.stroke(fischAuge);

            let fischPupille: Path2D = new Path2D();
            fischPupille.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
            crc.fillStyle = "#000000";
            crc.fill(fischPupille);

        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            if (this.x + 50 > canvas.width + 100) {
                this.x = 0;
            }
        }
    }
}

