const dominio = function (url) {
    return 'http://' + url
}

// 1. a gente troca o nome 'function' por => 
const dominio1 = (url) => {
    return 'http://' + url
}

// 2. sempre que a gente somente um parametro, não precisamos usar os parenteses
const dominio2 = url => {
    return 'http://' + url
}

// 3. Se tivermos uma única linha, podemos tirar as chaves e o 'return'
const dominio3 = url => 'http://' + url


function soma(a, b) {
    return a + b
}

const soma = (a, b) => a + b


const lista = [{ nome: 'ian' }, { nome: 'wendel' }, { nome: 'Gabi' }]

const nome = 'wendel'

const resultado = lista.find(pessoa => pessoa.nome == nome)

const resultado2 = lista.find(function (pessoa) {
    return  pessoa.nome == nome
})