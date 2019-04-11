/* Aufgabe: Aufgabe 2 - Mau Mau
    Name: Kathrin Wurz
    Matrikel: 260742
    Datum: 07.04.2019
    Der Code wurde in Zusammenarbeit mit Bastian Culig, Lisa Sanchez y Bittner, Carlotta Reinders, Daniel Mainberger und Marvin Kübler erstellt. */




interface Karten {
    symbol: string;
    wert: string;

}

/*Ass*/
let herzAss: Karten = {
    symbol: "♥",
    wert: "Ass"
}

let karoAss: Karten = {
    symbol: "♦",
    wert: "Ass"
}

let kreuzAss: Karten = {
    symbol: "♣",
    wert: "Ass"
}

let pikAss: Karten = {
    symbol: "♠",
    wert: "Ass"
}

/*König*/
let herzKoenig: Karten = {
    symbol: "♥",
    wert: "Koenig"
}

let karoKoenig: Karten = {
    symbol: "♦",
    wert: "Koenig"
}

let kreuzKoenig: Karten = {
    symbol: "♣",
    wert: "Koenig"
}

let pikKoenig: Karten = {
    symbol: "♠",
    wert: "Koenig"
}

/*Dame*/
let herzDame: Karten = {
    symbol: "♥",
    wert: "Dame"
}

let karoDame: Karten = {
    symbol: "♦",
    wert: "Dame"
}

let kreuzDame: Karten = {
    symbol: "♣",
    wert: "Dame"
}

let pikDame: Karten = {
    symbol: "♠",
    wert: "Dame"
}

/*Bube*/
let herzBube: Karten = {
    symbol: "♥",
    wert: "Bube"
}

let karoBube: Karten = {
    symbol: "♦",
    wert: "Bube"
}

let kreuzBube: Karten = {
    symbol: "♣",
    wert: "Bube"
}

let pikBube: Karten = {
    symbol: "♠",
    wert: "Bube"
}

/*10*/
let herzZehn: Karten = {
    symbol: "♥",
    wert: "10"
}

let karoZehn: Karten = {
    symbol: "♦",
    wert: "10"
}

let kreuzZehn: Karten = {
    symbol: "♣",
    wert: "10"
}

let pikZehn: Karten = {
    symbol: "♠",
    wert: "10"
}

/*9*/
let herzNeun: Karten = {
    symbol: "♥",
    wert: "9"
}

let karoNeun: Karten = {
    symbol: "♦",
    wert: "9"
}

let kreuzNeun: Karten = {
    symbol: "♣",
    wert: "9"
}

let pikNeun: Karten = {
    symbol: "♠",
    wert: "9"
}

/*8*/
let herzAcht: Karten = {
    symbol: "♥",
    wert: "8"
}

let karoAcht: Karten = {
    symbol: "♦",
    wert: "8"
}

let kreuzAcht: Karten = {
    symbol: "♣",
    wert: "8"
}

let pikAcht: Karten = {
    symbol: "♠",
    wert: "8"
}

/*7*/
let herzSieben: Karten = {
    symbol: "♥",
    wert: "7"
}

let karoSieben: Karten = {
    symbol: "♦",
    wert: "7"
}

let kreuzSieben: Karten = {
    symbol: "♣",
    wert: "7"
}

let pikSieben: Karten = {
    symbol: "♠",
    wert: "7"
}


/*Arrays Kartendeck + Handkarten*/

let kartenDeck: Karten[] = [herzAss, karoAss, kreuzAss, pikAss, herzKoenig, karoKoenig, kreuzKoenig, pikKoenig, herzDame, karoDame, kreuzDame, pikDame, herzBube, karoBube, kreuzBube, pikBube, herzZehn, karoZehn, kreuzZehn, pikZehn, herzNeun, karoNeun, kreuzNeun, pikNeun, herzAcht, karoAcht, kreuzAcht, pikAcht, herzSieben, karoSieben, kreuzSieben, pikSieben];
let handKarten: Karten[] = [];
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
    console.log(handKarten);

    nachziehStapelErstellen();
    auflegeStapelErstellen();
    handKartenErstellen();

}


function zieheKarten(): void {
    let aktuelleKarte: number = Math.floor(Math.random() * (kartenDeck.length));
    handKarten.push(kartenDeck[aktuelleKarte]);
    kartenDeck.splice(aktuelleKarte, 1) /*splice = 1. wie vielte Stelle im Array, 2. wie viele Elemente im Array werden entfernt, 3. was wird an dieser Stelle beigefügt
                                                    -> Karte wird rausgeschmissen)*/
}


/*Funktion Nachziehstapel*/
function nachziehStapelErstellen(): void {
    document.getElementById("nachziehStapel").innerHTML = `<div class="StylingKarten">
    <img src="img/kartenruecken.jpeg" class="rueckseite">
    </div>`;
}

/*Funktion zum generieren des Auflegestapels*/
function auflegeStapelErstellen(): void {

    let aktuelleKarte: number = Math.floor(Math.random() * (kartenDeck.length));
    obereKarte = kartenDeck[aktuelleKarte];
    kartenDeck.splice(aktuelleKarte, 1);


    let write: string = "";
    write += `<div class="StylingKarten">`;

    switch (obereKarte.symbol) {
        case "♥":
            write += "<div class='rot' class='SytlingSymbol'>♥";
            break;
        case "♦":
            write += "<div class='rot' class='StylingSymbol'>♦";
            break;
        case "♣":
            write += "<div class='schwarz' class='StylingSymbol'>♣";
            break;
        case "♠":
            write += "<div class='schwarz' class='StylingSymbol'>♠";
            break;
        default:
            console.log("Error")

    }

    switch (obereKarte.wert) {
        case "Ass":
            write += `A</div>`;
            break;
        case "Koenig":
            write += `K</div>`;
            break;
        case "Dame":
            write += `D</div>`;
            break;
        case "Bube":
            write += `B</div>`;
            break;
        case "10":
            write += `10</div>`;
            break;
        case "9":
            write += `9</div>`;
            break;
        case "8":
            write += `8</div>`;
            break;
        case "7":
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

    document.getElementById("handKartenSpieler").innerHTML = "";

    for (var i: number = 0; i < handKarten.length; i++) {
        let write: string = "";
        write += `<div class="StylingKarten">`;

        switch (handKarten[i].symbol) {
            case "♥":
                write += "<div class='rot' class='StylingSymbol'>♥";
                break;
            case "♦":
                write += "<div class='rot' class='StylingSymbol'>♦";
                break;
            case "♣":
                write += "<div class='schwarz' class='StylingSymbol'>♣";
                break;
            case "♠":
                write += "<div class='schwarz' class='StylingSymbol'>♠";
                break;
            default:
                console.log("Error")
        }

        switch (handKarten[i].wert) {
            case "Ass":
                write += `A</div>`;
                break;
            case "Koenig":
                write += `K</div>`;
                break;
            case "Dame":
                write += `D</div>`;
                break;
            case "Bube":
                write += `B</div>`;
                break;
            case "10":
                write += `10</div>`;
                break;
            case "9":
                write += `9</div>`;
                break;
            case "8":
                write += `8</div>`;
                break;
            case "7":
                write += `7</div>`;
                break;
            default:
                console.log("Error")
        }
        write += `</div>`
        document.getElementById("handKartenSpieler").innerHTML += `${write}`;
    }
}


function init() {
    spielStarten();
}

document.addEventListener("DOMContentLoaded", init);