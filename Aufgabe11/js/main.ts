namespace Aufgabe11 {

    /* Aufgabe 11: Animationen und Klassen
         Name: Kathrin Wurz
         Matrikel: 260742
         Datum: .06.2019
         Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
         Er wurde nicht kopiert und auch nicht diktiert. */



    document.addEventListener("DOMContentLoaded", init);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let fischArray: Fische[] = [];
    let tintenfischArray: Tintenfische[] = [];
    let kleineBlasenArray: KleineLuftblasen[] = [];
    let grosseBlasenArray: GrosseLuftblasen[] = [];
    let fps: number = 30;
    let imageData: ImageData;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        zeichneHintergrund();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        

        for (let i: number = 0; i <= 20; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = Math.random() * 15;
            let fisch: Fische;
            fisch = new Fische();
            fisch.x = x;
            fisch.y = y;
            fisch.dx = dx;
            fischArray.push(fisch);
            fisch.draw();
            console.log(fisch);
        }

        for (let i: number = 0; i <= 5; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = Math.random() * 10 - 5;
            let tinti: Tintenfische;
            tinti = new Tintenfische();
            tinti.x = x;
            tinti.y = y;
            tinti.dx = dx;
            tintenfischArray.push(tinti);
            tinti.draw();
            console.log(tinti);
        }

        for (let i: number = 0; i <= 50; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dy: number = Math.random() * -3 - 1;
            let klein: KleineLuftblasen;
            klein = new KleineLuftblasen();
            klein.x = x;
            klein.y = y;
            klein.dy = dy;
            kleineBlasenArray.push(klein);
            klein.draw();
            console.log(klein);
        }

        for (let i: number = 0; i <= 50; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dy: number = Math.random() * -2 - 1;
            let gross: GrosseLuftblasen;
            gross = new GrosseLuftblasen();
            gross.x = x;
            gross.y = y;
            gross.dy = dy;
            grosseBlasenArray.push(gross);
            gross.draw();
            console.log(gross);
        }
        update();
    }



    // Update Funktion
    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < fischArray.length; i++) {
            fischArray[i].update();
        }

        for (let i: number = 0; i < tintenfischArray.length; i++) {
            tintenfischArray[i].update();
        }

        for (let i: number = 0; i < kleineBlasenArray.length; i++) {
            kleineBlasenArray[i].update();
        }

        for (let i: number = 0; i < grosseBlasenArray.length; i++) {
            grosseBlasenArray[i].update();
        }
    }




    function zeichneHintergrund(): void {

        //Wasser 
        let wasser: Path2D = new Path2D();
        crc.rect(0, 0, 800, 400);
        crc.fillStyle = "#00868b";
        crc.fill();

        //Boden
        let boden: Path2D = new Path2D();
        boden.rect(0, 400, 800, 200);
        crc.fillStyle = "#CDBA96";
        crc.fill(boden);

        //Muschel
        let muschel: Path2D = new Path2D();
        let _x: number = 220;
        let _y: number = 450;
        muschel.moveTo(_x + 75, _y + 40);
        muschel.bezierCurveTo(_x + 130, _y + 62.5, _x + 130, _y + 25, _x + 100, _y + 25);
        muschel.bezierCurveTo(_x + 85, _y + 25, _x + 75, _y + 37, _x + 75, _y + 40);
        crc.fillStyle = "#fff8dc";
        crc.fill(muschel);

        //Sandkörner
        for (let i: number = 0; i < 4000; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * 600 + 400;
            let sandkoerner: Path2D = new Path2D();
            sandkoerner.arc(x, y, 1, 0, 2 * Math.PI);
            crc.fillStyle = "#8b795e";
            crc.fill(sandkoerner);
        }

        // Gras
        for (let i: number = 0; i < 30; i++) {
            let grashalm1: Path2D = new Path2D();
            let _x: number = Math.random() * canvas.width;
            let _y: number = Math.random() * canvas.height + 450;
            grashalm1.moveTo(_x - 30, _y + 100);
            grashalm1.lineTo(_x - 30, _y + 30);
            grashalm1.lineTo(_x - 100, _y - 200);
            grashalm1.closePath();
            crc.fillStyle = "#698b22";
            crc.fill(grashalm1);
            crc.strokeStyle = "#556b2f";
            crc.stroke(grashalm1);
        }

        for (let i: number = 0; i < 35; i++) {
            let grashalm2: Path2D = new Path2D();
            let _x: number = Math.random() * canvas.width;
            let _y: number = Math.random() * canvas.height + 450;
            grashalm2.moveTo(_x - 5, _y + 150);
            grashalm2.lineTo(_x - 30, _y + 30);
            grashalm2.lineTo(_x - 100, _y - 200);
            grashalm2.closePath();
            crc.fillStyle = "#698b22";
            crc.fill(grashalm2);
            crc.strokeStyle = "#556b2f";
            crc.stroke(grashalm2);
        }

        for (let i: number = 0; i < 40; i++) {
            let grashalm3: Path2D = new Path2D();
            let _x: number = Math.random() * canvas.width;
            let _y: number = Math.random() * canvas.height + 450;
            grashalm3.moveTo(_x + 5, _y + 100);
            grashalm3.lineTo(_x + 30, _y - 50);
            grashalm3.lineTo(_x + 80, _y - 200);
            grashalm3.closePath();
            crc.fillStyle = "#698b22";
            crc.fill(grashalm3);
            crc.strokeStyle = "#556b2f";
            crc.stroke(grashalm3);
        }

    }
}