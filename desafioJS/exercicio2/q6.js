function pa(n1, n2, n3){
    let result = '';
    let total = 0;
    for(let i = 1; i <= n3; i++){
        if(i === 1){
            total += n1; 
            result += total+ ', ';
        }else if(i === n3){
            total += n2; 
            result += total+ '...';
        }else{
            total += n2; 
            result += total+ ', ';
        }
    }
    return result;
}

console.log(pa(4,3,5));
console.log(pa(100, -2, 4));
console.log(pa(3, 3, 3));