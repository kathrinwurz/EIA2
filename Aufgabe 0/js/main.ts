function clickButton(): void {
    var name = prompt ("Hier Name eintragen");

    if (name!=null) {
        document.getElementById("begruessung").innerHTML= "Hallo " + name + ".";
    }
}