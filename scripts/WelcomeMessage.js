/*
    auteur: Tim Kleuver

    datum: 14-1-2024

    WelcomeMessage JS
*/

document.addEventListener("DOMContentLoaded", function() { //voert de functie uit wanneer de website is geladen

    if (!localStorage.getItem("promptShown6")) { //maakt gebruik van locale cookies om te kijken of de prompt al een keer is weergeven

        var name = prompt("Hallo, Wat is uw naam?") //Vraagt om je naam.
        alert("Hallo " + name + ", welkom op mijn website.")//Verwelkomt je met je naam.
        
        localStorage.setItem("promptShown6", "true"); //geeft aan dat de prompt al een keer is gebruikt.
    }
});