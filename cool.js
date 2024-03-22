document.addEventListener("DOMContentLoaded", function() {
    var btns = document.querySelectorAll('.read-more-btn');
    
    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var content = this.previousElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                this.textContent = "Lire moins";
            } else {
                content.style.display = "none";
                this.textContent = "Lire plus";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Crée un nouvel objet Date
    var date = new Date();

    // Tableaux pour mapper les noms des jours et des mois
    var joursSemaine = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    // Récupère le jour de la semaine, le jour du mois, le mois et l'année
    var jourSemaine = joursSemaine[date.getDay()];
    var jour = date.getDate();
    var moisActuel = mois[date.getMonth()];
    var année = date.getFullYear();

    // Concatène la date formatée
    var dateFormatted = jourSemaine + " " + jour + "/" + moisActuel + "/" + année;

    // Sélectionne l'élément HTML où afficher la date et insère la date formatée
    document.getElementById("dateDisplay").textContent = dateFormatted;
});