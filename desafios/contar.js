function contar(){
    var inicial = parseInt(document.getElementById('start').value);
    var final = parseInt(document.getElementById('final').value);
    var res = document.getElementById('res');
    var inc = parseInt(document.getElementById('incre').value);
    var resultado = '';

    for (var i = inicial; i <= final; i += inc){
        resultado += i + '👉';

    }

    res.innerHTML = `Vamos contar: ${resultado}`;

}