// FATORIAL 

var array = [];

function gerarNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    result = parseInt(Math.random() * (max - min) + min);
    return result;
}

for(let i = 0; i < 10; i++){
    array[i] = gerarNumber(5,15);
    
}

function fat(n){
    let total = 1;
    for(let i = n; i >= 2; i--){
        total *= n;
        n--;
    }
    return total;
}

function arrayRun(array){
    for(let i = 0; i < array.length; i++){
    let runner = array[i];
    document.write('Fatorial de '+runner+' = '+(fat(runner))+'<br>');
    }
}

arrayRun(array);