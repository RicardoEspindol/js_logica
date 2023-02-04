function imc(altura, peso){
    let result = peso / (altura * altura)
    if(result < 18.5){
        return 'Baixo peso';
    }else if(result >= 18.5 && result < 25){
        return 'Peso normal';
    }else if(result >= 25 && result < 30){
        return 'Excesso de peso';
    }else if(result >= 30 && result <= 35){
        return 'Obesidade';
    }else{
        return 'Obesidade extrema';
    }
}

console.log(imc(1.85,110.2));
console.log(imc(1.80, 82.6));
