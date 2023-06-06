'use strict'


console.log('is used')
let show = true

let nodo_btn = document.querySelector('.UserLayout__users--btn');
let nodo_users = document.querySelector('.UserLayout__users--table')

nodo_btn.addEventListener('click' , function(){
    show = !show
    if(show){
    nodo_users.classList.remove('show')
    }else{
        nodo_users.classList.add('show')

    }

})