var Aufgabe11;
(function (Aufgabe11) {
    class Fische {
        draw() {
            let koerper = new Path2D();
            koerper.ellipse(this.x, this.y, 30, 50, 1.5, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#ffb6c1";
            Aufgabe11.crc.fill(koerper);
            Aufgabe11.crc.strokeStyle = "#8b0a50";
            Aufgabe11.crc.stroke(koerper);
            let schwanz = new Path2D();
            schwanz.moveTo(this.x - 50, this.y + 4);
            schwanz.lineTo(this.x - 70, this.y + 25);
            schwanz.lineTo(this.x - 70, this.y - 15);
            Aufgabe11.crc.fillStyle = "#cd6090";
            Aufgabe11.crc.fill(schwanz);
            Aufgabe11.crc.strokeStyle = "#8b0a50";
            Aufgabe11.crc.stroke(schwanz);
            let fischAuge = new Path2D();
            fischAuge.arc(this.x + 20, this.y - 2, 8, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#FFFFFF";
            Aufgabe11.crc.fill(fischAuge);
            Aufgabe11.crc.strokeStyle = "#000000";
            Aufgabe11.crc.stroke(fischAuge);
            let fischPupille = new Path2D();
            fischPupille.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#000000";
            Aufgabe11.crc.fill(fischPupille);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 50 > Aufgabe11.canvas.width + 100) {
                this.x = 0;
            }
        }
    }
    Aufgabe11.Fische = Fische;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=fische.js.map