/*Aufgabe: Aufgabe 4: Eisdealer
           Name: Kathrin Wurz
           Matrikel: 260742
           Datum: 21.04.2019 
           Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
           Er wurde nicht kopiert und auch nicht diktiert.--> */



namespace aufgabe4 {

    window.addEventListener("load", init);

    function init(_event: Event): void {

        document.getElementById("button").addEventListener("click", bestellungPruefen);

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", bestellZusammenfassung);
        }
    }



    /*Funktion Auflistung der Bestellung + Bestellsumme */

    function bestellZusammenfassung(_event: Event): void {
        let startSumme: number = 0;
        let bestellEingabe: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("uebersicht").innerHTML = "";
        for (let i: number = 0; i < bestellEingabe.length; i++) {
            if (bestellEingabe[i].checked == true) {
                let gesamtPreis: number = Number(bestellEingabe[i].value)
                startSumme += gesamtPreis;
                document.getElementById("preis").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let bestellUebersicht = document.createElement("li");
                bestellUebersicht.innerHTML = `${bestellEingabe[i].id}`
                document.getElementById("uebersicht").appendChild(bestellUebersicht)
            }
        }
    }






    /*Funktion zum Prüfen fehlender Eingaben */

    function bestellungPruefen(_event: Event): void {
        let kundenDaten: string[] = [];
        let kundenEingabe: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < kundenEingabe.length; i++) {
            if (kundenEingabe[i].value == "") {
                let benoetigteDaten: string = kundenEingabe[i].name;
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

} 