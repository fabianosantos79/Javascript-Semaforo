let imagem = document.querySelector('.farol');

function vermelho(){
    imagem.setAttribute('src', 'img/vermelho.png');

}

function amarelo(){
    imagem.setAttribute('src', 'img/amarelo.png');
    clearInterval(automatic);
}

function verde(){
    imagem.setAttribute('src', 'img/verde.png');
}

function automatico(){
    let contador = 1;
    
    const automatic = setInterval(function () {
        imagem.setAttribute('src', 'img/'+contador+'.png');
        contador ++;

        if(contador > 3){
            contador = 1;
        }
    }, 1000);
}

function stopAutomatico() {
    clearInterval(automatico);    
}
