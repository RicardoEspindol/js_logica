function preco_final(preco, opc){
    let text = '';
    if(opc === 1){
        let result = (preco - (preco * 0.15));
        return "R$ " + result.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
       
    }else if(opc === 2){
        let result = (preco - (preco * 0.10));
        return "R$ " + result.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
       
    }else if(opc === 3){
        let result = (preco - (preco * 0.05));
        return "R$ " + result.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
       
    }else if(opc === 4){
        let result = (preco - (preco * 0));
        return "R$ " + result.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }else{
        return 'Opção de Desconto Inválida';
    }

}
console.log(preco_final(100,1));
console.log(preco_final(100,2));
console.log(preco_final(100,3));
console.log(preco_final(100,4));
