// QUESTÃO PALPITES MEGASENA

alert('Deseja realizar palpites pra Megasena? Vamos lá!');
var quant = parseInt(prompt('Digite a quantidade de palpites que você deseja:'));

function gerarNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    result = parseInt(Math.random() * (max - min) + min);
    return result;
}

function exibir(array){
    for(let i = 0; i < array.length; i++){
        if(i === 5){
            document.write(array[i]+'<br>');
        }else{
            document.write(array[i]+' - ');
        }
    }
}

function sorteio(){
    let array = [];

    array[0] = gerarNumber(1,61);
    array[1] = gerarNumber(1,61);
    while(array[1] === array[0]){
        array[1] = gerarNumber(1,61);
    }
    array[2] = gerarNumber(1,61);
    while(array[2] === array[1] || array[2] === array[0]){
        array[2] = gerarNumber(1,61);
    }
    array[3] = gerarNumber(1,61);
    while(array[3] === array[2] || array[3] === array[1] || array[3] === array[0]){
        array[3] = gerarNumber(1,61);
    }
    array[4] = gerarNumber(1,61);
    while(array[4] === array[3] || array[4] === array[2] || array[4] === array[1] || array[4] === array[1]){
        array[4] = gerarNumber(1,61);
    }
    array[5] = gerarNumber(1,61);
    while(array[5] === array[4] || array[5] === array[3] || array[5] === array[2] || array[5] === array[1] || array[5] === array[0]){
        array[5] = gerarNumber(1,61);
    }
    return exibir(array);
}

for(let i = 0; i < quant; i++){
    document.write('EXIBINDO SORTEIO N° '+(i+1)+':<br>');
    sorteio();
    document.write('<br>');
}