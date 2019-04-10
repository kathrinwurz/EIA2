/* Aufgabe: Aufgabe 2 - Mau Mau
    Name: Kathrin Wurz
    Matrikel: 260742
    Datum: 07.04.2019
    Der Code wurde in Zusammenarbeit mit Bastian Culig, Lisa Sanchez y Bittner, Carlotta Reinders, Daniel Mainberger und Marvin Kübler erstellt. */
/*Ass*/
let herzAss = {
    symbol: "♥",
    wert: "Ass"
};
let karoAss = {
    symbol: "♦",
    wert: "Ass"
};
let kreuzAss = {
    symbol: "♣",
    wert: "Ass"
};
let pikAss = {
    symbol: "♠",
    wert: "Ass"
};
/*König*/
let herzKoenig = {
    symbol: "♥",
    wert: "Koenig"
};
let karoKoenig = {
    symbol: "♦",
    wert: "Koenig"
};
let kreuzKoenig = {
    symbol: "♣",
    wert: "Koenig"
};
let pikKoenig = {
    symbol: "♠",
    wert: "Koenig"
};
/*Dame*/
let herzDame = {
    symbol: "♥",
    wert: "Dame"
};
let karoDame = {
    symbol: "♦",
    wert: "Dame"
};
let kreuzDame = {
    symbol: "♣",
    wert: "Dame"
};
let pikDame = {
    symbol: "♠",
    wert: "Dame"
};
/*Bube*/
let herzBube = {
    symbol: "♥",
    wert: "Bube"
};
let karoBube = {
    symbol: "♦",
    wert: "Bube"
};
let kreuzBube = {
    symbol: "♣",
    wert: "Bube"
};
let pikBube = {
    symbol: "♠",
    wert: "Bube"
};
/*10*/
let herzZehn = {
    symbol: "♥",
    wert: "10"
};
let karoZehn = {
    symbol: "♦",
    wert: "10"
};
let kreuzZehn = {
    symbol: "♣",
    wert: "10"
};
let pikZehn = {
    symbol: "♠",
    wert: "10"
};
/*9*/
let herzNeun = {
    symbol: "♥",
    wert: "9"
};
let karoNeun = {
    symbol: "♦",
    wert: "9"
};
let kreuzNeun = {
    symbol: "♣",
    wert: "9"
};
let pikNeun = {
    symbol: "♠",
    wert: "9"
};
/*8*/
let herzAcht = {
    symbol: "♥",
    wert: "8"
};
let karoAcht = {
    symbol: "♦",
    wert: "8"
};
let kreuzAcht = {
    symbol: "♣",
    wert: "8"
};
let pikAcht = {
    symbol: "♠",
    wert: "8"
};
/*7*/
let herzSieben = {
    symbol: "♥",
    wert: "7"
};
let karoSieben = {
    symbol: "♦",
    wert: "7"
};
let kreuzSieben = {
    symbol: "♣",
    wert: "7"
};
let pikSieben = {
    symbol: "♠",
    wert: "7"
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
        zieheKarten();
    }
    console.log(handKarten);
    nachziehStapelErstellen();
    auflegeStapelErstellen();
    handKartenErstellen();
}
function zieheKarten() {
    let aktuelleKarte = Math.floor(Math.random() * (kartenDeck.length - 1));
    handKarten.push(kartenDeck[aktuelleKarte]);
    kartenDeck.splice(aktuelleKarte, 1);
}
/*Funktion Nachziehstapel*/
function nachziehStapelErstellen() {
    document.getElementById("nachziehStapel").innerHTML = `<div class="StylingKarten">
    <img src="img/kartenruecken.jpeg" class="rueckseite">
    </div>`;
}
/*Funktion zum generieren des Auflegestapels*/
function auflegeStapelErstellen() {
    let aktuelleKarte = Math.floor(Math.random() * (kartenDeck.length - 1));
    obereKarte = kartenDeck[aktuelleKarte];
    kartenDeck.splice(aktuelleKarte, 1);
    let write = "";
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
            console.log("Error");
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
            console.log("Error");
    }
    write += `</div>`;
    document.getElementById("auflegeStapel").innerHTML = `${write}`;
}
/*Funktion zum generieren der Handkarten*/
function handKartenErstellen() {
    document.getElementById("handKartenSpieler").innerHTML = "";
    for (var i = 0; i < handKarten.length; i++) {
        let write = "";
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
                console.log("Error");
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
                console.log("Error");
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