let ul = document.querySelector (".nav-list")
let menuBtn = document.querySelector(".menu-burguer i")

function menuShow (){

    if(ul.classList.contains('open')){
        ul.classList.remove('open')
    }else {
        ul.classList.add('open')
    }

   
}

console.log(menuShow)