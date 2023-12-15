let i = 20;

for (let i = 0; i < 6; i++){
    document.write(i + "<br>");
}

document.write(i);

//temos dois i uma que vale para dentro do bucle e outra para fora... SCOPE ou abrangência de cada variável

/*
O for tem 3 partes; a primeira é a declaração e iniciação da variavél 
a segunda é a condição 
e a terceira é a iteração (incremento ou decremento)
*/

//Também se poderia fazer o bucle declarando e inicializando fora e depois utilizando ela no for...

/*
EXEMPLO:

let i = 6; 
for (i; i >= 0; i--) {
    document.write(i + "<br>");
}
*/