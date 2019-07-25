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
            document.getElementById("nameID").innerHTML = "";
            document.getElementById("punktestandID").innerHTML = "";
            for (let i = fischSpielerArray.length - 5; i < fischSpielerArray.length; i++) {
                document.getElementById("nameID").innerHTML += `<div>${fischSpielerArray[i].name} : ${fischSpielerArray[i].punktestand} </div>`;
            }
            /* let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson); */
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=DBClient.js.map