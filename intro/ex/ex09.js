function saludoInicial(name="Mayan"){
    document.write(`Oi, meu nome é ${name}<br>`);
}

saludoInicial("Sergio");
saludoInicial("Carmen");
saludoInicial();


//O nome Mayan esta como default se nada for escrito, para não mostrar 'undefined'

function somarNumeros(a, b){
    let soma = a + b;
    document.write(soma + "<br>");
}

somarNumeros(4, 20)

/* podemos incluir uma variável externa, segundo o exemplo abaixo

let c = 10;
function somarNumeros(a, b){
    let soma = a + b + c;
    document.write(soma + "<br>");
}

somarNumeros(4, 20)

essa conta incluiria o c e o resultado seria agora 34 
*/