/*  Aufgabe 7: Serverseitige Verarbeitung
    Name: Kathrin Wurz
    Matrikel: 260742
    Datum: 03.05.2019
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    Er wurde nicht kopiert und auch nicht diktiert.*/
var aufgabe7;
(function (aufgabe7) {
    window.addEventListener("load", init);
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    function init(_event) {
        elemente(aufgabe7.sortimentArray);
        document.getElementById("buttonID").addEventListener("click", bestellungPruefen);
        document.getElementById("buttonID").addEventListener("click", urlErstellen);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellUebersicht);
        }
    }
    /* Elemente erstellen */
    function elemente(daten) {
        document.body.appendChild(fieldset);
        legend.innerHTML = "Unser Sortiment (je Kugel 1,00€ / je Topping 0,80€ - Becher/Waffel gratis)";
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
            input.setAttribute("name", "Behaelter");
            input.setAttribute("preis", "0");
            input.setAttribute("id", sortimentAuswahl.bezeichnung);
            input.setAttribute("value", sortimentAuswahl.bezeichnung);
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
        if (sortimentAuswahl.inputtype == "checkbox") {
            input.setAttribute("type", sortimentAuswahl.inputtype);
            input.setAttribute("preis", "0.8");
            input.setAttribute("name", sortimentAuswahl.bezeichnung);
            input.setAttribute("value", "Jep");
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }
    /*Funktion Bestellübersicht + Gesamtsumme*/
    function bestellUebersicht(_event) {
        let startSumme = 0;
        let bestellEingabe = document.getElementsByTagName("input");
        document.getElementById("eisID").innerHTML = " ";
        document.getElementById("gesamtSummeID").innerHTML = " ";
        document.getElementById("behaelterID").innerHTML = " ";
        document.getElementById("lieferungID").innerHTML = " ";
        document.getElementById("toppingID").innerHTML = " ";
        for (let i = 0; i < bestellEingabe.length; i++) {
            if (bestellEingabe[i].type == "number" && Number(bestellEingabe[i].value) > 0) {
                let gesamtPreis = Number(bestellEingabe[i].value);
                startSumme += gesamtPreis;
                document.getElementById("gesamtSummeID").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let auswahl = document.createElement("li");
                auswahl.innerHTML = `${bestellEingabe[i].value} x ${bestellEingabe[i].name}`;
                document.getElementById("eisID").appendChild(auswahl);
            }
            if (bestellEingabe[i].checked == true && bestellEingabe[i].getAttribute("name") == "Behaelter") {
                document.getElementById("gesamtSummeID").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let behaelterWahl = document.createElement("li");
                behaelterWahl.innerHTML = `${bestellEingabe[i].getAttribute("id")}`;
                document.getElementById("behaelterID").appendChild(behaelterWahl);
            }
            if (bestellEingabe[i].checked == true && bestellEingabe[i].name == "Lieferauswahl") {
                let gesamtPreis = Number(bestellEingabe[i].getAttribute("preis"));
                startSumme += gesamtPreis;
                document.getElementById("gesamtSummeID").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let lieferWahl = document.createElement("li");
                lieferWahl.innerHTML = `${bestellEingabe[i].getAttribute("id")}`;
                document.getElementById("lieferungID").appendChild(lieferWahl);
            }
            if (bestellEingabe[i].checked == true && bestellEingabe[i].getAttribute("value") == "Jep") {
                let price = Number(bestellEingabe[i].getAttribute("preis"));
                startSumme += price;
                document.getElementById("gesamtSummeID").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let toppings = document.createElement("li");
                toppings.innerHTML = `${bestellEingabe[i].name}`;
                document.getElementById("toppingID").appendChild(toppings);
            }
        }
    }
    /*Funktion zum Überprüfen der Bestellung*/
    function bestellungPruefen(_event) {
        let kundenDaten = [];
        let kundenEingabe = document.getElementsByTagName("input");
        let lieferungFehlt = 0;
        let eisToppingFehlt = 0;
        let behaelterFehlt = 0;
        for (let i = 0; i < kundenEingabe.length; i++) {
            if (kundenEingabe[i].value == "") {
                let benoetigteDaten = kundenEingabe[i].name;
                kundenDaten.push(benoetigteDaten);
            }
            if (kundenEingabe[i].type == "radio" && kundenEingabe[i].checked == true) {
                lieferungFehlt = 1;
            }
            if (kundenEingabe[i].type == "number" && Number(kundenEingabe[i].value) > 0) {
                eisToppingFehlt = 1;
            }
            if (kundenEingabe[i].type == "radio" && kundenEingabe[i].checked == true) {
                behaelterFehlt = 1;
            }
        }
        if (lieferungFehlt == 0) {
            alert("Bitte noch eine Lieferoption wählen.👇🏻");
        }
        if (eisToppingFehlt == 0) {
            alert("Bitte noch ein Eis/Topping wählen.👇🏻");
        }
        if (behaelterFehlt == 0) {
            alert("Bitte noch einen Behälter wählen.👇🏻");
        }
        if (kundenDaten.length == 0) {
            alert("Danke für deine Bestellung! 👍🏻");
        }
        else {
            alert(`${kundenDaten} fehlt. Bitte noch ausfüllen.👇🏻`);
        }
    }
    function urlErstellen() {
        let kundenBestellung = document.getElementsByTagName("input");
        let url = "https://eia2-kathrin.herokuapp.com/?";
        for (let i = 0; i < kundenBestellung.length; i++) {
            if (kundenBestellung[i].name == "Lieferauswahl" && kundenBestellung[i].checked == true) {
                url += `${kundenBestellung[i].name}:${kundenBestellung[i].value}&`;
            }
            if (kundenBestellung[i].name == "Behaelter" && kundenBestellung[i].checked == true) {
                url += `${kundenBestellung[i].name}:${kundenBestellung[i].value}&`;
            }
            if (kundenBestellung[i].type == "number" && Number(kundenBestellung[i].value) > 0) {
                url += `${kundenBestellung[i].name}:${kundenBestellung[i].value}&`;
            }
            if (kundenBestellung[i].type == "checkbox" && kundenBestellung[i].checked == true) {
                url += `${kundenBestellung[i].name}:${kundenBestellung[i].value}&`;
            }
        }
        sendRequestWithCustomData(url);
    }
    function sendRequestWithCustomData(_url) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", _url, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("serverID").innerHTML = xhr.response;
        }
    }
})(aufgabe7 || (aufgabe7 = {}));
//# sourceMappingURL=main.js.map