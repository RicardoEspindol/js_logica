function media_ponderada(nota1, nota2){
    let media = ((nota1 * 4) + (nota2 * 6))/ 10;
    if(media < 40){
        return 'E';
    }else if(media >= 40 && media < 60){
        return 'D';
    }else if(media >= 60 && media < 75){
        return 'C';
    }else if(media >= 75 && media < 90){
        return 'B';
    }else if(media >= 90){
        return 'A';
    }
}

console.log(media_ponderada(95,98));
console.log(media_ponderada(70,85));
console.log(media_ponderada(70,70));
console.log(media_ponderada(50,40));
console.log(media_ponderada(30,20));