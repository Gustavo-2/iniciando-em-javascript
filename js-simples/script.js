function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 19;
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <12){
        //bom dia
        img.src ="imagens/foto-manha.png";
        document.body.style.background = "#d0a275"
        
    }else if(hora >=12 && hora <=18){
        //boa tarde
        img.src ='imagens/foto-tarde.png';
        document.body.style.background = '#976230'
    }else{
        //boa noite
        img.src ='imagens/foto-noite.png'
        document.body.style.background = '#071D32'
    }
}
