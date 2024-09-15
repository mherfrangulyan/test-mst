var btn = document.querySelector('.mobile-btn');
if(btn){
    btn.onclick = function(){
        if(btn.parentNode.classList.contains('opened')){
            btn.parentNode.classList.remove('opened'); 
        }else{
            btn.parentNode.classList.add('opened');
        }
    }
}

window.onscroll = function(){
    var w = window.scrollY;
    if(w>80){
        document.querySelector('header').classList.add('fixed');
    }else{
        document.querySelector('header').classList.remove('fixed');
    }
}