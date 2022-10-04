function contar(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var nu1 = Number(n1.value)
    var nu2 = Number(n2.value)
    var pass = Number(passo.value)

   if(n1.value.length == 0 || n2.value.length ==0 || passo.value.length == 0){
    
    res.innerHTML = 'Impossível contar!'
   }
    else{
       res.innerHTML = 'Contando:<br> ' 
       if(pass <= 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        pass = 1
       }
        if( nu1 < nu2){ //Contagem crescente
       for(var c = nu1; c <= nu2; c += pass){
            res.innerHTML += ` ${c} \u{1F449}`
       }
       
    }else{ //Contagem regressiva
        for(var c = nu1; c >= nu2; c -=pass){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
    }
    
}