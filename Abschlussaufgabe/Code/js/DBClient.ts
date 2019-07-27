namespace Endabgabe {

    let serverAddress: string = "https://eia2-kathrin.herokuapp.com/";

    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + namensEingabe + "&punktestand=" + punktestand;
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let fischSpielerArray: Spieler[] = JSON.parse(xhr.response);


            document.getElementById("nameID").innerHTML = "";


            for (let i: number = fischSpielerArray.length - 10; i < fischSpielerArray.length; i++) {

                document.getElementById("nameID").innerHTML += `<div>${fischSpielerArray[i].name}: ${fischSpielerArray[i].punktestand} </div>`;
            }

        }
    }
}

