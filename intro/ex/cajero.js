
var monto = parseFloat(prompt("Informe su monto inicial:")) || 0;

        function deposito() {
            var valorDeposito = parseFloat(prompt("Informe el valor del deposito:"));
            if (!isNaN(valorDeposito) && valorDeposito > 0) {
                monto += valorDeposito;
                exibirMonto();
            } else {
                alert("Por favor, inserte un valor válido para su deposito.");
            }
        }

        function retiro() {
            var valorRetiro = parseFloat(prompt("Informe el valor del retiro:"));
            if (!isNaN(valorRetiro) && valorRetiro > 0 && valorRetiro <= monto) {
                monto -= valorRetiro;
                exibirMonto();
            } else {
                alert("Usted no posee monto suficiente para este retiro.");
            }
        }

        function exibirMonto() {
            document.getElementById('monto').innerHTML = 'Monto actual: $ ' + monto.toFixed(2);
        }