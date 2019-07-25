var Endabgabe;
(function (Endabgabe) {
    /*   Abschlussaufgabe
         Name: Kathrin Wurz
         Matrikel: 260742
         Datum: .07.2019
         Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
         Er wurde nicht kopiert und auch nicht diktiert. */
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", spielerFischBewegung);
    document.addEventListener("keyup", spielerFischBewegungAufhoeren);
    Endabgabe.punktestand = 0;
    let alleObjekteArray = [];
    let spielerfisch;
    let fps = 30;
    let imageData;
    function init() {
        Endabgabe.canvas = document.getElementsByTagName("canvas")[0];
        Endabgabe.crc = Endabgabe.canvas.getContext("2d");
        Endabgabe.insert();
        Endabgabe.refresh();
        zeichneHintergrund();
        imageData = Endabgabe.crc.getImageData(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        spielerfisch = new Endabgabe.Spielerfisch();
        spielerfisch.draw();
        erstelleGrosseFische();
        erstelleKugelfische();
        //erstelleKleineLuftblasen();
        //erstelleGrosseLuftblasen();
        update();
        console.log(alleObjekteArray);
    }
    //Update-Funktion
    function update() {
        window.setTimeout(update, 1000 / fps);
        Endabgabe.crc.clearRect(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        Endabgabe.crc.putImageData(imageData, 0, 0);
        spielerfisch.update();
        for (let i = 0; i < alleObjekteArray.length; i++) {
            alleObjekteArray[i].update();
            if (spielerfisch.zusammenstoss(alleObjekteArray[i]) == "tot") {
                alleObjekteArray.splice(i, 1);
            }
            else if (spielerfisch.zusammenstoss(alleObjekteArray[i]) == "spielEnde") {
                alleObjekteArray.splice(0, alleObjekteArray.length);
                Endabgabe.namensEingabe = prompt("Dein Punktestand: " + Endabgabe.punktestand + " Dein Name:");
                Endabgabe.insert();
                Endabgabe.refresh();
            }
        }
        Endabgabe.crc.fillStyle = "#78B9E5";
        Endabgabe.crc.font = "25px Barrio";
        Endabgabe.crc.fillText("Punktestand: " + Endabgabe.punktestand.toString(), 770, 40);
    }
    //Generierung Objekte
    function erstelleGrosseFische() {
        for (let i = 0; i <= 10; i++) {
            let vorzeichen = Math.random() * 2;
            if (vorzeichen <= 1) {
                vorzeichen = -1;
            }
            else {
                vorzeichen = 1;
            }
            let x = Math.floor(Math.random() * 1000) + 600;
            let y = Math.random() * Endabgabe.canvas.height;
            let dx = (Math.random() * 5) * vorzeichen;
            let grosseFische;
            grosseFische = new Endabgabe.GrosseFische();
            grosseFische.x = x;
            grosseFische.y = y;
            grosseFische.dx = dx;
            alleObjekteArray.push(grosseFische);
            grosseFische.draw();
        }
    }
    function erstelleKugelfische() {
        for (let i = 0; i <= 8; i++) {
            let vorzeichen = Math.random() * 2;
            if (vorzeichen <= 1) {
                vorzeichen = -1;
            }
            else {
                vorzeichen = 1;
            }
            let x = Math.random() * Endabgabe.canvas.width;
            let y = Math.random() * Endabgabe.canvas.height;
            let dx = (Math.random() * 10) * vorzeichen;
            let kugelfisch;
            kugelfisch = new Endabgabe.Kugelfische();
            kugelfisch.x = x;
            kugelfisch.y = y;
            kugelfisch.dx = dx;
            alleObjekteArray.push(kugelfisch);
            kugelfisch.draw();
        }
    }
    /* function erstelleKleineLuftblasen(): void {
         for (let i: number = 0; i <= 50; i++) {
             let x: number = Math.random() * canvas.width;
             let y: number = Math.random() * canvas.height;
             let dy: number = Math.random() * -3 - 1;
             let klein: KleineLuftblasen;
             klein = new KleineLuftblasen();
             klein.x = x;
             klein.y = y;
             klein.dy = dy;
             alleObjekteArray.push(klein);
             klein.draw();
         }
     }
 
     function erstelleGrosseLuftblasen(): void {
         for (let i: number = 0; i <= 50; i++) {
             let x: number = Math.random() * canvas.width;
             let y: number = Math.random() * canvas.height;
             let dy: number = Math.random() * -2 - 1;
             let gross: GrosseLuftblasen;
             gross = new GrosseLuftblasen();
             gross.x = x;
             gross.y = y;
             gross.dy = dy;
             alleObjekteArray.push(gross);
             gross.draw();
         }
     } */
    //Hintergrund
    function zeichneHintergrund() {
        let wasser = new Path2D();
        Endabgabe.crc.rect(0, 0, 1000, 600);
        Endabgabe.crc.fillStyle = "#225097";
        Endabgabe.crc.fill();
        //Boden
        let boden = new Path2D();
        boden.rect(0, 500, 1000, 600);
        Endabgabe.crc.fillStyle = "#CDBA96";
        Endabgabe.crc.fill(boden);
        //Muschel
        let muschel = new Path2D();
        let _x = 220;
        let _y = 500;
        muschel.moveTo(_x + 75, _y + 40);
        muschel.bezierCurveTo(_x + 130, _y + 62.5, _x + 130, _y + 25, _x + 100, _y + 25);
        muschel.bezierCurveTo(_x + 85, _y + 25, _x + 75, _y + 37, _x + 75, _y + 40);
        Endabgabe.crc.fillStyle = "#fff8dc";
        Endabgabe.crc.fill(muschel);
        //Sandkörner
        for (let i = 0; i < 4000; i++) {
            let x = Math.random() * Endabgabe.canvas.width;
            let y = Math.random() * Endabgabe.canvas.height + 500;
            let sandkoerner = new Path2D();
            sandkoerner.arc(x, y, 1, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "#8b795e";
            Endabgabe.crc.fill(sandkoerner);
        }
        // Gras
        for (let i = 0; i < 30; i++) {
            let grashalm1 = new Path2D();
            let _x = Math.random() * Endabgabe.canvas.width;
            let _y = Math.random() * Endabgabe.canvas.height + 450;
            grashalm1.moveTo(_x - 30, _y + 100);
            grashalm1.lineTo(_x - 30, _y + 30);
            grashalm1.lineTo(_x - 100, _y - 200);
            grashalm1.closePath();
            Endabgabe.crc.fillStyle = "#698b22";
            Endabgabe.crc.fill(grashalm1);
            Endabgabe.crc.strokeStyle = "#556b2f";
            Endabgabe.crc.stroke(grashalm1);
        }
        for (let i = 0; i < 35; i++) {
            let grashalm2 = new Path2D();
            let _x = Math.random() * Endabgabe.canvas.width;
            let _y = Math.random() * Endabgabe.canvas.height + 450;
            grashalm2.moveTo(_x - 5, _y + 150);
            grashalm2.lineTo(_x - 30, _y + 30);
            grashalm2.lineTo(_x - 100, _y - 200);
            grashalm2.closePath();
            Endabgabe.crc.fillStyle = "#698b22";
            Endabgabe.crc.fill(grashalm2);
            Endabgabe.crc.strokeStyle = "#556b2f";
            Endabgabe.crc.stroke(grashalm2);
        }
        for (let i = 0; i < 40; i++) {
            let grashalm3 = new Path2D();
            let _x = Math.random() * Endabgabe.canvas.width;
            let _y = Math.random() * Endabgabe.canvas.height + 450;
            grashalm3.moveTo(_x + 5, _y + 100);
            grashalm3.lineTo(_x + 30, _y - 50);
            grashalm3.lineTo(_x + 80, _y - 200);
            grashalm3.closePath();
            Endabgabe.crc.fillStyle = "#698b22";
            Endabgabe.crc.fill(grashalm3);
            Endabgabe.crc.strokeStyle = "#556b2f";
            Endabgabe.crc.stroke(grashalm3);
        }
    }
    function spielerFischBewegung(e) {
        switch (e.keyCode) {
            // links
            case 37:
                spielerfisch.dx = -10;
                spielerfisch.richtungsaenderung = ("links");
                break;
            //rechts
            case 39:
                spielerfisch.dx = 10;
                spielerfisch.richtungsaenderung = "rechts";
                break;
            //oben
            case 38:
                spielerfisch.dy = -10;
                break;
            //unten
            case 40:
                spielerfisch.dy = 10;
                break;
        }
    }
    function spielerFischBewegungAufhoeren(_e) {
        switch (_e.keyCode) {
            case 37:
                spielerfisch.dx = 0;
                break;
            //rechts
            case 39:
                spielerfisch.dx = 0;
                break;
            //oben
            case 38:
                spielerfisch.dy = 0;
                break;
            //unten
            case 40:
                spielerfisch.dy = 0;
                break;
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map