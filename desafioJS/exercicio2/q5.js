
function fatorial(n){
    let total = 1;
    let text = n + '! = '; 
    for(let i = n; i >= 1; i--){
        if(i === 1){
            text += i +' = ' + total;
        }else{
            text += i+' X '
        }
        total *= n;
        n--;
    }

    return text;
}


console.log(fatorial(5));