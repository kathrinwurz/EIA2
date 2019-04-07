/* Aufgabe: Aufgabe 11 - Shopping Clauses
   Name: Kathrin Wurz
   Matrikel: 260742
   Datum: 07.04.2019
   Der Code wurde in Zusammenarbeit mit Bastian Culig, Lisa Sanchez y Bittner, Carlotta Reinders, Daniel Mainberger und Marvin Kübler erstellt. */
/*Ass*/
let herzAss = {
    symbol: "♥",
    wert: "Ass",
    imSpiel: true
};
let karoAss = {
    symbol: "♦",
    wert: "Ass",
    imSpiel: true
};
let kreuzAss = {
    symbol: "♣",
    wert: "Ass",
    imSpiel: true
};
let pikAss = {
    symbol: "♠",
    wert: "Ass",
    imSpiel: true
};
/*König*/
let herzKoenig = {
    symbol: "♥",
    wert: "Koenig",
    imSpiel: true
};
let karoKoenig = {
    symbol: "♦",
    wert: "Koenig",
    imSpiel: true
};
let kreuzKoenig = {
    symbol: "♣",
    wert: "Koenig",
    imSpiel: true
};
let pikKoenig = {
    symbol: "♠",
    wert: "Koenig",
    imSpiel: true
};
/*Dame*/
let herzDame = {
    symbol: "♥",
    wert: "Dame",
    imSpiel: true
};
let karoDame = {
    symbol: "♦",
    wert: "Dame",
    imSpiel: true
};
let kreuzDame = {
    symbol: "♣",
    wert: "Dame",
    imSpiel: true
};
let pikDame = {
    symbol: "♠",
    wert: "Dame",
    imSpiel: true
};
/*Bube*/
let herzBube = {
    symbol: "♥",
    wert: "Bube",
    imSpiel: true
};
let karoBube = {
    symbol: "♦",
    wert: "Bube",
    imSpiel: true
};
let kreuzBube = {
    symbol: "♣",
    wert: "Bube",
    imSpiel: true
};
let pikBube = {
    symbol: "♠",
    wert: "Bube",
    imSpiel: true
};
/*10*/
let herzZehn = {
    symbol: "♥",
    wert: "10",
    imSpiel: true
};
let karoZehn = {
    symbol: "♦",
    wert: "10",
    imSpiel: true
};
let kreuzZehn = {
    symbol: "♣",
    wert: "10",
    imSpiel: true
};
let pikZehn = {
    symbol: "♠",
    wert: "10",
    imSpiel: true
};
/*9*/
let herzNeun = {
    symbol: "♥",
    wert: "9",
    imSpiel: true
};
let karoNeun = {
    symbol: "♦",
    wert: "9",
    imSpiel: true
};
let kreuzNeun = {
    symbol: "♣",
    wert: "9",
    imSpiel: true
};
let pikNeun = {
    symbol: "♠",
    wert: "9",
    imSpiel: true
};
/*8*/
let herzAcht = {
    symbol: "♥",
    wert: "8",
    imSpiel: true
};
let karoAcht = {
    symbol: "♦",
    wert: "8",
    imSpiel: true
};
let kreuzAcht = {
    symbol: "♣",
    wert: "8",
    imSpiel: true
};
let pikAcht = {
    symbol: "♠",
    wert: "8",
    imSpiel: true
};
/*7*/
let herzSieben = {
    symbol: "♥",
    wert: "7",
    imSpiel: true
};
let karoSieben = {
    symbol: "♦",
    wert: "7",
    imSpiel: true
};
let kreuzSieben = {
    symbol: "♣",
    wert: "7",
    imSpiel: true
};
let pikSieben = {
    symbol: "♠",
    wert: "7",
    imSpiel: true
};
/*Arrays Kartendeck + Handkarten*/
let kartenDeck = [herzAss, karoAss, kreuzAss, pikAss, herzKoenig, karoKoenig, kreuzKoenig, pikKoenig, herzDame, karoDame, kreuzDame, pikDame, herzBube, karoBube, kreuzBube, pikBube, herzZehn, karoZehn, kreuzZehn, pikZehn, herzNeun, karoNeun, kreuzNeun, pikNeun, herzAcht, karoAcht, kreuzAcht, pikAcht, herzSieben, karoSieben, kreuzSieben, pikSieben];
let handKarten = [];
let obereKarte;
/*Fenster öffnen, Abfrage für Anzahl der Handkarten*/
function spielStarten() {
    let anzahlHandkarten = 0;
    do {
        anzahlHandkarten = parseInt(prompt("Wie viele Karten möchtest du? Gib eine Zahl zwischen 4 und 6 ein."));
    } while (isNaN(anzahlHandkarten) || anzahlHandkarten > 6 || anzahlHandkarten < 4); //Wird so oft wiederholt, bis die Eingabe eine Zahl zwischen 4 und 6 ist. "isNaN" bedeutet "Is Not a Number"
    console.log("Handkarten: " + anzahlHandkarten);
    for (let i = 0; i < anzahlHandkarten; i++) {
        anzeigeKarten();
    }
    console.log(handKarten);
    nachziehStapelErstellen();
    auflegeStapelErstellen();
    handKartenErstellen();
}
function anzeigeKarten() {
    let aktuelleKarte = Math.floor(Math.random() * 31);
    while (kartenDeck[aktuelleKarte].imSpiel == false) {
        aktuelleKarte = Math.floor(Math.random() * 31);
    }
    handKarten[handKarten.length] = kartenDeck[aktuelleKarte];
    kartenDeck[aktuelleKarte].imSpiel = false;
}
/*Funktion Nachziehstapel*/
function nachziehStapelErstellen() {
    document.getElementById("nachziehStapel").innerHTML = `<div class="stylingKarten">
    <img src="img/kartenruecken.jpeg" class="rueckseite">
    </div>`;
}
/*Funktion zum generieren des Auflegestapels*/
function auflegeStapelErstellen() {
    let aktuelleKarte = Math.floor(Math.random() * 31); //Zufällige Zahl zwischen 0 und 31
    while (kartenDeck[aktuelleKarte].imSpiel == false) //Falls die nte Karte nicht im Deck ist: versuche es nochmal
     {
        aktuelleKarte = Math.floor(Math.random() * 31);
    }
    obereKarte = kartenDeck[aktuelleKarte]; //Karte im Deck wird der Hand hinzugefügt.
    kartenDeck[aktuelleKarte].imSpiel = false; //Karte ist nicht mehr im Deck dannach.
    let write = "";
    write += `<div class="stylingKarten">`;
    switch (obereKarte.symbol) {
        case "♥":
            write += "<div class='rot' class='sytlingSymbol'>♥";
            break;
        case "♦":
            write += "<div class='rot' class='stylingSymbol'>♦";
            break;
        case "♣":
            write += "<div class='schwarz' class='stylingSymbol'>♣";
            break;
        case "♠":
            write += "<div class='schwarz' class='stylingSymbol'>♠";
            break;
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
    }
    write += `</div>`;
    document.getElementById("auflegeStapel").innerHTML = `${write}`;
}
/*Funktion zum generieren der Handkarten*/
function handKartenErstellen() {
    document.getElementById("handKartenSpieler").innerHTML = "";
    for (var i = 0; i < handKarten.length; i++) {
        let write = "";
        write += `<div class="stylingKarten">`;
        switch (handKarten[i].symbol) {
            case "♥":
                write += "<div class='rot' class='stylingSymbol'>♥";
                break;
            case "♦":
                write += "<div class='rot' class='stylingSymbol'>♦";
                break;
            case "♣":
                write += "<div class='schwarz' class='stylingSymbol'>♣";
                break;
            case "♠":
                write += "<div class='schwarz' class='stylingSymbol'>♠";
                break;
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
        }
        write += `</div>`;
        document.getElementById("handKartenSpieler").innerHTML += `${write}`;
    }
}
function init() {
    spielStarten();
}
document.addEventListener("DOMContentLoaded", init);
//# sourceMappingURL=main.js.map