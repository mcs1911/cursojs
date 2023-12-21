function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        alert('[ERRO] - Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex'); // aqui são elementos então poderia colocar [0] - para homem e [1] - pra o elemento mulher
        var idade = ano - Number(fano.value);
        var genero = ''; // aqui se declara uma variável vazia pra poder atribuir valor mais tarde...
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // criando um atributo pelo js
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './imagens/dogbaby.png');
            } else if (idade < 21){
                img.setAttribute('src', './imagens/dogado.png');
            } else if (idade < 55){
                img.setAttribute('src', './imagens/doga.png');
            } else{
                img.setAttribute('src', './imagens/dogold.png');
            }

        } else if (fsex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './imagens/catbaby.png');
            } else if (idade < 21){
                img.setAttribute('src', './imagens/catado.png');
            } else if (idade < 55){
                img.setAttribute('src', './imagens/cata.png');
            } else{
                img.setAttribute('src', './imagens/catold.png');
            }
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
}