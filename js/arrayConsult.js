// QUESTÃO ARRAY 

var array = [];

function gerarNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    result = parseInt(Math.random() * (max - min) + min);
    return result;
}

for(let i = 0; i < 30; i++){
    array[i] = gerarNumber(10,99)
}

function imprimir(array){
    for(let i = 0; i < array.length; i++){
        document.write(array[i]+' - ');
    }
}

document.write('<br><br>IMPRIMINDO ARRAY<br>');
imprimir(array);
array.sort();

document.write('<br><br>ARRAY CRESCENTE<br>');
var arrayMais = [];
arrayMais = array.sort((a,b) => a - b);
imprimir(arrayMais);

document.write('<br><br>ARRAY DECRESCENTE<br>');
var arrayMenos = [];
arrayMenos = array.sort((a,b) => b - a);
imprimir(arrayMenos);

var pares = [1];
var impares = [2];

function separarPeI(array){
    let j = 0;
    let v = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i]%2==0){
            pares[j] = array[i];
            j++;
        }else{
            impares[v] = array[i];
            v++;
        }
    }
    return pares, impares;
}

separarPeI(array);

document.write('<br><br>ARRAY PARES<br>');
pares = pares.sort();
imprimir(pares);

document.write('<br><br>ARRAY IMPARES<br>');
impares = impares.sort();
imprimir(impares);


