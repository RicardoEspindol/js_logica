function romano(str){
    const arrayNumeros = str.split('');

    const arrayDecimal = arrayNumeros.map(numeral => {
        switch(numeral){
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    })

    return arrayDecimal.reduceRight((acomu, atual, index, array) => {
        if(atual < array[index +1]){
            return acomu - atual;
        }else{
            return acomu + atual;
        }
    })
}
alert('VAMOS CALCULAR O VALOR EM DECIMAL DOS NÚMEROS ROMANOS?');
alert('SÓ SÃO ACEITOS OS ALGARISMOS I,V,X,L,C,D,M. ENTENDEU? VAMOS LÁ!');
var cont = '1';
while (cont === '1') {
    var str = prompt('DIGITE O NUMERO ROMANO A SER CALCULADO:');
    str = str.toUpperCase();
    document.write('CALCULO DO NUMERO "' +str+ '" EM ROMANO É IGUAL A '+(romano(str))+' EM DECIMAL.<br><br>');
    cont = prompt('QUER CONTINUAR CALCULANDO POTENCIAS? 1 - SIM; 2 - NÃO')
}
// document.write(romano('XLVII'));