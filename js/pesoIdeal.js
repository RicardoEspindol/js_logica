// QUESTÂO 2 - PESO IDEAL - Com tratamento de erros
alert('Vamos começar o seu peso ideal!');
let nome = prompt('DIGITE SEU NOME COMPLETO:');
let nome_split = nome.split(" ");
for(let i = 0; i < nome_split.length; i++){
    nome_split[i] = nome_split[i][0].toUpperCase() + nome_split[i].substring(1);
}
let nomet= '';
for(let i = 0; i < nome_split.length; i++){
    nomet += nome_split[i] + ' ';
}
let sexo = prompt('DIGITE SEU SEXO: "M" PARA MASCULINO E "F" PARA FEMININO');
let sexo_upp = sexo.toUpperCase();
let altura = prompt('DIGITE SUA ALTURA: ');
let altura_raplace = parseFloat(altura.replace(",", "."));
if(sexo_upp == 'M'){
    alert('OLÁ SR. '+nomet+' SEU PESO IDEAL É '+ ((72.2 * altura_raplace) - 58));
}else if(sexo_upp == 'F'){
    alert('OLÁ SRa. '+nomet+' SEU PESO IDEAL É '+ ((62.1 * altura_raplace) - 44.7));
}else{
    alert('DIGITE UMA OPÇÃO DE SEXO VÁLIDA!')
}
