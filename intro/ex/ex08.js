let frase = `Oi ${nome}! Como você está?`;

/* Uma forma de fazer a function
function oi(nome){
    let frase = `Oi ${nome}! Como você está?`;
    document.write(frase);
}


const oi = function(nome){
    let frase = `Oi ${nome}! Como você está?`;
    document.write(frase);
}

*/
// Função flecha 
// se só estamos usando um parâmetro não prrcisa dos parêntesis ()

const oi = (nome)=>{
    let frase = `Oi ${nome}! Como você está?`;
    document.write(frase);
}

//simplificando 

const oi = nome=> document.write(frase);

//const oi = ()=>

oi("May")