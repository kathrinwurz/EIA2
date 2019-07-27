namespace Endabgabe {

    export class GrosseFische extends Fische {


        constructor() {
            super();
            this.groesse = 16;
        }

        draw(): void {

            if (this.dx >= 0) {
                let koerper: Path2D = new Path2D();
                koerper.ellipse(this.x, this.y, 40, 60, 1.5, 0, 2 * Math.PI);
                crc.fillStyle = "#87AE67";
                crc.fill(koerper);
                crc.strokeStyle = "#819272";
                crc.stroke(koerper);

                let schwanz: Path2D = new Path2D();
                schwanz.moveTo(this.x - 60, this.y + 6);
                schwanz.lineTo(this.x - 80, this.y + 35);
                schwanz.lineTo(this.x - 80, this.y - 25);
                crc.fillStyle = "#819272";
                crc.fill(schwanz);
                crc.strokeStyle = "#354826";
                crc.stroke(schwanz);

                let fischAuge: Path2D = new Path2D();
                fischAuge.arc(this.x + 30, this.y - 2, 12, 0, 2 * Math.PI);
                crc.fillStyle = "#FFFFFF";
                crc.fill(fischAuge);
                crc.strokeStyle = "#000000";
                crc.stroke(fischAuge);

                let fischPupille: Path2D = new Path2D();
                fischPupille.arc(this.x + 30, this.y - 2, 8, 0, 2 * Math.PI);
                crc.fillStyle = "#000000";
                crc.fill(fischPupille);
            }

            if (this.dx <= 0) {
                let koerper: Path2D = new Path2D();
                koerper.ellipse(this.x, this.y, 40, 60, 1.5, 0, 2 * Math.PI);
                crc.fillStyle = "#87AE67";
                crc.fill(koerper);
                crc.strokeStyle = "#819272";
                crc.stroke(koerper);

                let schwanz: Path2D = new Path2D();
                schwanz.moveTo(this.x + 60, this.y - 6);
                schwanz.lineTo(this.x + 80, this.y - 35);
                schwanz.lineTo(this.x + 80, this.y + 25);
                crc.fillStyle = "#819272";
                crc.fill(schwanz);
                crc.strokeStyle = "#354826";
                crc.stroke(schwanz);

                let fischAuge: Path2D = new Path2D();
                fischAuge.arc(this.x - 30, this.y + 2, 12, 0, 2 * Math.PI);
                crc.fillStyle = "#FFFFFF";
                crc.fill(fischAuge);
                crc.strokeStyle = "#000000";
                crc.stroke(fischAuge);

                let fischPupille: Path2D = new Path2D();
                fischPupille.arc(this.x - 30, this.y + 2, 8, 0, 2 * Math.PI);
                crc.fillStyle = "#000000";
                crc.fill(fischPupille);
            }

        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            if (this.x > canvas.width + 100) {
                this.x = -100;

            }

            if (this.x < -100) {
                this.x = canvas.width + 100;
            }
        }
    }
}

