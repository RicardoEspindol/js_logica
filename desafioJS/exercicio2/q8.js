// function fibonacci(n){
//     let atual = 0;
//     let array = [0,1];
//     let saida = '0, 1, ';
//     if(n === 1 || n === 0){
//         return array[0] + '...';
//     }
//     for(let i = 1; i < n-1; i++){
//         atual = (array[i] + array[i-1]);
//         array[i + 1] = atual;
//     }
//     return array + '...';
// }

function fibonacci(num)
{
    let array=[0,1];
    let texto="0, 1, ";
    if(num===1)
    {
        return "0..."
    }
    else
    {
        for(let i=2;i<num;i++)
        {
            let soma=array[array.length-1]+array[array.length-2];
            array.push(soma);
            if(i===num-1)
            {
                texto+=String(soma)+"..."
            }
            else
            {
                texto+=String(soma)+", "
            }
        }
        return texto;
    }
}

console.log(fibonacci(1))
console.log(fibonacci(7));
console.log(fibonacci(1));
console.log(fibonacci(3));

