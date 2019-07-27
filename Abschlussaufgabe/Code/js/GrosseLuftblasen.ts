namespace Endabgabe {

	export class GrosseLuftblasen extends Luftblasen {


		constructor() {
			super();
		}


		draw(): void {
			let blasen: Path2D = new Path2D();
			blasen.arc(this.x, this.y, 20, 0, 2 * Math.PI);
			crc.strokeStyle = "#5B7BAB";
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