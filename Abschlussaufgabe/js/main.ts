namespace Endabgabe {

    /*   Abschlussaufgabe 
         Name: Kathrin Wurz
         Matrikel: 260742
         Datum: .07.2019
         Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
         Er wurde nicht kopiert und auch nicht diktiert. */



    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", spielerFischBewegung);
    document.addEventListener("keyup", spielerFischBewegungAufhoeren);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;


    export let timer: number;
    export let punktestand: number = 0;
    export let namensEingabe: string;


    let alleObjekteArray: AlleObjekte[] = [];
    let spielerfisch: Spielerfisch;

    let fps: number = 30;
    let imageData: ImageData;


    function init(): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        refresh();

        zeichneHintergrund();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);


        spielerfisch = new Spielerfisch();
        spielerfisch.draw();


        erstelleGrosseFische();
        erstelleKugelfische();
        //erstelleKleineLuftblasen();
        //erstelleGrosseLuftblasen();

        update();
        console.log(alleObjekteArray);
    }



    //Update-Funktion
    function update(): void {
        timer = window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height)
        crc.putImageData(imageData, 0, 0);

        spielerfisch.update();


        for (let i: number = 0; i < alleObjekteArray.length; i++) {
            alleObjekteArray[i].update();
            if (spielerfisch.zusammenstoss(alleObjekteArray[i]) == "tot") {
                alleObjekteArray.splice(i, 1);
            }
            else if (spielerfisch.zusammenstoss(alleObjekteArray[i]) == "spielEnde") {
                //alleObjekteArray.splice(0, alleObjekteArray.length);
                window.clearTimeout (timer);
                alert("Oh no, du hast verloren!");
                namensEingabe = prompt("Du hast " + punktestand + " Punkte erreicht! " + "Trag hier deinen Namen ein:" );
                insert();
                refresh();  
            }

        }

                crc.fillStyle = "#78B9E5";
                crc.font = "25px Barrio";
                crc.fillText ("Punktestand: " + punktestand.toString(), 770, 40);

                if (alleObjekteArray.length == 0) {
                    spielzuEnde();
                }


    }




    //Generierung Objekte
    function erstelleGrosseFische(): void {
        for (let i: number = 0; i <= 10; i++) {
            let vorzeichen: number = Math.random() * 2;
            if (vorzeichen <= 1) {
                vorzeichen = -1;
            } else {
                vorzeichen = 1;
            }
            let x: number = Math.floor(Math.random() * 1000) + 600;
            let y: number = Math.random() * canvas.height;
            let dx: number = (Math.random() * 5) * vorzeichen;
            let grosseFische: GrosseFische;
            grosseFische = new GrosseFische();
            grosseFische.x = x;
            grosseFische.y = y;
            grosseFische.dx = dx;
            alleObjekteArray.push(grosseFische);
            grosseFische.draw();
        }
    }

    function erstelleKugelfische(): void {
        for (let i: number = 0; i <= 8; i++) {
            let vorzeichen: number = Math.random() * 2;
            if (vorzeichen <= 1) {
                vorzeichen = -1;
            } else {
                vorzeichen = 1;
            }
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = (Math.random() * 10) * vorzeichen;
            let kugelfisch: Kugelfische;
            kugelfisch = new Kugelfische();
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
    function zeichneHintergrund(): void {
        let wasser: Path2D = new Path2D();
        crc.rect(0, 0, 1000, 600);
        crc.fillStyle = "#225097";
        crc.fill();

        //Boden
        let boden: Path2D = new Path2D();
        boden.rect(0, 500, 1000, 600);
        crc.fillStyle = "#CDBA96";
        crc.fill(boden);

        //Muschel
        let muschel: Path2D = new Path2D();
        let _x: number = 220;
        let _y: number = 500;
        muschel.moveTo(_x + 75, _y + 40);
        muschel.bezierCurveTo(_x + 130, _y + 62.5, _x + 130, _y + 25, _x + 100, _y + 25);
        muschel.bezierCurveTo(_x + 85, _y + 25, _x + 75, _y + 37, _x + 75, _y + 40);
        crc.fillStyle = "#fff8dc";
        crc.fill(muschel);

        //Sandkörner
        for (let i: number = 0; i < 4000; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height + 500;
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



    export function spielzuEnde (){
        window.clearTimeout (timer);
        namensEingabe = prompt("Yeah, du hast gewonnen! Du hast " + punktestand + "Punkte erreicht. Trag' hier deinen Namen ein:" );
                    
                insert();
                refresh();

    }

    function spielerFischBewegung(e: KeyboardEvent): void {

        switch (e.keyCode) {
            // links
            case 37:
                spielerfisch.dx = -10;
                spielerfisch.richtungsaenderung = ("links")
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

    function spielerFischBewegungAufhoeren(_e: KeyboardEvent) {
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


}
