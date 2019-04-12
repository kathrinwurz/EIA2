/* Aufgabe: Aufgabe 3: Mau Mau interaktiv
    Name: Kathrin Wurz
    Matrikel: 260742
    Datum: 13.04.2019 */




interface Karten {
    symbol: number; //Herz = 1, Karo = 2, Kreuz = 3, Pik = 4
    wert: number;
    position: string;

}

/*Ass*/
let herzAss: Karten = {
    symbol: 1,
    wert: 14,
    position: "nichts"
}

let karoAss: Karten = {
    symbol: 2,
    wert: 14,
    position: "nichts"
}

let kreuzAss: Karten = {
    symbol: 3,
    wert: 14,
    position: "nichts"
}

let pikAss: Karten = {
    symbol: 4,
    wert: 14,
    position: "nichts"
}

/*König*/
let herzKoenig: Karten = {
    symbol: 1,
    wert: 13,
    position: "nichts"
}

let karoKoenig: Karten = {
    symbol: 2,
    wert: 13,
    position: "nichts"
}

let kreuzKoenig: Karten = {
    symbol: 3,
    wert: 13,
    position: "nichts"
}

let pikKoenig: Karten = {
    symbol: 4,
    wert: 13,
    position: "nichts"
}

/*Dame*/
let herzDame: Karten = {
    symbol: 1,
    wert: 12,
    position: "nichts"
}

let karoDame: Karten = {
    symbol: 2,
    wert: 12,
    position: "nichts"
}

let kreuzDame: Karten = {
    symbol: 3,
    wert: 12,
    position: "nichts"
}

let pikDame: Karten = {
    symbol: 4,
    wert: 12,
    position: "nichts"
}

/*Bube*/
let herzBube: Karten = {
    symbol: 1,
    wert: 11,
    position: "nichts"
}

let karoBube: Karten = {
    symbol: 2,
    wert: 11,
    position: "nichts"
}

let kreuzBube: Karten = {
    symbol: 3,
    wert: 11,
    position: "nichts"
}

let pikBube: Karten = {
    symbol: 4,
    wert: 11,
    position: "nichts"
}

/*10*/
let herzZehn: Karten = {
    symbol: 1,
    wert: 10,
    position: "nichts"
}

let karoZehn: Karten = {
    symbol: 2,
    wert: 10,
    position: "nichts"
}

let kreuzZehn: Karten = {
    symbol: 3,
    wert: 10,
    position: "nichts"
}

let pikZehn: Karten = {
    symbol: 4,
    wert: 10,
    position: "nichts"
}

/*9*/
let herzNeun: Karten = {
    symbol: 1,
    wert: 9,
    position: "nichts"
}

let karoNeun: Karten = {
    symbol: 2,
    wert: 9,
    position: "nichts"
}

let kreuzNeun: Karten = {
    symbol: 3,
    wert: 9,
    position: "nichts"
}

let pikNeun: Karten = {
    symbol: 4,
    wert: 9,
    position: "nichts"
}

/*8*/
let herzAcht: Karten = {
    symbol: 1,
    wert: 8,
    position: "nichts"
}

let karoAcht: Karten = {
    symbol: 2,
    wert: 8,
    position: "nichts"
}

let kreuzAcht: Karten = {
    symbol: 3,
    wert: 8,
    position: "nichts"
}

let pikAcht: Karten = {
    symbol: 4,
    wert: 8,
    position: "nichts"
}

/*7*/
let herzSieben: Karten = {
    symbol: 1,
    wert: 7,
    position: "nichts"
}

let karoSieben: Karten = {
    symbol: 2,
    wert: 7,
    position: "nichts"
}

let kreuzSieben: Karten = {
    symbol: 3,
    wert: 7,
    position: "nichts"
}

let pikSieben: Karten = {
    symbol: 4,
    wert: 7,
    position: "nichts"
}


/*Arrays Nachziehstapel + Handkarten + Auflegestapel*/

let nachziehStapelArray: Karten[] = [herzAss, karoAss, kreuzAss, pikAss, herzKoenig, karoKoenig, kreuzKoenig, pikKoenig, herzDame, karoDame, kreuzDame, pikDame, herzBube, karoBube, kreuzBube, pikBube, herzZehn, karoZehn, kreuzZehn, pikZehn, herzNeun, karoNeun, kreuzNeun, pikNeun, herzAcht, karoAcht, kreuzAcht, pikAcht, herzSieben, karoSieben, kreuzSieben, pikSieben];
let handKartenArray: Karten[] = [];
let auflegeStapelArray: Karten[] = [];

let obereKarte: Karten;



/*Fenster öffnen, Abfrage für Anzahl der Handkarten*/
function spielStarten(): void {
    let anzahlHandkarten: number = 0;
    do {
        anzahlHandkarten = parseInt(prompt("Wie viele Karten möchtest du? Gib eine Zahl zwischen 4 und 6 ein."));
    }
    while (isNaN(anzahlHandkarten) || anzahlHandkarten > 6 || anzahlHandkarten < 4); //Wird so oft wiederholt, bis die Eingabe eine Zahl zwischen 4 und 6 ist. "isNaN" bedeutet "Is Not a Number"

    console.log("Handkarten: " + anzahlHandkarten);

    for (let i: number = 0; i < anzahlHandkarten; i++) {
        zieheKarten();
    }

    nachziehStapelErstellen();
    let aktuelleKarte: number = Math.floor(Math.random() * (nachziehStapelArray.length));
    obereKarte = nachziehStapelArray[aktuelleKarte];
    nachziehStapelArray.splice(aktuelleKarte, 1);

    auflegeStapelErstellen();
    document.getElementById("sortieren").addEventListener("click", kartenSortieren)

    handKartenErstellen();

}


function zieheKarten(): void {
    if (nachziehStapelArray.length > 0) {
        let aktuelleKarte: number = Math.floor(Math.random() * (nachziehStapelArray.length));
        handKartenArray.push(nachziehStapelArray[aktuelleKarte]);
        nachziehStapelArray.splice(aktuelleKarte, 1); /*splice = 1. wie vielte Stelle im Array, 2. wie viele Elemente im Array werden entfernt, 3. was wird an dieser Stelle beigefügt
                                                    -> Karte wird rausgeschmissen)*/
        handKartenErstellen();
    }
    else {
        alert("Der Nachziehstapel ist leer.")
    }
}


/*Funktion Nachziehstapel*/
function nachziehStapelErstellen(): void {
    document.getElementById("nachziehStapel").addEventListener("click", zieheKarten); //Klick-Event auf dem Nachziehstapel, führt Funktion zieheKarten aus 
    document.getElementById("nachziehStapel").innerHTML = `<div class="StylingKarten">
    <img src="img/kartenruecken.jpeg" class="rueckseite">
    </div>`;
}




/*Funktion zum generieren des Auflegestapels ---> Ablage*/
function auflegeStapelErstellen(): void {

    let write: string = "";
    write += `<div class="StylingKarten">`;

    switch (obereKarte.symbol) {
        case 1:
            write += `<div class='rot' class='SytlingSymbol'>♥`;
            break;
        case 2:
            write += `<div class='rot' class='StylingSymbol'>♦`;
            break;
        case 3:
            write += `<div class='schwarz' class='StylingSymbol'>♣`;
            break;
        case 4:
            write += `<div class='schwarz' class='StylingSymbol'>♠`;
            break;
        default:
            console.log("Error")
        }
    switch (obereKarte.wert) {
        case 14:
            write += `A</div>`;
            break;
        case 13:
            write += `K</div>`;
            break;
        case 12:
            write += `D</div>`;
            break;
        case 11:
            write += `B</div>`;
            break;
        case 10:
            write += `10</div>`;
            break;
        case 9:
            write += `9</div>`;
            break;
        case 8:
            write += `8</div>`;
            break;
        case 7:
            write += `7</div>`;
            break;
        default:
            console.log("Error")
    }
    write += `</div>`
    document.getElementById("auflegeStapel").innerHTML = `${write}`;
}


/*Funktion zum generieren der Handkarten*/
function handKartenErstellen(): void {

    document.getElementById("handKartenSpieler").addEventListener("click", karteAusspielen);
    document.getElementById("handKartenSpieler").innerHTML = "";

    for (let i: number = 0; i < handKartenArray.length; i++) {
        handKartenArray[i].position = "position" + i;
        let write: string = "";
        write += `<div class="StylingKarten" id="position${i}">`

        switch (handKartenArray[i].symbol) {
            case 1:
                write += `<div class='rot' class='StylingSymbol'>♥`;
                break;
            case 2:
                write += `<div class='rot' class='StylingSymbol'>♦`;
                break;
            case 3:
                write += `<div class='schwarz' class='StylingSymbol'>♣`;
                break;
            case 4:
                write += `<div class='schwarz' class='StylingSymbol'>♠`;
                break;
            default:
                console.log("Error")
        }

        switch (handKartenArray[i].wert) {
            case 14:
                write += `A</div>`;
                break;
            case 13:
                write += `K</div>`;
                break;
            case 12:
                write += `D</div>`;
                break;
            case 11:
                write += `B</div>`;
                break;
            case 10:
                write += `10</div>`;
                break;
            case 9:
                write += `9</div>`;
                break;
            case 8:
                write += `8</div>`;
                break;
            case 7:
                write += `7</div>`;
                break;
            default:
                console.log("Error")
        }
        write += `</div>`
        document.getElementById("handKartenSpieler").innerHTML += `${write}`;
    }
}

/*Funktion für das Ausspielen einer Karte */
function karteAusspielen(): void {
    let idAusgewählteKarte: HTMLElement = <HTMLElement>event.target;
    for (let i = 0; i < handKartenArray.length; i++) {
        console.log("x");
        if (String(idAusgewählteKarte.getAttribute("id")) == handKartenArray[i].position) {
            console.log("y");
            if (handKartenArray[i].symbol == obereKarte.symbol || handKartenArray[i].wert == obereKarte.wert) {
                auflegeStapelArray.push(obereKarte);
                obereKarte = handKartenArray[i];
                handKartenArray[i].position = "nichts";
                handKartenArray.splice(i, 1);
                handKartenErstellen();
                auflegeStapelErstellen();
                console.log("erledigt");
            }
            else {
                alert("Diese Karte kann nicht ausgespielt werden.")
            }
        }
    }
}

/*Funktion für das Sortieren der Karten */
function kartenSortieren() {
    handKartenArray.sort(nachWertSortieren); //nimmt 2 Werte aus dem Array und vergleicht sie 
    handKartenArray.sort(nachSymbolSortieren);
    handKartenErstellen();
}

/*Nach Wert sortieren*/
function nachWertSortieren(karte1: Karten, karte2: Karten): number {
    let wertKarte1: number = karte1.wert;
    let wertKarte2: number = karte2.wert;
    if (wertKarte1 < wertKarte2) return -1; // sort-Funktion macht "nichts", schiebt es um -1 vor die zu vergleichende Karte 
    if (wertKarte1 > wertKarte2) return 1; // sort-Funktion tauscht die Karten, schiebt es um 1 vor die zu vergleichende Karte 
    if (wertKarte1 == wertKarte2) return 0; //sort-Funktion macht nichts
}

/*Nach Symbol sortieren*/
function nachSymbolSortieren(karte1: Karten, karte2: Karten): number {
    let symbolKarte1: number = karte1.symbol;
    let symbolKarte2: number = karte2.symbol;
    if (symbolKarte1 < symbolKarte2) return -1; // sort-Funktion macht "nichts", schiebt es um -1 vor die zu vergleichende Karte 
    if (symbolKarte1 > symbolKarte2) return 1; // sort-Funktion tauscht die Karten, schiebt es um 1 vor die zu vergleichende Karte 
    if (symbolKarte1 == symbolKarte2) return 0; //sort-Funktion macht nichts
}


/* Beim Drücken der Leertaste wird eine Karte vom Stapel gezogen */
function leertaste(event: KeyboardEvent): void {
    if (event.keyCode == 32) zieheKarten();
}





document.addEventListener("DOMContentLoaded", init);
document.addEventListener("keydown", leertaste);

function init() {
    spielStarten();
}