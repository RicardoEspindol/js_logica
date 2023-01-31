function bhaskara(ax2, bx, c){
    let result = [];
    let x1 = 0;
    let x2 = 0;
    let delta = (bx * bx) - (4 * ax2 * c);
    if(delta < 0){
        return result;
    }else if(delta === 0){
        x1 = ((bx - (bx + bx)) + Math.sqrt(delta)) / (2 * ax2);
        result[0] = x1;
        return result;
    }else{
        x1 = ((bx - (bx + bx)) + Math.sqrt(delta)) / (2 * ax2);
        result[0] = x1;
        x2 = ((bx - (bx + bx)) - Math.sqrt(delta)) / (2 * ax2);
        result[1] = x2;
        return result;
    }
}

console.log(bhaskara(-3,18,-15));
console.log(bhaskara(3,-4,2));
console.log(bhaskara(4,-12,9));
