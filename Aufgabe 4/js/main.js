/*Aufgabe: Aufgabe 4: Eisdealer
           Name: Kathrin Wurz
           Matrikel: 260742
           Datum: 21.04.2019
           Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
           Er wurde nicht kopiert und auch nicht diktiert.--> */
var aufgabe4;
(function (aufgabe4) {
    window.addEventListener("load", init);
    function init(_event) {
        document.getElementById("button").addEventListener("click", bestellungPruefen);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellZusammenfassung);
        }
    }
    /*Funktion Auflistung der Bestellung + Bestellsumme */
    function bestellZusammenfassung(_event) {
        let startSumme = 0;
        let bestellEingabe = document.getElementsByTagName("input");
        document.getElementById("uebersicht").innerHTML = "";
        for (let i = 0; i < bestellEingabe.length; i++) {
            if (bestellEingabe[i].checked == true) {
                let gesamtPreis = Number(bestellEingabe[i].value);
                startSumme += gesamtPreis;
                document.getElementById("preis").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let bestellUebersicht = document.createElement("li");
                bestellUebersicht.innerHTML = `${bestellEingabe[i].id}`;
                document.getElementById("uebersicht").appendChild(bestellUebersicht);
            }
        }
    }
    /*Funktion zum Prüfen fehlender Eingaben */
    function bestellungPruefen(_event) {
        let kundenDaten = [];
        let kundenEingabe = document.getElementsByTagName("input");
        for (let i = 0; i < kundenEingabe.length; i++) {
            if (kundenEingabe[i].value == "") {
                let benoetigteDaten = kundenEingabe[i].name;
                kundenDaten.push(benoetigteDaten);
            }
        }
        if (kundenDaten.length == 0) {
            alert("Danke für deine Bestellung!");
        }
        else {
            alert(`${kundenDaten} fehlt. Bitte fülle die fehlenden Fehler aus.`);
        }
    }
})(aufgabe4 || (aufgabe4 = {}));
//# sourceMappingURL=main.js.map