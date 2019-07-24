namespace Endabgabe {

    export class Kugelfische extends AlleObjekte {

        
        constructor() {
            super();
            this.groesse = 5;

        }

        draw(): void {

            if (this.dx >= 0) {
            let koerper: Path2D = new Path2D();
            koerper.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc.fillStyle = "#5E94EB";
            crc.fill(koerper);
            crc.strokeStyle = "#A7BCDE";
            crc.stroke(koerper);

            let schwanz: Path2D = new Path2D();
            schwanz.moveTo(this.x - 20, this.y + 2);
            schwanz.lineTo(this.x - 40, this.y + 15);
            schwanz.lineTo(this.x - 40, this.y - 5);
            crc.fillStyle = "#A7BCDE";
            crc.fill(schwanz);
            crc.strokeStyle = "#5E94EB";
            crc.stroke(schwanz);

            let fischAuge: Path2D = new Path2D();
            fischAuge.arc(this.x + 10, this.y - 2, 8, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill(fischAuge);
            crc.strokeStyle = "#000000";
            crc.stroke(fischAuge);

            let fischPupille: Path2D = new Path2D();
            fischPupille.arc(this.x + 10, this.y - 2, 5, 0, 2 * Math.PI);
            crc.fillStyle = "#000000";
            crc.fill(fischPupille);
        }

        if (this.dx <= 0) {
            let koerper: Path2D = new Path2D();
            koerper.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc.fillStyle = "#5E94EB";
            crc.fill(koerper);
            crc.strokeStyle = "#A7BCDE";
            crc.stroke(koerper);

            let schwanz: Path2D = new Path2D();
            schwanz.moveTo(this.x + 20, this.y - 2);
            schwanz.lineTo(this.x + 40, this.y - 15);
            schwanz.lineTo(this.x + 40, this.y + 5);
            crc.fillStyle = "#A7BCDE";
            crc.fill(schwanz);
            crc.strokeStyle = "#5E94EB";
            crc.stroke(schwanz);

            let fischAuge: Path2D = new Path2D();
            fischAuge.arc(this.x - 10, this.y + 2, 8, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill(fischAuge);
            crc.strokeStyle = "#000000";
            crc.stroke(fischAuge);

            let fischPupille: Path2D = new Path2D();
            fischPupille.arc(this.x - 10, this.y + 2, 5, 0, 2 * Math.PI);
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
            if (this.x + 50 > canvas.width + 100) {
                this.x = 0;
            }
        }
    }
}

