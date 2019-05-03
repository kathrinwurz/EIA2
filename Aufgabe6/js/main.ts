/* Aufgabe: Aufgabe 6: Erster Node Server
    Name: Kathrin Wurz
    Matrikel: 260742
    Datum: 03.05.2019
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
    Er wurde nicht kopiert und auch nicht diktiert.*/



namespace aufgabe6 {

    window.addEventListener("load", init);

    let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
    let legend: HTMLLegendElement = document.createElement("legend");

    function init(_event: Event): void {

        elemente(sortimentArray);

        document.getElementById("buttonID").addEventListener("click", bestellungPruefen);
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", bestellUebersicht);
        }
    }



/* Elemente erstellen */ 

    function elemente(daten: KeyArray): void {
        document.getElementById("formID").appendChild(fieldset);
        legend.innerHTML = "Unser Sortiment (je Kugel & Topping 1,00€ - Becher/Waffel gratis)";
        fieldset.appendChild(legend);
        for (let datenArray in daten) {
            let value: EisdealerDaten[] = daten[datenArray];
            for (let i: number = 0; i < value.length; i++)
                elementeErstellen(value[i]);
        }
    }


    function elementeErstellen(sortimentAuswahl: EisdealerDaten): void {
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
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

        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }





    /*Funktion Bestellübersicht + Gesamtsumme*/

    function bestellUebersicht(_event: Event): void {
        let startSumme: number = 0;
        let bestellEingabe: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("eisUndToppingID").innerHTML = " ";
        document.getElementById("gesamtSummeID").innerHTML = " ";
        document.getElementById("behaelterID").innerHTML = " ";
        document.getElementById("lieferungID").innerHTML = " ";


        for (let i: number = 0; i < bestellEingabe.length; i++) {


            if (bestellEingabe[i].type == "number" && Number(bestellEingabe[i].value) > 0) {
                let gesamtPreis: number = Number(bestellEingabe[i].value);
                startSumme += gesamtPreis;
                document.getElementById("gesamtSummeID").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let auswahl: HTMLElement = document.createElement("li");
                auswahl.innerHTML = `${bestellEingabe[i].value} x ${bestellEingabe[i].name}`;
                document.getElementById("eisUndToppingID").appendChild(auswahl);
            }

            if (bestellEingabe[i].checked == true && bestellEingabe[i].getAttribute("name") == "radiobutton") {
                document.getElementById("gesamtSummeID").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let behaelterWahl: HTMLElement = document.createElement("li");
                behaelterWahl.innerHTML = `${bestellEingabe[i].getAttribute("id")}`;
                document.getElementById("behaelterID").appendChild(behaelterWahl);
            }

            if (bestellEingabe[i].checked == true && bestellEingabe[i].name == "lieferung") {
                let gesamtPreis: number = Number(bestellEingabe[i].getAttribute("preis"));
                startSumme += gesamtPreis;
                document.getElementById("gesamtSummeID").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let lieferWahl: HTMLElement = document.createElement("li");
                lieferWahl.innerHTML = `${bestellEingabe[i].getAttribute("id")}`;
                document.getElementById("lieferungID").appendChild(lieferWahl);
            }
            
        }
    }


/*Funktion zum Überprüfen der Bestellung*/ 

function bestellungPruefen(_event: Event): void {
    let kundenDaten: string[] = [];
    let kundenEingabe: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    let lieferungFehlt: number = 0;
    let eisToppingFehlt: number = 0;
    let behaelterFehlt: number = 0;
    for (let i: number = 0; i < kundenEingabe.length; i++) {  
        if (kundenEingabe[i].value == "") {
            let benoetigteDaten: string = kundenEingabe[i].name;
            kundenDaten.push(benoetigteDaten);
        }
        if (kundenEingabe[i].type == "checkbox" && kundenEingabe[i].checked == true) {
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
        alert("Bitte noch eine Lieferoption wählen.👇🏻")
    }
    if (eisToppingFehlt == 0) {
        alert("Bitte noch ein Eis/Topping wählen.👇🏻")
    }
    if (behaelterFehlt == 0) {
        alert("Bitte noch einen Behälter wählen.👇🏻")
    }
    if (kundenDaten.length == 0) {
        alert("Danke für deine Bestellung! 👍🏻");
    }
    else {
        alert(`${kundenDaten} fehlt. Bitte noch ausfüllen.👇🏻`);
    }
}
}
