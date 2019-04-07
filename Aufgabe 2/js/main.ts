/* Aufgabe: Aufgabe 11 - Shopping Clauses
   Name: Kathrin Wurz
   Matrikel: 260742
   Datum: 07.04.2019
   Der Code wurde in Zusammenarbeit mit Bastian Culig, Lisa Sanchez y Bittner, Carlotta Reinders, Daniel Mainberger und Marvin Kübler erstellt. */




interface Karten {
    symbol: string;
    wert: string;
    imSpiel: boolean;

}

/*Ass*/
let herzAss: Karten = {
    symbol: "♥",
    wert: "Ass",
    imSpiel: true
}

let karoAss: Karten = {
    symbol: "♦",
    wert: "Ass",
    imSpiel: true
}

let kreuzAss: Karten = {
    symbol: "♣",
    wert: "Ass",
    imSpiel: true
}

let pikAss: Karten = {
    symbol: "♠",
    wert: "Ass",
    imSpiel: true
}

/*König*/
let herzKoenig: Karten = {
    symbol: "♥",
    wert: "Koenig",
    imSpiel: true
}

let karoKoenig: Karten = {
    symbol: "♦",
    wert: "Koenig",
    imSpiel: true
}

let kreuzKoenig: Karten = {
    symbol: "♣",
    wert: "Koenig",
    imSpiel: true
}

let pikKoenig: Karten = {
    symbol: "♠",
    wert: "Koenig",
    imSpiel: true
}

/*Dame*/
let herzDame: Karten = {
    symbol: "♥",
    wert: "Dame",
    imSpiel: true
}

let karoDame: Karten = {
    symbol: "♦",
    wert: "Dame",
    imSpiel: true
}

let kreuzDame: Karten = {
    symbol: "♣",
    wert: "Dame",
    imSpiel: true
}

let pikDame: Karten = {
    symbol: "♠",
    wert: "Dame",
    imSpiel: true
}

/*Bube*/
let herzBube: Karten = {
    symbol: "♥",
    wert: "Bube",
    imSpiel: true
}

let karoBube: Karten = {
    symbol: "♦",
    wert: "Bube",
    imSpiel: true
}

let kreuzBube: Karten = {
    symbol: "♣",
    wert: "Bube",
    imSpiel: true
}

let pikBube: Karten = {
    symbol: "♠",
    wert: "Bube",
    imSpiel: true
}

/*10*/
let herzZehn: Karten = {
    symbol: "♥",
    wert: "10",
    imSpiel: true
}

let karoZehn: Karten = {
    symbol: "♦",
    wert: "10",
    imSpiel: true
}

let kreuzZehn: Karten = {
    symbol: "♣",
    wert: "10",
    imSpiel: true
}

let pikZehn: Karten = {
    symbol: "♠",
    wert: "10",
    imSpiel: true
}

/*9*/
let herzNeun: Karten = {
    symbol: "♥",
    wert: "9",
    imSpiel: true
}

let karoNeun: Karten = {
    symbol: "♦",
    wert: "9",
    imSpiel: true
}

let kreuzNeun: Karten = {
    symbol: "♣",
    wert: "9",
    imSpiel: true
}

let pikNeun: Karten = {
    symbol: "♠",
    wert: "9",
    imSpiel: true
}

/*8*/
let herzAcht: Karten = {
    symbol: "♥",
    wert: "8",
    imSpiel: true
}

let karoAcht: Karten = {
    symbol: "♦",
    wert: "8",
    imSpiel: true
}

let kreuzAcht: Karten = {
    symbol: "♣",
    wert: "8",
    imSpiel: true
}

let pikAcht: Karten = {
    symbol: "♠",
    wert: "8",
    imSpiel: true
}

/*7*/
let herzSieben: Karten = {
    symbol: "♥",
    wert: "7",
    imSpiel: true
}

let karoSieben: Karten = {
    symbol: "♦",
    wert: "7",
    imSpiel: true
}

let kreuzSieben: Karten = {
    symbol: "♣",
    wert: "7",
    imSpiel: true
}

let pikSieben: Karten = {
    symbol: "♠",
    wert: "7",
    imSpiel: true
}


/*Arrays Kartendeck + Handkarten*/

let kartenDeck:Karten[]=[herzAss,karoAss,kreuzAss,pikAss,herzKoenig,karoKoenig,kreuzKoenig,pikKoenig,herzDame,karoDame,kreuzDame,pikDame,herzBube,karoBube,kreuzBube,pikBube,herzZehn,karoZehn,kreuzZehn,pikZehn,herzNeun,karoNeun,kreuzNeun,pikNeun,herzAcht,karoAcht,kreuzAcht,pikAcht,herzSieben,karoSieben,kreuzSieben,pikSieben];
let handKarten:Karten[]=[];
let obereKarte:Karten;



/*Fenster öffnen, Abfrage für Anzahl der Handkarten*/
function spielStarten() {
    let anzahlHandkarten: number = 0;
    do  
        {
        anzahlHandkarten = parseInt(prompt("Wie viele Karten möchtest du? Gib eine Zahl zwischen 4 und 6 ein."));
        } 
    while (isNaN(anzahlHandkarten) || anzahlHandkarten > 6 || anzahlHandkarten < 4); //Wird so oft wiederholt, bis die Eingabe eine Zahl zwischen 4 und 6 ist. "isNaN" bedeutet "Is Not a Number"

    console.log("Handkarten: "+anzahlHandkarten);

    for(let i:number=0;i<anzahlHandkarten;i++){
        anzeigeKarten();
    }
    console.log(handKarten);

    nachziehStapelErstellen();
    auflegeStapelErstellen();
    handKartenErstellen();
    
}


function anzeigeKarten() {
    let aktuelleKarte: number = Math.floor(Math.random() * 31);
    while (kartenDeck[aktuelleKarte].imSpiel==false) {
        aktuelleKarte = Math.floor(Math.random() * 31)
    }
    handKarten[handKarten.length]=kartenDeck[aktuelleKarte];
    kartenDeck[aktuelleKarte].imSpiel = false;
}

/*Funktion Nachziehstapel*/
function nachziehStapelErstellen(){
    document.getElementById("nachziehStapel").innerHTML = `<div class="stylingKarten">
    <img src="img/kartenruecken.jpeg" class="rueckseite">
    </div>`;     
}

/*Funktion zum generieren des Auflegestapels*/
function auflegeStapelErstellen(){
    let aktuelleKarte:number = Math.floor(Math.random() * 31); //Zufällige Zahl zwischen 0 und 31
    while (kartenDeck[aktuelleKarte].imSpiel==false)   //Falls die nte Karte nicht im Deck ist: versuche es nochmal
        {
            aktuelleKarte = Math.floor(Math.random() * 31);
        }
    obereKarte=kartenDeck[aktuelleKarte]; //Karte im Deck wird der Hand hinzugefügt.
    kartenDeck[aktuelleKarte].imSpiel = false;    //Karte ist nicht mehr im Deck dannach.
    
    let write:string = "";
        write += `<div class="stylingKarten">`;

        switch (obereKarte.symbol){
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

        switch (obereKarte.wert){
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
            write += `</div>`
    document.getElementById("auflegeStapel").innerHTML = `${write}`;     
}


/*Funktion zum generieren der Handkarten*/
function handKartenErstellen(){

    document.getElementById("handKartenSpieler").innerHTML = "";

    for (var i: number = 0; i < handKarten.length; i++){
        let write:string = "";
        write += `<div class="stylingKarten">`;

        switch (handKarten[i].symbol){
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

        switch (handKarten[i].wert){
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
            write += `</div>`
        document.getElementById("handKartenSpieler").innerHTML += `${write}`;
    }       
}


function init() {
    spielStarten();
}

document.addEventListener("DOMContentLoaded", init);