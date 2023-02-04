alert('Vamos verificar se o número é primo? Vamos lá!');
let quant = parseInt(prompt('Digite o número que você deseja verificar:'));

function primo(n){
    let div = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            div++;
        }
    }
    if(div > 2){
        document.write('NÃO É PRIMO<br>');
    }else if(div === 2){
        document.write('É PRIMO<br>')
    }else{
        document.write('DEU A MULESTA<br>')
    }
    return div;
}

primo(quant);

let teste =0;
for(let i = 0; i < 101; i++){
    document.write(i+' - ');
    primo(i);
}