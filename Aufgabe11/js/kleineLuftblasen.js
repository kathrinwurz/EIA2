var Aufgabe11;
(function (Aufgabe11) {
    class KleineLuftblasen {
        draw() {
            let blasen = new Path2D();
            blasen.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Aufgabe11.crc.strokeStyle = "#bbffff";
            Aufgabe11.crc.stroke(blasen);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y < 0)
                this.y = Aufgabe11.canvas.height;
        }
    }
    Aufgabe11.KleineLuftblasen = KleineLuftblasen;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=kleineLuftblasen.js.map