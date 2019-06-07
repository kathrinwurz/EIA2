var Aufgabe11;
(function (Aufgabe11) {
    class GrosseLuftblasen {
        draw() {
            let blasen = new Path2D();
            blasen.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aufgabe11.crc.strokeStyle = "#00c5cd";
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
    Aufgabe11.GrosseLuftblasen = GrosseLuftblasen;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=grosseLuftblasen.js.map