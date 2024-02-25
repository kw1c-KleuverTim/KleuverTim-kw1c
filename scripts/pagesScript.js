/*

    auteur: Tim Kleuver

    datum: 21-12-2023

    pages JS
*/


var count = 0 //het tellen van de ingeladen elementen

var menuItems = [ //arrey voor de namen van de knoppen
    "home",
    "Hobby’s en bijzondere kwaliteiten",
    "resultaten",
    "ervaringen",
    "portofolio"  
]

while (count < 5){

    if (count == 0){
    document.getElementById("second_container").innerHTML += 

    "<div class='navbuttons'>" + "<a href='../index.html'>"  + menuItems[count] +  "</a></div>" //maakt een home knop de in het element second_container wordt gezet.

    }

    if (count == 1){
        document.getElementById("second_container").innerHTML += 
    
        "<div class='navbuttons_special'>" + "<a href='../pages/Hobby’s_en_bijzondere_kwaliteiten.html'>"  + menuItems[count] +  "</a></div>" //maakt een hobby's en bijzondere kwaliteiten knop de in het element second_container wordt gezet.
        
    }

    if (count == 2){
        document.getElementById("second_container").innerHTML += 
    
        "<div class='navbuttons'>" + "<a href='../pages/resultaten.html'>"  + menuItems[count] +  "</a></div>" //maakt een resultaten knop de in het element second_container wordt gezet.

    }

    if (count == 3){
        document.getElementById("second_container").innerHTML += 
    
        "<div class='navbuttons'>" + "<a href='../pages/ervaringen.html'>"  + menuItems[count] +  "</a></div>" //maakt een ervaringen knop de in het element second_container wordt gezet.

    }

    if (count == 4){
        document.getElementById("second_container").innerHTML += 
    
        "<div class='navbuttons'>" + "<a href='../pages/portfolio.html'>"  + menuItems[count] +  "</a></div>" //maakt een portofolio knop de in het element second_container wordt gezet.
    }

    count += 1
}

count = 0;

var open = false;

var button = document.getElementById("threeStripesButton"); //Variabele om threestripesButton te kunnen gebruiken.

var allButtons = false; //Als deze true is dan zijn alle navigatieknoppen ingeladen.

function openMenu(){ //de functie om in phone portrait modus de frame met de navigatie knoppen te kunnen openen.
    console.log("clicked"); //om te checken of de functie werkt.
if (open == false){ //kijkt of het navigatieframe open of dicht is.
        document.getElementById("fourth_container").style.width = "320px"; //maakt navigatieframe zichtbaar
        open = true;
        console.log(count) //houd bij hoeveel elementen zijn ingeladen

    while (count !== 5){
        console.log("run") //geeft aan dat loop begonnen is

        if (count == 0){
            document.getElementById("fourth_container").innerHTML += 
            "<div class='navbuttons' id='navbuttons'>" + "<a href='../index.html'>"  + menuItems[count] +  "</a></div>"; //maakt een home knop de in het element fourth_container wordt gezet.
            }
        
            if (count == 1){
                document.getElementById("fourth_container").innerHTML += 
            
                "<div class='navbuttons_special' id='navbuttons'>" + "<a href='../pages/Hobby’s_en_bijzondere_kwaliteiten.html'>"  + menuItems[count] +  "</a></div>"; //maakt een hobby's en bijzondere kwaliteiten knop de in het element fourth_container wordt gezet.
                
            }
        
            if (count == 2){
                document.getElementById("fourth_container").innerHTML += 
            
                "<div class='navbuttons id='navbuttons'>" + "<a href='../pages/resultaten.html'>"  + menuItems[count] +  "</a></div>"; //maakt een resultaten knop de in het element fourth_container wordt gezet.
        
            }
        
            if (count == 3){
                document.getElementById("fourth_container").innerHTML += 
            
                "<div class='navbuttons id='navbuttons'>" + "<a href='../pages/ervaringen.html'>"  + menuItems[count] +  "</a></div>"; //maakt een ervaringen knop de in het element fourth_container wordt gezet.
        
            }

            if (count == 4){
                console.log("hi") //checkt of het laatste element wordt ingeladen
                document.getElementById("fourth_container").innerHTML += 
            
                "<div class='navbuttons' id='navbuttons'>" + "<a href='../pages/portfolio.html'>"  + menuItems[count] +  "</a></div>"; //maakt een portofolio knop de in het element fourth_container wordt gezet.
                
                console.log("hi") //geeft aan dat het inladen van het laatste is gelukt

                allButtons = true
            }

            if (count == 5 && allButtons == true){ //kijkt dubbel of alles is ingeladen
                count = 0;
                if (document.getElementById("navbuttons") !== null){ //kijkt of navbuttons er is.
                    document.getElementById("navbuttons").remove(); //verwijdert navbuttons.
                }
                break
            }

            count += 1; //verhoogd count met 1
        }
}
else{
        document.getElementById("fourth_container").style.width = "0px"; //maakt het frame onzichtbaar.

        open = false; //geeft aan dat het frame niet meer zichtbaar is
}
}

button.addEventListener("click", openMenu); //event om te kijken of er op de threestripesbutton geklikt is
