var cin = document.getElementById("cin");
var nom = document.getElementById("nom");
var prénom = document.getElementById("prn");
var annéeDernier = document.getElementById("annee");
var radioH = document.getElementById("rdh");
var radioF = document.getElementById("rdf");
var cinAccompagnateur = document.getElementById("cinacc");
var lienFamilail = document.getElementById("lienf");
var btnSubmit = document.getElementById("btnsub");
var groupeSanguin = document.getElementById("grps");
var maladies = document.getElementById("maladies");


var counteneur = document.getElementById("actif");

radioH.addEventListener("click",function(){
    counteneur.style.display = "none";
});
radioF.addEventListener("click",function(){
    counteneur.style.display = "block";
});
btnSubmit.addEventListener("click",function(){
    var date = new Date();
    if((date.getFullYear() - annéeDernier.value) < 10){
        alert("Erreur ! La différence entre l’année de dernier pèlerinage et l’année actuelle doit être supérieure ou égale à 10 ans");
    }
    else{
        var table = document.getElementById("tab");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        cell1.innerHTML = cin.value;
        cell2.innerHTML = nom.value;
        cell3.innerHTML = prénom.value;
        cell4.innerHTML = annéeDernier.value;
        if(radioH.checked){
            cell5.innerHTML = "H";
        }
        if(radioF.checked){
            cell5.innerHTML = "F";
        }
        cell6.innerHTML = cinAccompagnateur.value;
        cell7.innerHTML = lienFamilail.value;
        cell8.innerHTML = groupeSanguin.value;
        cell9.innerHTML = maladies.value;
    }
});
