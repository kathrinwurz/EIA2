namespace Endabgabe {

    export class Spielerfisch {

        groesse: number = 12;
        x: number;
        y: number;
        dx: number;
        dy: number;
        richtungsaenderung: string = "rechts";

        constructor() {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.dx = 0;
            this.dy = 0;
        }

        draw(): void {

            if (this.richtungsaenderung == "rechts") {
                let koerper: Path2D = new Path2D();
                koerper.arc(this.x, this.y, (this.groesse * 30) / 10, 0, 2 * Math.PI);
                crc.fillStyle = "#F7D148";
                crc.fill(koerper);
                crc.strokeStyle = "#F8E6A4";
                crc.stroke(koerper);

                let schwanz: Path2D = new Path2D();
                schwanz.moveTo(this.x - (30 * this.groesse) / 10, this.y + (4 * this.groesse) / 10);
                schwanz.lineTo(this.x - (50 * this.groesse) / 10, this.y + (17 * this.groesse) / 10);
                schwanz.lineTo(this.x - (50 * this.groesse) / 10, this.y - (7 * this.groesse) / 10);
                crc.fillStyle = "#F8E6A4";
                crc.fill(schwanz);
                crc.strokeStyle = "#F7D148";
                crc.stroke(schwanz);

                let fischAuge: Path2D = new Path2D();
                fischAuge.arc(this.x + 10, this.y - 2, (this.groesse * 10) / 10, 0, 2 * Math.PI);
                crc.fillStyle = "#FFFFFF";
                crc.fill(fischAuge);
                crc.strokeStyle = "#000000";
                crc.stroke(fischAuge);

                let fischPupille: Path2D = new Path2D();
                fischPupille.arc(this.x + 10, this.y - 2, (this.groesse * 7) / 10, 0, 2 * Math.PI);
                crc.fillStyle = "#000000";
                crc.fill(fischPupille);
            }



            else {
                let koerper: Path2D = new Path2D();
                koerper.arc(this.x, this.y, (this.groesse) * 30 / 10, 0, 2 * Math.PI);
                crc.fillStyle = "#F7D148";
                crc.fill(koerper);
                crc.strokeStyle = "#F8E6A4";
                crc.stroke(koerper);

                let schwanz: Path2D = new Path2D();
                schwanz.moveTo(this.x + (30 * this.groesse) / 10, this.y - (4 * this.groesse) / 10);
                schwanz.lineTo(this.x + (50 * this.groesse) / 10, this.y - (17 * this.groesse) / 10);
                schwanz.lineTo(this.x + (50 * this.groesse) / 10, this.y + (7 * this.groesse) / 10);
                crc.fillStyle = "#F8E6A4";
                crc.fill(schwanz);
                crc.strokeStyle = "#F7D148";
                crc.stroke(schwanz);

                let fischAuge: Path2D = new Path2D();
                fischAuge.arc(this.x - 12, this.y + 2, (this.groesse * 10) / 10, 0, 2 * Math.PI);
                crc.fillStyle = "#FFFFFF";
                crc.fill(fischAuge);
                crc.strokeStyle = "#000000";
                crc.stroke(fischAuge);

                let fischPupille: Path2D = new Path2D();
                fischPupille.arc(this.x - 12, this.y + 2, (this.groesse * 7) / 10, 0, 2 * Math.PI);
                crc.fillStyle = "#000000";
                crc.fill(fischPupille);
            }

        }


        zusammenstoss(fisch: Fische): number {
            let xEntfernung: number = Math.abs(this.x - fisch.x);
            let yEntfernung: number = Math.abs(this.y - fisch.y);
            if (Math.sqrt(Math.pow(xEntfernung, 2) + Math.pow(yEntfernung, 2)) < 60) {
                if (this.groesse > fisch.groesse) {
                    this.groesse++;
                    punktestand += 25;
                    return 1;
                }

                else {
                    return 2;
                }

            }
            else return 0;
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x > canvas.width) {
                this.x = canvas.width;
            }

            else if (this.x < 0) {
                this.x = 0;
            }

            else if (this.y > canvas.height) {
                this.y = canvas.height;
            }

            else if (this.y < 0) {
                this.y = 0;
            }
        }



        update(): void {
            this.draw();
            this.move();
        }

    }
}
