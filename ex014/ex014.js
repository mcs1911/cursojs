
function carregar(){
    var msg = document.getElementById('saludo');
    var img = document.getElementById('foto');
    var bom = document.getElementById('cumprimento');
   

    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    
    /*
    var hora = 19;
    var minutos = 30;   
    */ 
   
    msg.innerHTML = `Agora são ${hora}hs e ${minutos}minutos.`;

    if (hora >= 0 && hora < 12) {
        img.src = './imagens/manha.png';
        document.body.style.background = '#90B2D3';
        bom.innerHTML = ('Bom Dia!');
    } else if (hora >= 12 && hora < 19) {
        img.src = './imagens/tarde.png';
        document.body.style.background = '#FCCC42';
        bom.innerHTML = ('Boa Tarde!');
    } else {
        img.src = './imagens/noite.png';
        document.body.style.background = '#01355D';
        bom.innerHTML = ('Boa Noite!');
    }
}
