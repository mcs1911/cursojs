moneyCofla = prompt("Cofla, quanto de dinheiro você tem? ");
moneyRoberto= prompt("Roberto, quanto de dinheiro você tem? ");
moneyPedro = prompt("Pedro, quanto de dinheiro você tem? ");

moneyCofla = parseInt(moneyCofla);

if (moneyCofla >= 0.6 && moneyCofla < 1) {
    alert("Cofla, você pode comprar Sorvete de Água!");
    alert("E te sobra " + (moneyCofla - 0.6));
}
else if (moneyCofla >= 1 && moneyCofla < 1.6) {
    alert("Cofla, você pode comprar Sorvete de Creme!");
    alert("E te sobra " + (moneyCofla - 1));
}
else if (moneyCofla >= 1.6 && moneyCofla < 1.7) {
    alert("Cofla, você pode comprar Sorvete Heladix!");
    alert("E te sobra " + (moneyCofla - 1.6));
}
else if (moneyCofla >= 1.7 && moneyCofla < 1.8) {
    alert("Cofla, você pode comprar Sorvete Heladovich!");
    alert("E te sobra " + (moneyCofla - 1.7));
}
else if (moneyCofla >= 1.8 && moneyCofla < 2.9) {
    alert("Cofla, você pode comprar Sorvete Helardo!");
    alert("E te sobra " + (moneyCofla - 1.8));
}
else if (moneyCofla >= 2.9) {
    alert("Cofla, você pode comprar Sorvete com Confete! Ou pote de 1/4kg ");
    alert("E te sobra " + (moneyCofla - 2.9));
} else {
    alert("Cofla, você não tem dinheiro suficiente! =( ");
}



//Roberto

if (moneyRoberto >= 0.6 && moneyRoberto < 1) {
    alert("Roberto, você pode comprar Sorvete de Água!");
}

else if (moneyRoberto >= 1 && moneyRoberto < 1.6) {
    alert("Roberto, você pode comprar  Sorvete de Creme!");
}

else if (moneyRoberto >= 1.6 && moneyRoberto < 1.7) {
    alert("Roberto, você pode comprar Sorvete Heladix!");
}

else if (moneyRoberto >= 1.7 && moneyRoberto < 1.8) {
    alert("Roberto, você pode comprar Sorvete Heladovich!");
}

else if (moneyRoberto >= 1.8 && moneyRoberto < 2.9) {
    alert("Roberto, você pode comprar Sorvete Helardo!");
}

else if (moneyRoberto >= 2.9) {
    alert("Roberto, você pode comprar Sorvete com Confete! Ou pote de 1/4kg ");
}

else {
    alert("Roberto, você não tem dinheiro suficiente! =( ");
}


 
//Pedro

if (moneyPedro >= 0.6 && moneyPedro < 1) {
    alert("Pedro, você pode comprar Sorvete de Água!");
}

else if (moneyPedro>= 1 && moneyPedro < 1.6) {
    alert("Pedro, você pode comprar Sorvete de Creme!");
}

else if (moneyPedro >= 1.6 && moneyPedro < 1.7) {
    alert("Pedro, você pode comprar Sorvete Heladix!");
}

else if (moneyPedro >= 1.7 && moneyPedro < 1.8) {
    alert("Pedro, você pode comprar Sorvete Heladovich!");
}

else if (moneyPedro >= 1.8 && moneyPedro < 2.9) {
    alert("Pedro, você pode comprar Sorvete Helardo!");
}

else if (moneyPedro >= 2.9) {
    alert("Pedro, você pode comprar Sorvete com Confete! Ou pote de 1/4kg ");
} else {
    alert("Pedro, você não tem dinheiro suficiente! =( ");
}