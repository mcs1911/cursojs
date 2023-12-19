let free = false;

const validarCliente = (time)=>{ // a flecha tem que estar pegada... se não, não funciona
    let idade = prompt("Qual é a sua idade?");
    if (idade > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Você pode entrar gratis, porque é a primeira pessoa depois das 2AM");
            free = true;
        } else {
            alert(`São ${time}hs, você pode passar, mas paga a entrada.`);
        }
    } else {
        alert("Você é menor de idade e não pode entrar!");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
