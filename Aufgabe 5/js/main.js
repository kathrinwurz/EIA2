/* Aufgabe: Aufgabe 5: Eisdealer re-loaded
    Name: Kathrin Wurz
    Matrikel: 260742
    Datum: 28.04.2019
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    Er wurde nicht kopiert und auch nicht diktiert.*/
var aufgabe5;
(function (aufgabe5) {
    window.addEventListener("load", init);
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    function init(_event) {
        elemente(aufgabe5.sortimentArray);
        document.getElementById("buttonID").addEventListener("click", bestellungPruefen);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellUebersicht);
        }
    }
    /* Elemente erstellen */
    function elemente(daten) {
        document.body.appendChild(fieldset);
        legend.innerHTML = "Unser Sortiment (je Kugel & Topping 1,00€ - Becher/Waffel gratis)";
        fieldset.appendChild(legend);
        for (let datenArray in daten) {
            let value = daten[datenArray];
            for (let i = 0; i < value.length; i++)
                elementeErstellen(value[i]);
        }
    }
    function elementeErstellen(sortimentAuswahl) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.setAttribute("for", sortimentAuswahl.bezeichnung);
        label.innerHTML = sortimentAuswahl.bezeichnung;
        if (sortimentAuswahl.inputtype == "radio") {
            input.setAttribute("type", sortimentAuswahl.inputtype);
            input.setAttribute("name", "radiobutton");
            input.setAttribute("preis", "0");
            input.setAttribute("id", sortimentAuswahl.bezeichnung);
        }
        if (sortimentAuswahl.inputtype == "number") {
            input.setAttribute("type", sortimentAuswahl.inputtype);
            input.setAttribute("name", sortimentAuswahl.bezeichnung);
            input.setAttribute("step", "1");
            input.setAttribute("min", "0");
            input.setAttribute("max", "10");
            input.setAttribute("value", "0");
            input.setAttribute("preis", "1");
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }
    /*Funktion Bestellübersicht + Gesamtsumme*/
    function bestellUebersicht(_event) {
        let startSumme = 0;
        let bestellEingabe = document.getElementsByTagName("input");
        document.getElementById("eisUndToppingID").innerHTML = " ";
        document.getElementById("gesamtSummeID").innerHTML = " ";
        document.getElementById("behaelterID").innerHTML = " ";
        document.getElementById("lieferungID").innerHTML = " ";
        for (let i = 0; i < bestellEingabe.length; i++) {
            if (bestellEingabe[i].type == "number" && Number(bestellEingabe[i].value) > 0) {
                let gesamtPreis = Number(bestellEingabe[i].value);
                startSumme += gesamtPreis;
                document.getElementById("gesamtSummeID").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let auswahl = document.createElement("li");
                auswahl.innerHTML = `${bestellEingabe[i].value} x ${bestellEingabe[i].name}`;
                document.getElementById("eisUndToppingID").appendChild(auswahl);
            }
            if (bestellEingabe[i].checked == true && bestellEingabe[i].getAttribute("name") == "radiobutton") {
                document.getElementById("gesamtSummeID").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let behaelterWahl = document.createElement("li");
                behaelterWahl.innerHTML = `${bestellEingabe[i].getAttribute("id")}`;
                document.getElementById("behaelterID").appendChild(behaelterWahl);
            }
            if (bestellEingabe[i].checked == true && bestellEingabe[i].name == "lieferung") {
                let gesamtPreis = Number(bestellEingabe[i].getAttribute("value"));
                startSumme += gesamtPreis;
                document.getElementById("gesamtSummeID").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let lieferWahl = document.createElement("li");
                lieferWahl.innerHTML = `${bestellEingabe[i].getAttribute("id")}`;
                document.getElementById("lieferungID").appendChild(lieferWahl);
            }
        }
    }
    /*Funktion zum Überprüfen der Kundendaten */
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
            alert("Danke für deine Bestellung! 👍🏻");
        }
        else {
            alert(`${kundenDaten} fehlt. Bitte noch ausfüllen.👇🏻`);
        }
    }
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=main.js.map