//mes variable 
let search = document.getElementById('search');//var de la barre de recherche
let button_search = document.getElementById('search_button')//var de l'icone de recherche
let menu = document.getElementById('bars');//var trois barres pour acceder au menu
let liste= document.getElementById('liste');//var de la liste qui apparait

let img = document.getElementsByClassName('img');//var des images se trouvant dans les sladers
let bouton_sp = document.getElementsByClassName('bouton_sp');//var de bouton de changement des images dans les slader
let etape = 0;

//debut de l'algorithme
button_search.addEventListener("click",function(){

    search.classList.toggle('active');

})

menu.addEventListener('click',function(){

    liste.classList.toggle('on');
})

//debut de l'algorthime de slader
let x = 0;
function allume(){
    for(i=0;i<img.length;i++){
        img[i].classList.remove('open')
        bouton_sp[i].classList.remove('openb')
    }
}
let effet = setInterval(function(){
    etape++;
    if (etape>=img.length) {
        etape = 0;
    }
    allume();
    img[etape].classList.add('open');
    bouton_sp[etape].classList.add('openb');

},5000)










//autre algoritheme
let retour = document.getElementById('retour');
let ouvrir = document.getElementById('utilisateur');
let bull = document.getElementById('mini_page');

ouvrir.addEventListener('click',function(){

    bull.classList.toggle('ok');
});
retour.addEventListener("click",function(){
    bull.classList.toggle('ok');
})







//algorithme pour l'heure et la date
let heure = document.getElementById('heure');
let day = document.getElementById('calender');


setInterval(function(){
    let n = new Date();
    heure.textContent = n.toLocaleTimeString();
    day.textContent = n.toLocaleDateString();
},1000)





//statistique