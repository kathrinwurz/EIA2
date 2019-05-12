/*  Aufgabe 7: Serverseitige Verarbeitung
    Name: Kathrin Wurz
    Matrikel: 260742
    Datum: 12.05.2019
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
     Er wurde nicht kopiert und auch nicht diktiert.*/


namespace aufgabe7 {

    export interface EisdealerDaten {
        bezeichnung: string;
        preis: number;
        inputtype: string;
    }

    export interface KeyArray {
        [datenArray: string]: EisdealerDaten[];
    }

    export let sortimentArray: KeyArray = {

        "behaelter": [
            { bezeichnung: "Waffel", preis: 0, inputtype: "radio" },
            { bezeichnung: "Becher", preis: 0, inputtype: "radio" }
        ],
        "eisSorten": [
            { bezeichnung: "Vanille", preis: 1, inputtype: "number" },
            { bezeichnung: "Schokolade", preis: 1, inputtype: "number" },
            { bezeichnung: "Himbeere", preis: 1, inputtype: "number" },
            { bezeichnung: "Stracciatella", preis: 1, inputtype: "number" },
            { bezeichnung: "Mango", preis: 1, inputtype: "number" },
            { bezeichnung: "Haselnuss", preis: 1, inputtype: "number" },
            { bezeichnung: "Kokos", preis: 1, inputtype: "number" }
        ],

        "toppingSorten": [
            { bezeichnung: "Sahne", preis: 1, inputtype: "checkbox" },
            { bezeichnung: "Streusel", preis: 1, inputtype: "checkbox" },
            { bezeichnung: "Schokososse", preis: 1, inputtype: "checkbox" },
            { bezeichnung: "Krokant", preis: 1, inputtype: "checkbox" }
        ],



    };
}