var Endabgabe;
(function (Endabgabe) {
    class GrosseLuftblasen extends Endabgabe.AlleObjekte {
        constructor() {
            super();
            this.groesse = 0;
        }
        draw() {
            let blasen = new Path2D();
            blasen.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Endabgabe.crc.strokeStyle = "#5B7BAB";
            Endabgabe.crc.stroke(blasen);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y < 0)
                this.y = Endabgabe.canvas.height;
        }
    }
    Endabgabe.GrosseLuftblasen = GrosseLuftblasen;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=GrosseLuftblasen.js.map