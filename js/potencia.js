// POTENCIA - LOOP DE CALCULOS
alert('VAMOS CALCULAR A POTENCIA DE UM NUMERO? VAMOS LÁ!');

var cont = '1';
while (cont === '1') {
    var base = parseInt(prompt('DIGITE UM NUMERO PARA SER A BASE'));
    var expoente = parseInt(prompt('DIGITE UM NUMERO PARA SER O EXPOENTE:'));

    function potencia(base, expoente){
        let total = 1;
        for(let i = 0; i < expoente; i++){
            total *= base;
            //document.write(total);
        }
        return total;
    }

    document.write('Calculo de potencia: ' +base+ ' elevado a '+expoente+' = '+(potencia(base, expoente))+'<br><br>');
    cont = prompt('QUER CONTINUAR CALCULANDO POTENCIAS? 1 - SIM; 2 - NÃO')
}