// Variables globales du projet

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
// TODO 1 : Déclarer cinq variables globales
//
// - Déclarez la variable gTour et affectez-lui la valeur "X". 
//   gTour servira à noter à qui c'est le tour de jouer.
// - Déclarez les variables gScoreX et gScoreO. Affectez-leur
//   la valeur 0. Ces variables représentent les scores des
//   joueurs.
// - Déclarez la variable gTitreRouge en lui affectant la valeur false.
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-

// DÉCLARER VOS VARIABLES GLOBALES ICI
let gTour = "X";
let gScoreX = 0;
let gScore0 = 0;
let gTitreRouge = false;

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
// TODO 2 : Ajouter des écouteurs d'événements dans init()
//
// - En complétant certains TODOs, vous serez amenés à ajouter
//   des écouteurs d'événements ici. À la fin du projet, vous devriez
//   en avoir un total de 13.
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
function init(){

    // ÉCRIRE VOTRE CODE ICI
    document.querySelector("#carre1").addEventListener("click", coup)
    document.querySelector("#carre2").addEventListener("click", coup)
    document.querySelector("#carre3").addEventListener("click", coup)
    document.querySelector("#carre4").addEventListener("click", coup)
    document.querySelector("#carre5").addEventListener("click", coup)
    document.querySelector("#carre6").addEventListener("click", coup)
    document.querySelector("#carre7").addEventListener("click", coup)
    document.querySelector("#carre8").addEventListener("click", coup)
    document.querySelector("#carre9").addEventListener("click", coup)
    document.querySelector("#reset").addEventListener("");
    document.querySelector("#reset").addEventListener("mouseout", finSurvolRecommencer);
    document.querySelector("#").addEventListener();
    document.querySelector("#").addEventListener();

}

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
// TODO 3 : Compléter la fonction coup(), qui ajoute un symbole dans la grille
//
// - Ajoutez un écouteur d'événements pour chaque case du jeu dans init(). 
//   Quand on clique sur une des neufs cases, on appelle la fonction
//   coup().
//
// - Si le contenu textuel de l'élément cliqué contient la valeur chaîne vide "" :
//     - Le contenu textuel de l'élément cliqué doit être remplacé par le texte
//       dans la variable gTour.
//     - On appelle la fonction verifierVictoire().
//
// - Sinon, on ne fait rien.
//      
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-

function coup(){

    // ÉCRIRE VOTRE CODE ICI
    if("#carre1".textContent == ""){
        this.textContent = gTour;
        verifierVictoire();
    }

    else{

    }

}

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
// TODO 4 : Compléter les fonctions survolRecommencer() et
//          finSurvolRecommencer().
//
// - Ajouter deux écouteurs d'événements dans init() pour le bouton permettant
//   de recommencer : quand on le survole on appelle la fonction survolRecommencer()
//   et quand on arrête de le survoler on appelle la fonction finSurvolRecommencer().
//
// - Quand le bouton est survolé, son fond devient couleur "crimson" et son 
//   texte devient couleur "white".
// - Quand le bouton n'est plus survolé, son fond devient couleur "#E9E9ED"
//   et son texte devient couleur "black".
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-

function survolRecommencer(){

    // ÉCRIRE VOTRE CODE ICI


}

function finSurvolRecommencer(){

    // ÉCRIRE VOTRE CODE ICI

}

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
// TODO 5 : Compléter la fonction recommencer()
//
// - Ajoutez un écouteur d'événements dans init() pour le bouton qui 
//   servira à recommencer une partie. Quand on clique dessus, on appelle
//   la fonction recommencer().
//
// - On affecte la valeur "X" à la variable gTour.
// - On remplace le contenu textuel des neuf cases du jeu par la chaîne vide "".
// - On met la bordure du cercle avec le X en "gold".
// - On met la bordure du cercle avec le O en "black".
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-

function recommencer(){

    // ÉCRIRE VOTRE CODE ICI

}

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
// TODO 6 : Compléter la fonction nouveauTour()
//
// - Si gTour vaut "O", on affecte la valeur "X" à gTour. On rend la bordure du
//   cercle avec le X "gold" et on remet la bordure du cercle avec le O en "black".
// - Sinon, si gTour vaut "X", on affecte la valeur "O" à gTour. On rend la bordure
//   du cercle avec le X "black" et on remet la bordure du cercle avec le O en "gold".
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-

function nouveauTour(){

    // ÉCRIRE VOTRE CODE ICI

}

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
// TODO 7 : Compléter la fonction victoire()
//
// - Si gTour vaut "X" (donc si le joueur X gagne), on met la bordure
//   du cercle avec X en "lime". On met la bordure du cercle avec O en
//   "crimson". On augmente la valeur de gScoreX de 1. On affiche le
//   nouveau score du joueur X dans la page. Attention ! Le score doit
//   être affiché comme ceci par exemple : "3 point(s)". (Et pas seulement "3")
// - Sinon, on met la bordure du cercle avec O en "lime". On met la bordure 
//   du cercle avec X en "crimson". On augmente la valeur de gScoreO de 1. 
//   On affiche le nouveau score du joueur O dans la page. Attention ! Le score 
//   doit être affiché comme ceci par exemple : "2 point(s)". (Et pas seulement "2")
//
// - Dans tous les cas, après le if .. else on lance une alerte avec le message 
//   "Joueur [gTour] gagne !", où [gTour] est remplacé par la valeur de la 
//   variable gTour.
// - Finalement, on affecte la valeur chaîne vide "" à gTour.
//
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-

function victoire(){

    // ÉCRIRE VOTRE CODE ICI

}

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
// TODO 8 : Compléter la fonction verifierVictoire, qui vérifie
//          si un joueur vient de remporter la partie ou non.
//
// - On déclare neuf variables locales nommées carre1, carre2, carre3,
//   etc. jusqu'à carre9. Elles doivent contenir le contenu textuel des
//   éléments #carre1, #carre2, #carre3, etc.
//
// - On déclare une autre variable locale nommée ligneVictorieuse, qui contient
//   "XXX" si c'est le tour du joueur X et "OOO" sinon.
//
// - Si une ligne / diagonale est victorieuse (VÉRIFIEZ L'AIDE POUR LE TODO 8 
//   DANS LE DOCUMENT WORD POUR CELA ! C'est la section juste avant la grille
//   de correction), on appelle la fonction victoire(). Sinon, on appelle la 
//   fonction nouveauTour().
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-

function verifierVictoire(){

    // ÉCRIRE VOTRE CODE ICI

}

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
// TODO 9 : Compléter la fonction clicTitre()
//
// - La variable globale gTitreRouge vous sera utile pour ce TODO.
//
// - Quand on clique sur le titre « Tik-Tok-Toe 😨 » dans le haut de la page,
//   son texte alterne entre "❌ Tic-Tac-Toe ⭕" et "Tik-Tok-Toe 😨" à chaque
//   clic.
// - De plus, quand le texte est "Tik-Tok-Toe 😨", sa couleur de texte est "white", 
//   mais quand il devient "❌ Tic-Tac-Toe ⭕", sa couleur de texte est "red".
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-

function clicTitre(){

    // ÉCRIRE VOTRE CODE ICI

}
