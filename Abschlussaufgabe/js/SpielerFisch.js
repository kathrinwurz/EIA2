var Endabgabe;
(function (Endabgabe) {
    class Spielerfisch {
        constructor() {
            this.groesse = 12;
            this.richtungsaenderung = "rechts";
            this.x = Endabgabe.canvas.width / 2;
            this.y = Endabgabe.canvas.height / 2;
            this.dx = 0;
            this.dy = 0;
        }
        draw() {
            if (this.richtungsaenderung == "rechts") {
                let koerper = new Path2D();
                koerper.arc(this.x, this.y, (this.groesse * 30) / 10, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#CB5050";
                Endabgabe.crc.fill(koerper);
                Endabgabe.crc.strokeStyle = "#EB2424";
                Endabgabe.crc.stroke(koerper);
                let schwanz = new Path2D();
                schwanz.moveTo(this.x - (30 * this.groesse) / 10, this.y + (4 * this.groesse) / 10);
                schwanz.lineTo(this.x - (50 * this.groesse) / 10, this.y + (17 * this.groesse) / 10);
                schwanz.lineTo(this.x - (50 * this.groesse) / 10, this.y - (7 * this.groesse) / 10);
                Endabgabe.crc.fillStyle = "#EB2424";
                Endabgabe.crc.fill(schwanz);
                Endabgabe.crc.strokeStyle = "#CB5050";
                Endabgabe.crc.stroke(schwanz);
                let fischAuge = new Path2D();
                fischAuge.arc(this.x + 10, this.y - 2, (this.groesse * 10) / 10, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#FFFFFF";
                Endabgabe.crc.fill(fischAuge);
                Endabgabe.crc.strokeStyle = "#000000";
                Endabgabe.crc.stroke(fischAuge);
                let fischPupille = new Path2D();
                fischPupille.arc(this.x + 10, this.y - 2, (this.groesse * 7) / 10, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#000000";
                Endabgabe.crc.fill(fischPupille);
            }
            else {
                let koerper = new Path2D();
                koerper.arc(this.x, this.y, (this.groesse) * 30 / 10, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#CB5050";
                Endabgabe.crc.fill(koerper);
                Endabgabe.crc.strokeStyle = "#EB2424";
                Endabgabe.crc.stroke(koerper);
                let schwanz = new Path2D();
                schwanz.moveTo(this.x + (30 * this.groesse) / 10, this.y - (4 * this.groesse) / 10);
                schwanz.lineTo(this.x + (50 * this.groesse) / 10, this.y - (17 * this.groesse) / 10);
                schwanz.lineTo(this.x + (50 * this.groesse) / 10, this.y + (7 * this.groesse) / 10);
                Endabgabe.crc.fillStyle = "#EB2424";
                Endabgabe.crc.fill(schwanz);
                Endabgabe.crc.strokeStyle = "#CB5050";
                Endabgabe.crc.stroke(schwanz);
                let fischAuge = new Path2D();
                fischAuge.arc(this.x - 12, this.y + 2, (this.groesse * 10) / 10, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#FFFFFF";
                Endabgabe.crc.fill(fischAuge);
                Endabgabe.crc.strokeStyle = "#000000";
                Endabgabe.crc.stroke(fischAuge);
                let fischPupille = new Path2D();
                fischPupille.arc(this.x - 12, this.y + 2, (this.groesse * 7) / 10, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "#000000";
                Endabgabe.crc.fill(fischPupille);
            }
        }
        zusammenstoss(fisch) {
            let xAbstand = Math.abs(this.x - fisch.x);
            let yAbstand = Math.abs(this.y - fisch.y);
            if (Math.sqrt(Math.pow(xAbstand, 2) + Math.pow(yAbstand, 2)) < 60) {
                if (this.groesse > fisch.groesse) {
                    this.groesse++;
                    Endabgabe.punktestand += 10;
                    return "tot";
                }
                else {
                    alert("Du hast verloren!");
                    return "spielEnde";
                }
            }
            else
                return "nix";
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > Endabgabe.canvas.width) {
                this.x = Endabgabe.canvas.width;
            }
            else if (this.x < 0) {
                this.x = 0;
            }
            else if (this.y > Endabgabe.canvas.height) {
                this.y = Endabgabe.canvas.height;
            }
            else if (this.y < 0) {
                this.y = 0;
            }
        }
        update() {
            this.draw();
            this.move();
        }
    }
    Endabgabe.Spielerfisch = Spielerfisch;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=SpielerFisch.js.map