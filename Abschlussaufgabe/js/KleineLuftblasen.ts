namespace Endabgabe {

	export class KleineLuftblasen extends AlleObjekte {

        constructor() {
			super();
			this.groesse = 0;
        }


		draw(): void {
			let blasen: Path2D = new Path2D();
			blasen.arc(this.x, this.y, 10, 0, 2 * Math.PI);
			crc.strokeStyle = "#6DA0EF";
			crc.stroke(blasen);
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.y += this.dy;
			if (this.y < 0)
				this.y = canvas.height;
		}
	}
}