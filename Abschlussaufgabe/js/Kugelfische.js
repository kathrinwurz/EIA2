var Endabgabe;
(function (Endabgabe) {
    class Kugelfische extends Endabgabe.AlleObjekte {
        constructor() {
            super();
            this.groesse = 5;
        }
        draw() {
            if (this.dx >= 0) {
                let koerper = new Path2D();
                koerper.arc(this.x, this.y, 20, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#5E94EB";
                Endabgabe.crc.fill(koerper);
                Endabgabe.crc.strokeStyle = "#A7BCDE";
                Endabgabe.crc.stroke(koerper);
                let schwanz = new Path2D();
                schwanz.moveTo(this.x - 20, this.y + 2);
                schwanz.lineTo(this.x - 40, this.y + 15);
                schwanz.lineTo(this.x - 40, this.y - 5);
                Endabgabe.crc.fillStyle = "#A7BCDE";
                Endabgabe.crc.fill(schwanz);
                Endabgabe.crc.strokeStyle = "#5E94EB";
                Endabgabe.crc.stroke(schwanz);
                let fischAuge = new Path2D();
                fischAuge.arc(this.x + 10, this.y - 2, 8, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#FFFFFF";
                Endabgabe.crc.fill(fischAuge);
                Endabgabe.crc.strokeStyle = "#000000";
                Endabgabe.crc.stroke(fischAuge);
                let fischPupille = new Path2D();
                fischPupille.arc(this.x + 10, this.y - 2, 5, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#000000";
                Endabgabe.crc.fill(fischPupille);
            }
            if (this.dx <= 0) {
                let koerper = new Path2D();
                koerper.arc(this.x, this.y, 20, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#5E94EB";
                Endabgabe.crc.fill(koerper);
                Endabgabe.crc.strokeStyle = "#A7BCDE";
                Endabgabe.crc.stroke(koerper);
                let schwanz = new Path2D();
                schwanz.moveTo(this.x + 20, this.y - 2);
                schwanz.lineTo(this.x + 40, this.y - 15);
                schwanz.lineTo(this.x + 40, this.y + 5);
                Endabgabe.crc.fillStyle = "#A7BCDE";
                Endabgabe.crc.fill(schwanz);
                Endabgabe.crc.strokeStyle = "#5E94EB";
                Endabgabe.crc.stroke(schwanz);
                let fischAuge = new Path2D();
                fischAuge.arc(this.x - 10, this.y + 2, 8, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#FFFFFF";
                Endabgabe.crc.fill(fischAuge);
                Endabgabe.crc.strokeStyle = "#000000";
                Endabgabe.crc.stroke(fischAuge);
                let fischPupille = new Path2D();
                fischPupille.arc(this.x - 10, this.y + 2, 5, 0, 2 * Math.PI);
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
    Endabgabe.Kugelfische = Kugelfische;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Kugelfische.js.map