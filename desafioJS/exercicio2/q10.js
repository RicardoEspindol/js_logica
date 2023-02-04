function febre(array){
    let saida = '[';
    //let graus = ['"Normal"','"Hipotermia"','"Hipertermia"','"Febre"','"Febre Alta"'];
    for(let i = 0; i < array.length; i++){
        if((array[i]) <= 35){
            saida += '"Hipotermia", ';
        }else if((array[i]) > 35 && array[i] <= 37.7){
            saida += '"Normal", ';
        }else if((array[i]) > 37.7 && array[i] <= 39.5){
            saida += '"Febre", ';
        }else if((array[i]) > 39.5 && array[i] < 41){
            saida += 'Febre Alta';
        }else{
            saida += '"Hipertemia", ';
        }
        if(array[array.length-1]){
            saida[saida.length] = '';
            saida[saida.length-1] = '';

        }

    }
    return saida + ']';
}
let array = [35.41,33.12,41.06,38.9,40.22];
console.log(febre(array))
// let graus = ["Normal","Hipotermia","Hipertermia","Febre","Febre Alta"];
// console.log(graus);