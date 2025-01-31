const lightboxMedia = document.getElementsByClassName("lightbox_media");


function open (){//appelée dans photographer.js/displayDataMedia()
    lightbox.style.display = "block";
}


function close(){//appelée dans fact_lightbox.js
    lightbox.style.display = "none";
}


let mediaIndex = 1;
//apparaitre et disparaitre l'image
function mediaVue(n) { //appelée dans function mediaNav et mediaLocal
    let i;

    if (n > lightboxMedia.length) {
        mediaIndex = 1;
    }
    if (n < 1) {
        mediaIndex = lightboxMedia.length;
    }
    for (i = 0; i < lightboxMedia.length; i++) {
        lightboxMedia[i].style.display = "none";
    }
    lightboxMedia[mediaIndex-1].style.display = "block";

}

//Navigue entre les images, en liaison avec les chevrons (suivant/precedent)
//appelée dans fact_lightbox.js/ onclick
function mediaNav(n){   
    mediaVue(mediaIndex += n);
}

//se situer au moment de la navigation entre images
function mediaLocal(n){ //appelée dans photographer.js/displayDataMedia()
    mediaVue(mediaIndex = n);
}


//EVENEMENTS AU CLAVIER POUR LIGHTBOX

document.onkeydown = lightboxNavClavier;

function lightboxNavClavier(e) {

    if (e.keyCode == '37') {    //CHEVRON PRECEDENT
        mediaNav(-1);
    }
    else if (e.keyCode == '39') {   //CHEVRON SUIVANT
        mediaNav(1);
    }

    if(lightbox.style.display = "block" && e.code == "Escape"){ //CROIX DE FERMETURE
        close();
    }
}






