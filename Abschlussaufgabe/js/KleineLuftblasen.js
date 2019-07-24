var Endabgabe;
(function (Endabgabe) {
    class KleineLuftblasen extends Endabgabe.AlleObjekte {
        constructor() {
            super();
            this.groesse = 0;
        }
        draw() {
            let blasen = new Path2D();
            blasen.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Endabgabe.crc.strokeStyle = "#6DA0EF";
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
    Endabgabe.KleineLuftblasen = KleineLuftblasen;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=KleineLuftblasen.js.map