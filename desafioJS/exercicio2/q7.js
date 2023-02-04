function primo(n){
    let div = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            div++;
        }
    }
    if(n <= 1 || div > 2){
        return false;
    }else{
        return true
    }
}

console.log(primo(1));
console.log(primo(7));
console.log(primo(10));
console.log(primo(11));
