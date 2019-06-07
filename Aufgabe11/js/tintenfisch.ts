namespace Aufgabe11 {

    export class Tintenfische {
        x: number;
        y: number;
        dx: number;

        draw(): void {
            let tintiKreis: Path2D = new Path2D();
            tintiKreis.arc(this.x, this.y, 50, 0, 2 * Math.PI);
            crc.fillStyle = "#57406c";
            crc.fill(tintiKreis);

            let tintiBein1: Path2D = new Path2D();
            tintiBein1.ellipse(this.x - 45, this.y + 52, 10, 40, 10, 0, 2 * Math.PI);
            crc.fillStyle = "#57406c";
            crc.fill(tintiBein1);

            let tintiBein2: Path2D = new Path2D();
            tintiBein2.ellipse(this.x - 20, this.y + 65, 10, 40, 9.9, 0, 2 * Math.PI);
            crc.fillStyle = "#57406c";
            crc.fill(tintiBein2);

            let tintiBein3: Path2D = new Path2D();
            tintiBein3.ellipse(this.x + 5, this.y + 65, 10, 40, 9.8, 0, 2 * Math.PI);
            crc.fillStyle = "#57406c";
            crc.fill(tintiBein3);

            let tintiBein4: Path2D = new Path2D();
            tintiBein4.ellipse(this.x - 60, this.y + 30, 10, 40, 10, 0, 2 * Math.PI);
            crc.fillStyle = "#57406c";
            crc.fill(tintiBein4);

            let auge1: Path2D = new Path2D();
            auge1.arc(this.x - 10, this.y - 15, 8, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill(auge1);
            crc.strokeStyle = "#000000";
            crc.stroke(auge1);

            let auge2: Path2D = new Path2D();
            auge2.arc(this.x + 20, this.y - 5, 8, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill(auge2);
            crc.strokeStyle = "#000000";
            crc.stroke(auge2);


            let pupille1: Path2D = new Path2D();
            pupille1.arc(this.x + 20, this.y - 5, 5, 0, 2 * Math.PI);
            crc.fillStyle = "#000000";
            crc.fill(pupille1);


            let pupille2: Path2D = new Path2D();
            pupille1.arc(this.x - 10, this.y - 15, 5, 0, 2 * Math.PI);
            crc.fillStyle = "#000000";
            crc.fill(pupille1);


            let mund: Path2D = new Path2D();
            mund.moveTo(this.x - 30, this.y - 5);
            mund.bezierCurveTo(this.x - 50, this.y + 50, this.x + 20, this.y + 40, this.x + 20, this.y + 20);
            crc.strokeStyle = "#362645";
            crc.stroke(mund);


            let mund1: Path2D = new Path2D();
            mund1.moveTo(this.x - 30, this.y - 5);
            mund1.bezierCurveTo(this.x - 40, this.y + 40, this.x + 10, this.y + 30, this.x + 20, this.y + 20);
            crc.strokeStyle = "#362645";
            crc.stroke(mund1);

        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            if (this.x - 120 > canvas.width + 100) {
                this.x = 0;
            }
            if (this.x + 100 < 0) {
                this.x = canvas.width;
            }
        }

    }

}