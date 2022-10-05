let num = document.getElementById('n1')
let tab = document.getElementById('tab')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inTab(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function adicionar(){
    if(isNumero(num.value) && !inTab(num.value, valores)){
        valores.push(Number(num.value))// adicionar valor no vetor
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        tab.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''// deixar caixa de texto vazia para receber outro valor
    num.focus() // Colocar cursor n lugar para poder adicionar outro valor
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione um valores antes de finalizar')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML +=  `<p>O maior valor encontrado foi ${maior}.`
        res.innerHTML += `<p>O menos valor encontrado foi ${menor}`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média entre os valore é ${media}</p>`    
    }
}