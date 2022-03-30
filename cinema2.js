const catalogo = require('./catalogo');

const cinema = "CineHouse";
console.log(cinema);

function adicionarFilme(titulo, duracao, atores, anoDeLancamento, emCartaz){
    const novoFilme = {
        codigo: catalogo.length + 1,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz,
    }
    catalogo.push(novoFilme);
    console.log(`O filme cod: ${novoFilme.codigo}, nome: ${novoFilme.titulo}, foi cadastro com sucesso`);
    console.table(catalogo);
    let separador = '.';
    console.log(separador.repeat(120));
}

adicionarFilme('Matrix', 4, ['Keanu Reeves', 'teste'], 2022, true);
adicionarFilme('teste', 7, ['teste', 'teste'], 2022, true);

function buscarFilme(cod){
    for(let i=0; i<catalogo.length; i++){
        if(catalogo[i].codigo == cod){
            return catalogo[i];
        }
    }
    console.log('Filme não encontrado');

    /* const filmeProcurado = catalogo[cod - 1];
    if(!filmeProcurado){
        console.log('Filme não encontrado');
    }else{
        console.log(filmeProcurado)
    } */
} 
console.log('Buscando o filme:')
console.log(buscarFilme(10));

function alterarStatusEmCartaz(cod){
    for(let i=0; i<catalogo.length; i++){
        if(catalogo[i].codigo == cod){
            if(catalogo[i].emCartaz == true){
                catalogo[i].emCartaz = false
            }else{
                catalogo[i].emCartaz = true
            } 
        }
    
    }
}
console.table(catalogo);
//Alterando status do filme cód 2
alterarStatusEmCartaz(2);
console.table(catalogo);