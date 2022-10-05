let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(7) // adicionar elemento no final do vetor
num.sort() // Ordenar em ordem crescente
console.log(num.length)//tamanho
console.log(num[1])

let valores = [8, 1, 7, 4, 2, 9]
/*valores.sort()
console.log(valores)
for(var c = 0; c < valores.length; c++){
    console.log(`A posição ${c} tem o valor ${valores[c]}`) //console.log(valores[0])...
}
//Otimizando....

for(var c in valores){
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}
*/
var pos = valores.indexOf(8)// indice do valor
if(pos == -1) {
    console.log('O valor não foi encontrado!')
}else{
console.log(`O valor 8 está na posição ${pos}`)
}
