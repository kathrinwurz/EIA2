/*Abschlussaufgabe
Name: Kathrin Wurz
Matrikel: 260742
Datum: .07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
var Endabgabe;
(function (Endabgabe) {
    let serverAddress = "https://eia2-kathrin.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + Endabgabe.namensEingabe + "&punktestand=" + Endabgabe.punktestand;
        sendRequest(query, handleInsertResponse);
    }
    Endabgabe.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    Endabgabe.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let fischSpielerArray = JSON.parse(xhr.response);
            document.getElementById("bestenListeID").innerHTML = "";
            for (let i = fischSpielerArray.length; i < 5; i++) {
                let neuerSpieler = document.createElement("div");
                document.getElementById("bestenListeID").appendChild(neuerSpieler);
                neuerSpieler.setAttribute("id", i.toString());
                neuerSpieler.innerHTML += `${fischSpielerArray[i].name} : ${fischSpielerArray[i].punktestand}`;
            }
            /* let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson); */
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=DBClient.js.map