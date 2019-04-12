/* Aufgabe: Aufgabe 3: Mau Mau interaktiv
    Name: Kathrin Wurz
    Matrikel: 260742
    Datum: 13.04.2019 */
/*Ass*/
let herzAss = {
    symbol: 1,
    wert: 14,
    position: "nichts"
};
let karoAss = {
    symbol: 2,
    wert: 14,
    position: "nichts"
};
let kreuzAss = {
    symbol: 3,
    wert: 14,
    position: "nichts"
};
let pikAss = {
    symbol: 4,
    wert: 14,
    position: "nichts"
};
/*König*/
let herzKoenig = {
    symbol: 1,
    wert: 13,
    position: "nichts"
};
let karoKoenig = {
    symbol: 2,
    wert: 13,
    position: "nichts"
};
let kreuzKoenig = {
    symbol: 3,
    wert: 13,
    position: "nichts"
};
let pikKoenig = {
    symbol: 4,
    wert: 13,
    position: "nichts"
};
/*Dame*/
let herzDame = {
    symbol: 1,
    wert: 12,
    position: "nichts"
};
let karoDame = {
    symbol: 2,
    wert: 12,
    position: "nichts"
};
let kreuzDame = {
    symbol: 3,
    wert: 12,
    position: "nichts"
};
let pikDame = {
    symbol: 4,
    wert: 12,
    position: "nichts"
};
/*Bube*/
let herzBube = {
    symbol: 1,
    wert: 11,
    position: "nichts"
};
let karoBube = {
    symbol: 2,
    wert: 11,
    position: "nichts"
};
let kreuzBube = {
    symbol: 3,
    wert: 11,
    position: "nichts"
};
let pikBube = {
    symbol: 4,
    wert: 11,
    position: "nichts"
};
/*10*/
let herzZehn = {
    symbol: 1,
    wert: 10,
    position: "nichts"
};
let karoZehn = {
    symbol: 2,
    wert: 10,
    position: "nichts"
};
let kreuzZehn = {
    symbol: 3,
    wert: 10,
    position: "nichts"
};
let pikZehn = {
    symbol: 4,
    wert: 10,
    position: "nichts"
};
/*9*/
let herzNeun = {
    symbol: 1,
    wert: 9,
    position: "nichts"
};
let karoNeun = {
    symbol: 2,
    wert: 9,
    position: "nichts"
};
let kreuzNeun = {
    symbol: 3,
    wert: 9,
    position: "nichts"
};
let pikNeun = {
    symbol: 4,
    wert: 9,
    position: "nichts"
};
/*8*/
let herzAcht = {
    symbol: 1,
    wert: 8,
    position: "nichts"
};
let karoAcht = {
    symbol: 2,
    wert: 8,
    position: "nichts"
};
let kreuzAcht = {
    symbol: 3,
    wert: 8,
    position: "nichts"
};
let pikAcht = {
    symbol: 4,
    wert: 8,
    position: "nichts"
};
/*7*/
let herzSieben = {
    symbol: 1,
    wert: 7,
    position: "nichts"
};
let karoSieben = {
    symbol: 2,
    wert: 7,
    position: "nichts"
};
let kreuzSieben = {
    symbol: 3,
    wert: 7,
    position: "nichts"
};
let pikSieben = {
    symbol: 4,
    wert: 7,
    position: "nichts"
};
/*Arrays Nachziehstapel + Handkarten + Auflegestapel*/
let nachziehStapelArray = [herzAss, karoAss, kreuzAss, pikAss, herzKoenig, karoKoenig, kreuzKoenig, pikKoenig, herzDame, karoDame, kreuzDame, pikDame, herzBube, karoBube, kreuzBube, pikBube, herzZehn, karoZehn, kreuzZehn, pikZehn, herzNeun, karoNeun, kreuzNeun, pikNeun, herzAcht, karoAcht, kreuzAcht, pikAcht, herzSieben, karoSieben, kreuzSieben, pikSieben];
let handKartenArray = [];
let auflegeStapelArray = [];
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
    nachziehStapelErstellen();
    let aktuelleKarte = Math.floor(Math.random() * (nachziehStapelArray.length));
    obereKarte = nachziehStapelArray[aktuelleKarte];
    nachziehStapelArray.splice(aktuelleKarte, 1);
    auflegeStapelErstellen();
    document.getElementById("sortieren").addEventListener("click", kartenSortieren);
    handKartenErstellen();
}
function zieheKarten() {
    if (nachziehStapelArray.length > 0) {
        let aktuelleKarte = Math.floor(Math.random() * (nachziehStapelArray.length));
        handKartenArray.push(nachziehStapelArray[aktuelleKarte]);
        nachziehStapelArray.splice(aktuelleKarte, 1); /*splice = 1. wie vielte Stelle im Array, 2. wie viele Elemente im Array werden entfernt, 3. was wird an dieser Stelle beigefügt
                                                    -> Karte wird rausgeschmissen)*/
        handKartenErstellen();
    }
    else {
        alert("Der Nachziehstapel ist leer.");
    }
}
/*Funktion Nachziehstapel*/
function nachziehStapelErstellen() {
    document.getElementById("nachziehStapel").addEventListener("click", zieheKarten); //Klick-Event auf dem Nachziehstapel, führt Funktion zieheKarten aus 
    document.getElementById("nachziehStapel").innerHTML = `<div class="StylingKarten">
    <img src="img/kartenruecken.jpeg" class="rueckseite">
    </div>`;
}
/*Funktion zum generieren des Auflegestapels ---> Ablage*/
function auflegeStapelErstellen() {
    let write = "";
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
            console.log("Error");
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
            console.log("Error");
    }
    write += `</div>`;
    document.getElementById("auflegeStapel").innerHTML = `${write}`;
}
/*Funktion zum generieren der Handkarten*/
function handKartenErstellen() {
    document.getElementById("handKartenSpieler").addEventListener("click", karteAusspielen);
    document.getElementById("handKartenSpieler").innerHTML = "";
    for (let i = 0; i < handKartenArray.length; i++) {
        handKartenArray[i].position = "position" + i;
        let write = "";
        write += `<div class="StylingKarten" id="position${i}">`;
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
                console.log("Error");
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
                console.log("Error");
        }
        write += `</div>`;
        document.getElementById("handKartenSpieler").innerHTML += `${write}`;
    }
}
/*Funktion für das Ausspielen einer Karte */
function karteAusspielen() {
    let idAusgewählteKarte = event.target;
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
                alert("Diese Karte kann nicht ausgespielt werden.");
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
function nachWertSortieren(karte1, karte2) {
    let wertKarte1 = karte1.wert;
    let wertKarte2 = karte2.wert;
    if (wertKarte1 < wertKarte2)
        return -1; // sort-Funktion macht "nichts", schiebt es um -1 vor die zu vergleichende Karte 
    if (wertKarte1 > wertKarte2)
        return 1; // sort-Funktion tauscht die Karten, schiebt es um 1 vor die zu vergleichende Karte 
    if (wertKarte1 == wertKarte2)
        return 0; //sort-Funktion macht nichts
}
/*Nach Symbol sortieren*/
function nachSymbolSortieren(karte1, karte2) {
    let symbolKarte1 = karte1.symbol;
    let symbolKarte2 = karte2.symbol;
    if (symbolKarte1 < symbolKarte2)
        return -1; // sort-Funktion macht "nichts", schiebt es um -1 vor die zu vergleichende Karte 
    if (symbolKarte1 > symbolKarte2)
        return 1; // sort-Funktion tauscht die Karten, schiebt es um 1 vor die zu vergleichende Karte 
    if (symbolKarte1 == symbolKarte2)
        return 0; //sort-Funktion macht nichts
}
/* Beim Drücken der Leertaste wird eine Karte vom Stapel gezogen */
function leertaste(event) {
    if (event.keyCode == 32)
        zieheKarten();
}
document.addEventListener("DOMContentLoaded", init);
document.addEventListener("keydown", leertaste);
function init() {
    spielStarten();
}
//# sourceMappingURL=main.js.map