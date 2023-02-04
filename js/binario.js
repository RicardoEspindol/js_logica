alert('DESEJA CONVERTER UM NÚMERO DE BINÁRIO PARA DECIMAL? VAMOS LÁ!');
alert('LEMBRE-SE, BINÁRIOS SÃO NÚMEROS ESCRITOS APENAS COM 0 E 1, OK?')
let bin = prompt('DIGITE O NUMERO EM BINÁRIO:');

function convert_B_D(bin){
    let total = 0;
    for(let i = bin.length +1; i >= 0 ; i--){
        if(bin[i] == 1){
            total += 2**parseInt(i);
        }else{
            total = total;
        }
    }
    return bin +' em decimal é igual a '+total;
}

document.write(convert_B_D(bin));


//document.write(bin.length);
