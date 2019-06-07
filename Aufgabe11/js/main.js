var Aufgabe11;
(function (Aufgabe11) {
    /* Aufgabe 11: Animationen und Klassen
         Name: Kathrin Wurz
         Matrikel: 260742
         Datum: .06.2019
         Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
         Er wurde nicht kopiert und auch nicht diktiert. */
    document.addEventListener("DOMContentLoaded", init);
    let fischArray = [];
    let tintenfischArray = [];
    let kleineBlasenArray = [];
    let grosseBlasenArray = [];
    let fps = 30;
    let imageData;
    function init() {
        Aufgabe11.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc = Aufgabe11.canvas.getContext("2d");
        zeichneHintergrund();
        imageData = Aufgabe11.crc.getImageData(0, 0, Aufgabe11.canvas.width, Aufgabe11.canvas.height);
        for (let i = 0; i <= 20; i++) {
            let x = Math.random() * Aufgabe11.canvas.width;
            let y = Math.random() * Aufgabe11.canvas.height;
            let dx = Math.random() * 15;
            let fisch;
            fisch = new Aufgabe11.Fische();
            fisch.x = x;
            fisch.y = y;
            fisch.dx = dx;
            fischArray.push(fisch);
            fisch.draw();
            console.log(fisch);
        }
        for (let i = 0; i <= 5; i++) {
            let x = Math.random() * Aufgabe11.canvas.width;
            let y = Math.random() * Aufgabe11.canvas.height;
            let dx = Math.random() * 10 - 5;
            let tinti;
            tinti = new Aufgabe11.Tintenfische();
            tinti.x = x;
            tinti.y = y;
            tinti.dx = dx;
            tintenfischArray.push(tinti);
            tinti.draw();
            console.log(tinti);
        }
        for (let i = 0; i <= 50; i++) {
            let x = Math.random() * Aufgabe11.canvas.width;
            let y = Math.random() * Aufgabe11.canvas.height;
            let dy = Math.random() * -3 - 1;
            let klein;
            klein = new Aufgabe11.KleineLuftblasen();
            klein.x = x;
            klein.y = y;
            klein.dy = dy;
            kleineBlasenArray.push(klein);
            klein.draw();
            console.log(klein);
        }
        for (let i = 0; i <= 50; i++) {
            let x = Math.random() * Aufgabe11.canvas.width;
            let y = Math.random() * Aufgabe11.canvas.height;
            let dy = Math.random() * -2 - 1;
            let gross;
            gross = new Aufgabe11.GrosseLuftblasen();
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
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe11.crc.clearRect(0, 0, Aufgabe11.canvas.width, Aufgabe11.canvas.height);
        Aufgabe11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fischArray.length; i++) {
            fischArray[i].update();
        }
        for (let i = 0; i < tintenfischArray.length; i++) {
            tintenfischArray[i].update();
        }
        for (let i = 0; i < kleineBlasenArray.length; i++) {
            kleineBlasenArray[i].update();
        }
        for (let i = 0; i < grosseBlasenArray.length; i++) {
            grosseBlasenArray[i].update();
        }
    }
    function zeichneHintergrund() {
        //Wasser 
        let wasser = new Path2D();
        Aufgabe11.crc.rect(0, 0, 800, 400);
        Aufgabe11.crc.fillStyle = "#00868b";
        Aufgabe11.crc.fill();
        //Boden
        let boden = new Path2D();
        boden.rect(0, 400, 800, 200);
        Aufgabe11.crc.fillStyle = "#CDBA96";
        Aufgabe11.crc.fill(boden);
        //Muschel
        let muschel = new Path2D();
        let _x = 220;
        let _y = 450;
        muschel.moveTo(_x + 75, _y + 40);
        muschel.bezierCurveTo(_x + 130, _y + 62.5, _x + 130, _y + 25, _x + 100, _y + 25);
        muschel.bezierCurveTo(_x + 85, _y + 25, _x + 75, _y + 37, _x + 75, _y + 40);
        Aufgabe11.crc.fillStyle = "#fff8dc";
        Aufgabe11.crc.fill(muschel);
        //Sandkörner
        for (let i = 0; i < 4000; i++) {
            let x = Math.random() * Aufgabe11.canvas.width;
            let y = Math.random() * 600 + 400;
            let sandkoerner = new Path2D();
            sandkoerner.arc(x, y, 1, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#8b795e";
            Aufgabe11.crc.fill(sandkoerner);
        }
        // Gras
        for (let i = 0; i < 30; i++) {
            let grashalm1 = new Path2D();
            let _x = Math.random() * Aufgabe11.canvas.width;
            let _y = Math.random() * Aufgabe11.canvas.height + 450;
            grashalm1.moveTo(_x - 30, _y + 100);
            grashalm1.lineTo(_x - 30, _y + 30);
            grashalm1.lineTo(_x - 100, _y - 200);
            grashalm1.closePath();
            Aufgabe11.crc.fillStyle = "#698b22";
            Aufgabe11.crc.fill(grashalm1);
            Aufgabe11.crc.strokeStyle = "#556b2f";
            Aufgabe11.crc.stroke(grashalm1);
        }
        for (let i = 0; i < 35; i++) {
            let grashalm2 = new Path2D();
            let _x = Math.random() * Aufgabe11.canvas.width;
            let _y = Math.random() * Aufgabe11.canvas.height + 450;
            grashalm2.moveTo(_x - 5, _y + 150);
            grashalm2.lineTo(_x - 30, _y + 30);
            grashalm2.lineTo(_x - 100, _y - 200);
            grashalm2.closePath();
            Aufgabe11.crc.fillStyle = "#698b22";
            Aufgabe11.crc.fill(grashalm2);
            Aufgabe11.crc.strokeStyle = "#556b2f";
            Aufgabe11.crc.stroke(grashalm2);
        }
        for (let i = 0; i < 40; i++) {
            let grashalm3 = new Path2D();
            let _x = Math.random() * Aufgabe11.canvas.width;
            let _y = Math.random() * Aufgabe11.canvas.height + 450;
            grashalm3.moveTo(_x + 5, _y + 100);
            grashalm3.lineTo(_x + 30, _y - 50);
            grashalm3.lineTo(_x + 80, _y - 200);
            grashalm3.closePath();
            Aufgabe11.crc.fillStyle = "#698b22";
            Aufgabe11.crc.fill(grashalm3);
            Aufgabe11.crc.strokeStyle = "#556b2f";
            Aufgabe11.crc.stroke(grashalm3);
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=main.js.map