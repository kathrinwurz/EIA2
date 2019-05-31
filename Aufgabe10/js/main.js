/* Aufgabe 10: Canvas
     Name: Kathrin Wurz
     Matrikel: 260742
     Datum: 31.05.2019
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
     Er wurde nicht kopiert und auch nicht diktiert. */
document.addEventListener("DOMContentLoaded", init);
let crc;
let canvas;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    //Funktionsaufrufe 
    wasser();
    boden();
    gras(700, 500);
    gras(650, 500);
    gras(620, 500);
    gras(610, 500);
    gras(605, 510);
    gras(590, 530);
    gras(500, 520);
    gras(50, 500);
    gras(30, 550);
    gras(70, 480);
    gras(90, 500);
    muscheln(680, 450);
    muscheln(320, 550);
    muscheln(100, 400);
    tintenfisch(400, 185);
    //Zufall Luftblasen
    for (let i = 0; i < 30; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        luftblasen(x, y);
    }
    //Zufall Sand
    for (let i = 0; i < 4000; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * 600 + 400;
        sand(x, y);
    }
    //Zufall Fisch
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        fische(x, y);
    }
}
//Wasser 
function wasser() {
    let wasser = new Path2D();
    crc.rect(0, 0, 800, 400);
    crc.fillStyle = "#00868b";
    crc.fill();
}
//Boden
function boden() {
    let boden = new Path2D();
    boden.rect(0, 400, 800, 200);
    crc.fillStyle = "#CDBA96";
    crc.fill(boden);
}
//Luftblasen
function luftblasen(_x, _y) {
    let blasen = new Path2D();
    blasen.arc(_x, _y, 20, 0, 2 * Math.PI);
    crc.strokeStyle = "#00c5cd";
    crc.stroke(blasen);
}
//Sandkörner
function sand(_x, _y) {
    let sandkoerner = new Path2D();
    sandkoerner.arc(_x, _y, 1, 0, 2 * Math.PI);
    crc.fillStyle = "#8b795e";
    crc.fill(sandkoerner);
}
//Gras
function gras(_x, _y) {
    let pflanze1 = new Path2D();
    pflanze1.moveTo(_x - 30, _y + 100);
    pflanze1.lineTo(_x - 30, _y + 30);
    pflanze1.lineTo(_x - 100, _y - 200);
    pflanze1.closePath();
    crc.fillStyle = "#698b22";
    crc.fill(pflanze1);
    crc.strokeStyle = "#556b2f";
    crc.stroke(pflanze1);
    let pflanze2 = new Path2D();
    pflanze2.moveTo(_x + 30, _y - 100);
    pflanze2.lineTo(_x + 30, _y - 30);
    pflanze2.lineTo(_x + 100, _y + 200);
    pflanze2.closePath();
    crc.fillStyle = "#698b22";
    crc.fill(pflanze2);
    crc.strokeStyle = "#556b2f";
    crc.stroke(pflanze2);
    let pflanze3 = new Path2D();
    pflanze3.moveTo(_x - 5, _y + 150);
    pflanze3.lineTo(_x - 30, _y + 30);
    pflanze3.lineTo(_x - 100, _y - 200);
    pflanze3.closePath();
    crc.fillStyle = "#698b22";
    crc.fill(pflanze3);
    crc.strokeStyle = "#556b2f";
    crc.stroke(pflanze3);
    let pflanze4 = new Path2D();
    pflanze4.moveTo(_x + 15, _y - 100);
    pflanze4.lineTo(_x + 30, _y - 30);
    pflanze4.lineTo(_x + 100, _y + 200);
    pflanze4.closePath();
    crc.fillStyle = "#698b22";
    crc.fill(pflanze4);
    crc.strokeStyle = "#556b2f";
    crc.stroke(pflanze4);
    let pflanze5 = new Path2D();
    pflanze5.moveTo(_x + 10, _y + 100);
    pflanze5.lineTo(_x + 30, _y - 50);
    pflanze5.lineTo(_x + 80, _y - 200);
    pflanze5.closePath();
    crc.fillStyle = "#698b22";
    crc.fill(pflanze5);
    crc.strokeStyle = "#556b2f";
    crc.stroke(pflanze5);
    let pflanze6 = new Path2D();
    pflanze6.moveTo(_x + 5, _y + 100);
    pflanze6.lineTo(_x + 30, _y - 50);
    pflanze6.lineTo(_x + 80, _y - 200);
    pflanze6.closePath();
    crc.fillStyle = "#698b22";
    crc.fill(pflanze6);
    crc.strokeStyle = "#556b2f";
    crc.stroke(pflanze6);
    let pflanze7 = new Path2D();
    pflanze7.moveTo(_x + 5, _y + 100);
    pflanze7.lineTo(_x + 30, _y - 50);
    pflanze7.lineTo(_x + 80, _y - 200);
    pflanze7.closePath();
    crc.fillStyle = "#698b22";
    crc.fill(pflanze7);
    crc.strokeStyle = "#556b2f";
    crc.stroke(pflanze7);
}
//Muscheln
function muscheln(_x, _y) {
    let muschel = new Path2D();
    muschel.moveTo(_x + 75, _y + 40);
    muschel.bezierCurveTo(_x + 130, _y + 62.5, _x + 130, _y + 25, _x + 100, _y + 25);
    muschel.bezierCurveTo(_x + 85, _y + 25, _x + 75, _y + 37, _x + 75, _y + 40);
    crc.fillStyle = "#fff8dc";
    crc.fill(muschel);
}
//Fische 
function fische(_x, _y) {
    let koerper = new Path2D();
    koerper.ellipse(_x, _y, 30, 50, 1.5, 0, 2 * Math.PI);
    crc.fillStyle = "#ffb6c1";
    crc.fill(koerper);
    crc.strokeStyle = "#8b0a50";
    crc.stroke(koerper);
    let schwanz = new Path2D();
    schwanz.moveTo(_x - 50, _y + 4);
    schwanz.lineTo(_x - 70, _y + 25);
    schwanz.lineTo(_x - 70, _y - 15);
    crc.fillStyle = "#cd6090";
    crc.fill(schwanz);
    crc.strokeStyle = "#8b0a50";
    crc.stroke(schwanz);
    let fischAuge = new Path2D();
    fischAuge.arc(_x + 20, _y - 2, 8, 0, 2 * Math.PI);
    crc.fillStyle = "#FFFFFF";
    crc.fill(fischAuge);
    crc.strokeStyle = "#000000";
    crc.stroke(fischAuge);
    let fischPupille = new Path2D();
    fischPupille.arc(_x + 20, _y - 2, 5, 0, 2 * Math.PI);
    crc.fillStyle = "#000000";
    crc.fill(fischPupille);
}
//Tintenfisch 
function tintenfisch(_x, _y) {
    let tintiKreis = new Path2D();
    tintiKreis.arc(_x, _y, 50, 0, 2 * Math.PI);
    crc.fillStyle = "#57406c";
    crc.fill(tintiKreis);
    let tintiBein1 = new Path2D();
    tintiBein1.ellipse(_x - 45, _y + 52, 10, 40, 10, 0, 2 * Math.PI);
    crc.fillStyle = "#57406c";
    crc.fill(tintiBein1);
    let tintiBein2 = new Path2D();
    tintiBein2.ellipse(_x - 20, _y + 65, 10, 40, 9.9, 0, 2 * Math.PI);
    crc.fillStyle = "#57406c";
    crc.fill(tintiBein2);
    let tintiBein3 = new Path2D();
    tintiBein3.ellipse(_x + 5, _y + 65, 10, 40, 9.8, 0, 2 * Math.PI);
    crc.fillStyle = "#57406c";
    crc.fill(tintiBein3);
    let tintiBein4 = new Path2D();
    tintiBein4.ellipse(_x - 60, _y + 30, 10, 40, 10, 0, 2 * Math.PI);
    crc.fillStyle = "#57406c";
    crc.fill(tintiBein4);
    let auge1 = new Path2D();
    auge1.arc(_x - 10, _y - 15, 8, 0, 2 * Math.PI);
    crc.fillStyle = "#FFFFFF";
    crc.fill(auge1);
    crc.strokeStyle = "#000000";
    crc.stroke(auge1);
    let auge2 = new Path2D();
    auge2.arc(_x + 20, _y - 5, 8, 0, 2 * Math.PI);
    crc.fillStyle = "#FFFFFF";
    crc.fill(auge2);
    crc.strokeStyle = "#000000";
    crc.stroke(auge2);
    let pupille1 = new Path2D();
    pupille1.arc(_x + 20, _y - 5, 5, 0, 2 * Math.PI);
    crc.fillStyle = "#000000";
    crc.fill(pupille1);
    let pupille2 = new Path2D();
    pupille1.arc(_x - 10, _y - 15, 5, 0, 2 * Math.PI);
    crc.fillStyle = "#000000";
    crc.fill(pupille1);
    let mund = new Path2D();
    mund.moveTo(_x - 30, _y - 5);
    mund.bezierCurveTo(_x - 50, _y + 50, _x + 20, _y + 40, _x + 20, _y + 20);
    crc.strokeStyle = "#362645";
    crc.stroke(mund);
    let mund1 = new Path2D();
    mund1.moveTo(_x - 30, _y - 5);
    mund1.bezierCurveTo(_x - 40, _y + 40, _x + 10, _y + 30, _x + 20, _y + 20);
    crc.strokeStyle = "#362645";
    crc.stroke(mund1);
}
//# sourceMappingURL=main.js.map