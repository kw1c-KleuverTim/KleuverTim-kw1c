/*

    auteur: Tim Kleuver

    datum: 20-1-2023

    Home JS
*/



function createtablecells(names, grades, grades2){ /*cijfers en namen van de vakken*/  
    var count = 0
    var count2 = 0
    var count3 = 0
    var count4 = 0
    var table = document.getElementById("TBody"); // tabel body

    var numRows = 4; //aantal rows
    var numCols = 5; //aantal collomen

    for (var i = 0; i < numRows; i++) {
        var row = table.insertRow(); //een row toevoegen aan de tabel

        for (var j = 0; j < numCols; j++) { 
            var cell = row.insertCell(); //een cel toevoegen

            cell.id = "cell" + j + "row" + i //de cel krijgt een naam

            if (count < 4){
                if (cell.id == "cell0row0" || cell.id == "cell0row1" || cell.id == "cell0row2" || cell.id == "cell0row3"){
                cell.textContent = names[count2]; //de cell krijgt tekst door de parameter
                count2 += 1
                }
                if (cell.id == "cell1row0" || cell.id == "cell1row1" || cell.id == "cell1row2" || cell.id == "cell1row3"){
                    cell.textContent = grades[count3]; //de cell krijgt tekst door de parameter
                    count3 += 1
                }
                if (cell.id == "cell2row0" || cell.id == "cell2row1" || cell.id == "cell2row2" || cell.id == "cell1row3"){
                    cell.textContent = grades2[count4]; //de cell krijgt tekst door de parameter
                    count4 += 1
                }
            count += 1
            }
            else{
                count = 0 //als alle cellen zijn toegevoegd dan word count gereset
            }

        }
    }
    var avaragecell1 = document.getElementById("cell4row0");
    var avaragecell2 = document.getElementById("cell4row1");
    var avaragecell3 = document.getElementById("cell4row2");
    var avaragecell4 = document.getElementById("cell4row3");

    avaragecell1.textContent = (grades[0] + grades2[0]) / 2 //gemiddelden worden hieronder uitgerekent
    avaragecell2.textContent = grades2[1]
    avaragecell3.textContent = (grades[2] + grades2[2]) / 2
    avaragecell4.textContent = "geen cijfers"
}

var names = [ //namen vakken
    "realiseren",
    "plannen en ontwerpen",
    "Computervaardigheden",
    "Testen en verbeteren"
];

var grades = [ //cijfers periode 1
    5.7,
    null,
    8.1,
    null
];

var grades2 = [ //cijfers periode 2
    8.6,
    7.5,
    10,
    null
];


createtablecells(names, grades, grades2)