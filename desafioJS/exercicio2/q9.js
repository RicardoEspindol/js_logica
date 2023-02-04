function ipv4_bits(str){
    let saida = '';
    let bins = [128,64,32,16,8,4,2,1];
    array = str.split('.');

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < bins.length; j++){
            if(parseInt(array[i]) >= bins[j]){
                saida += '1';
                array[i] -= bins[j];
            }else if(parseInt(array[i]) < bins[j]){
                saida += '0';
            }
       
        }
    }
    
    return saida;
}

console.log(ipv4_bits('192.168.0.1'));
console.log(ipv4_bits('172.16.0.254'));
