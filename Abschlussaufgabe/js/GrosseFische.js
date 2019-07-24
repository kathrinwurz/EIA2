var Endabgabe;
(function (Endabgabe) {
    class GrosseFische extends Endabgabe.AlleObjekte {
        constructor() {
            super();
            this.groesse = 16;
        }
        draw() {
            if (this.dx >= 0) {
                let koerper = new Path2D();
                koerper.ellipse(this.x, this.y, 40, 60, 1.5, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#87AE67";
                Endabgabe.crc.fill(koerper);
                Endabgabe.crc.strokeStyle = "#819272";
                Endabgabe.crc.stroke(koerper);
                let schwanz = new Path2D();
                schwanz.moveTo(this.x - 60, this.y + 6);
                schwanz.lineTo(this.x - 80, this.y + 35);
                schwanz.lineTo(this.x - 80, this.y - 25);
                Endabgabe.crc.fillStyle = "#819272";
                Endabgabe.crc.fill(schwanz);
                Endabgabe.crc.strokeStyle = "#354826";
                Endabgabe.crc.stroke(schwanz);
                let fischAuge = new Path2D();
                fischAuge.arc(this.x + 30, this.y - 2, 12, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#FFFFFF";
                Endabgabe.crc.fill(fischAuge);
                Endabgabe.crc.strokeStyle = "#000000";
                Endabgabe.crc.stroke(fischAuge);
                let fischPupille = new Path2D();
                fischPupille.arc(this.x + 30, this.y - 2, 8, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#000000";
                Endabgabe.crc.fill(fischPupille);
            }
            if (this.dx <= 0) {
                let koerper = new Path2D();
                koerper.ellipse(this.x, this.y, 40, 60, 1.5, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#87AE67";
                Endabgabe.crc.fill(koerper);
                Endabgabe.crc.strokeStyle = "#819272";
                Endabgabe.crc.stroke(koerper);
                let schwanz = new Path2D();
                schwanz.moveTo(this.x + 60, this.y - 6);
                schwanz.lineTo(this.x + 80, this.y - 35);
                schwanz.lineTo(this.x + 80, this.y + 25);
                Endabgabe.crc.fillStyle = "#819272";
                Endabgabe.crc.fill(schwanz);
                Endabgabe.crc.strokeStyle = "#354826";
                Endabgabe.crc.stroke(schwanz);
                let fischAuge = new Path2D();
                fischAuge.arc(this.x - 30, this.y + 2, 12, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#FFFFFF";
                Endabgabe.crc.fill(fischAuge);
                Endabgabe.crc.strokeStyle = "#000000";
                Endabgabe.crc.stroke(fischAuge);
                let fischPupille = new Path2D();
                fischPupille.arc(this.x - 30, this.y + 2, 8, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#000000";
                Endabgabe.crc.fill(fischPupille);
            }
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 50 > Endabgabe.canvas.width + 100) {
                this.x = 0;
            }
        }
    }
    Endabgabe.GrosseFische = GrosseFische;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=GrosseFische.js.map