var Aufgabe11;
(function (Aufgabe11) {
    class Tintenfische {
        draw() {
            let tintiKreis = new Path2D();
            tintiKreis.arc(this.x, this.y, 50, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#57406c";
            Aufgabe11.crc.fill(tintiKreis);
            let tintiBein1 = new Path2D();
            tintiBein1.ellipse(this.x - 45, this.y + 52, 10, 40, 10, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#57406c";
            Aufgabe11.crc.fill(tintiBein1);
            let tintiBein2 = new Path2D();
            tintiBein2.ellipse(this.x - 20, this.y + 65, 10, 40, 9.9, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#57406c";
            Aufgabe11.crc.fill(tintiBein2);
            let tintiBein3 = new Path2D();
            tintiBein3.ellipse(this.x + 5, this.y + 65, 10, 40, 9.8, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#57406c";
            Aufgabe11.crc.fill(tintiBein3);
            let tintiBein4 = new Path2D();
            tintiBein4.ellipse(this.x - 60, this.y + 30, 10, 40, 10, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#57406c";
            Aufgabe11.crc.fill(tintiBein4);
            let auge1 = new Path2D();
            auge1.arc(this.x - 10, this.y - 15, 8, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#FFFFFF";
            Aufgabe11.crc.fill(auge1);
            Aufgabe11.crc.strokeStyle = "#000000";
            Aufgabe11.crc.stroke(auge1);
            let auge2 = new Path2D();
            auge2.arc(this.x + 20, this.y - 5, 8, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#FFFFFF";
            Aufgabe11.crc.fill(auge2);
            Aufgabe11.crc.strokeStyle = "#000000";
            Aufgabe11.crc.stroke(auge2);
            let pupille1 = new Path2D();
            pupille1.arc(this.x + 20, this.y - 5, 5, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#000000";
            Aufgabe11.crc.fill(pupille1);
            let pupille2 = new Path2D();
            pupille1.arc(this.x - 10, this.y - 15, 5, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#000000";
            Aufgabe11.crc.fill(pupille1);
            let mund = new Path2D();
            mund.moveTo(this.x - 30, this.y - 5);
            mund.bezierCurveTo(this.x - 50, this.y + 50, this.x + 20, this.y + 40, this.x + 20, this.y + 20);
            Aufgabe11.crc.strokeStyle = "#362645";
            Aufgabe11.crc.stroke(mund);
            let mund1 = new Path2D();
            mund1.moveTo(this.x - 30, this.y - 5);
            mund1.bezierCurveTo(this.x - 40, this.y + 40, this.x + 10, this.y + 30, this.x + 20, this.y + 20);
            Aufgabe11.crc.strokeStyle = "#362645";
            Aufgabe11.crc.stroke(mund1);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x - 120 > Aufgabe11.canvas.width + 100) {
                this.x = 0;
            }
            if (this.x + 100 < 0) {
                this.x = Aufgabe11.canvas.width;
            }
        }
    }
    Aufgabe11.Tintenfische = Tintenfische;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=tintenfisch.js.map