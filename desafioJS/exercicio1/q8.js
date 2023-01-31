function preco_final(preco, opc){
    if(opc === 1){
        let result = (preco - (preco * 0.15)).toString().replace('.', ',');
        if(result % 2 === 0 || result % 2 === 1){
            return 'R$ '+ result + ',00';
        }else{
            return 'R$ '+ result;
        }
    }else if(opc === 2){
        let result = (preco - (preco * 0.10)).toString().replace('.', ',');
        if(result % 2 === 0 || result % 2 === 1){
            return 'R$ '+ result + ',00';
        }else{
            return 'R$ '+ result;
        }
    }else if(opc === 3){
        let result = (preco - (preco * 0.05)).toString().replace('.', ',');
        if(result % 2 === 0 || result % 2 === 1){
            return 'R$ '+ result + ',00';
        }else{
            return 'R$ '+ result;
        }
    }else if(opc === 4){
        let result = (preco - (preco * 0)).toString().replace('.', ',');
        if(result % 2 === 0 || result % 2 === 1){
            return 'R$ '+ result + ',00';
        }else{
            return 'R$ '+ result;
        }
    }

}
console.log(preco_final(100,1));
console.log(preco_final(100,2));
console.log(preco_final(100,3));
console.log(preco_final(100,4));
//console.log(preco_final(93.50,3));
