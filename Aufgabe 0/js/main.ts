function openWindow(): void {
    var name: string = prompt ("Hier Name eintragen");

    if (name!=null) {
        document.getElementById("begruessung").innerHTML= "Hallo " + name + "!";
        console.log ("Hallo " + name + "!");
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    openWindow()
}