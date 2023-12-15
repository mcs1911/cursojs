let pc1 = {
    nome: "MayanPC",
    processador: "MacIOS",
    ram: "16GB",
    espaço: "1TB",
};

let nome = pc1["nome"];
let processador = pc1["processador"];
let ram = pc1["ram"];
let espaço = pc1["espaço"];

frase = `O nome do meu PC é: <strong>${nome}</strong> <br>
        O processador é: <strong>${processador}</strong> <br>
        A meméria ram é: <strong>${ram}</strong> <br>
        O espaço do disco é: <strong>${espaço}</strong> <br>`;

document.write(frase)