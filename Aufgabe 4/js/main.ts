/*Aufgabe: Aufgabe 4: Eisdealer
           Name: Kathrin Wurz
           Matrikel: 260742
           Datum: 21.04.2019 
           Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
           Er wurde nicht kopiert und auch nicht diktiert.--> */

           
           namespace a4 {
           
               window.addEventListener("load", init);
           
               function init(_event: Event): void {
           
                   document.getElementById("button").addEventListener("click", bestellungUeberpruefen);
           
                   let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
           
                   for (let i: number = 0; i < fieldsets.length; i++) {
                       let fieldset: HTMLFieldSetElement = fieldsets[i]; {
                           fieldset.addEventListener("change", bestellUebersicht);
                       }
                   }
               }
           
           
           
               /*FUNKTION listet angewähltes auf und rechnet die Summe zusammen */
           
               function bestellUebersicht(_event: Event): void {
                   let startSumme: number = 0;
                   let summe: number = 0;
                   let preis: number = 0;
                   let bestellEingabe: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
                   
                   document.getElementById("uebersicht").innerHTML = "";
           
                   for (let i: number = 0; i < bestellEingabe.length; i++) {
                       if ((bestellEingabe[i].name == "Schokolade" && Number(bestellEingabe[i].value) > 0) || bestellEingabe[i].name == "Vanille" && Number(bestellEingabe[i].value) > 0 || (bestellEingabe[i].name == "Himbeere" && Number(bestellEingabe[i].value) > 0) || bestellEingabe[i].name == "Stracciatella" && Number(bestellEingabe[i].value) > 0 || bestellEingabe[i].name == "Mango" && Number(bestellEingabe[i].value) > 0)  {
                           preis = Number(bestellEingabe[i].value);
                           summe += preis;
                           console.log(summe);
                           let ziel = document.createElement("li");
                           ziel.innerHTML = `${bestellEingabe[i].value} Kugel ${bestellEingabe[i].name}, `;
                           document.getElementById("uebersicht").appendChild(ziel);
                       }
           
                       if (bestellEingabe[i].checked == true) {
                           let gesamtPreis: number = Number(bestellEingabe[i].value)
                           summe += gesamtPreis;
                           console.log(summe)
                           document.getElementById("preis").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                           let bestellUebersicht = document.createElement("li");
                           bestellUebersicht.innerHTML = `${bestellEingabe[i].id}`
                           document.getElementById("uebersicht").appendChild(bestellUebersicht)
                       }

                       // Nimmt Werte der Dropdown Boxen und zählt diese in die Übersicht
           
                       document.getElementById("preis").innerHTML = `Gesamtpreis:   ${summe} €`;
                   }
               }
           
           

               function bestellungUeberpruefen(_event: Event): void {
                   let kundenDaten: string[] = [];
                   let kundenEingabe: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
                   for (let i: number = 0; i < kundenEingabe.length; i++) {
                       if (kundenEingabe[i].value == "") {
                           let benoetigteDaten: string = kundenEingabe[i].name;
                           kundenDaten.push(benoetigteDaten);
           
                       }
                   }
           
                   if (kundenDaten.length == 0) {
                       alert("Vielen Dank für deine Bestellung");
                   }
                   else {
                       alert(`${kundenDaten} fehlt. Bitte noch ergänzen!`);
                   }
           
               }
           }   
          
           