/* Aufgabe: AAufgabe 6: Erster Node Server
    Name: Kathrin Wurz
    Matrikel: 260742
    Datum: 03.05.2019
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
     Er wurde nicht kopiert und auch nicht diktiert.*/


namespace aufgabe6 {

    export interface EisdealerDaten {
        bezeichnung: string;
        preis: number;
        inputtype: string;
    }

    export interface KeyArray {
        [datenArray: string]: EisdealerDaten[];
    }

    export let sortimentArray: KeyArray = {
        "eisSorten": [
            { bezeichnung: "Vanille", preis: 1, inputtype: "number" },
            { bezeichnung: "Schokolade", preis: 1, inputtype: "number" },
            { bezeichnung: "Himbeere", preis: 1, inputtype: "number" },
            { bezeichnung: "Stracciatella", preis: 1, inputtype: "number" },
            { bezeichnung: "Mango", preis: 1, inputtype: "number" },
            { bezeichnung: "Haselnuss", preis: 1, inputtype: "number" },
            { bezeichnung: "Kokos", preis: 1, inputtype: "number" }
        ],

        "behaelter": [
            { bezeichnung: "Waffel", preis: 0, inputtype: "radio" },
            { bezeichnung: "Becher", preis: 0, inputtype: "radio" }
        ],

        "toppingSorten": [
            { bezeichnung: "Sahne", preis: 1, inputtype: "number" },
            { bezeichnung: "Streusel", preis: 1, inputtype: "number" },
            { bezeichnung: "Schokososse", preis: 1, inputtype: "number" },
            { bezeichnung: "Krokant", preis: 1, inputtype: "number" }
        ],


    };
}