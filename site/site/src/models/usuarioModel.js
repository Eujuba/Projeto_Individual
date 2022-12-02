var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterar(idUsuario, fkIntegrante) {
    var instrucao = `
        UPDATE usuario SET fkIntegrante = '${fkIntegrante}' WHERE id = '${idUsuario}';
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    atualizar(fkIntegrante)
    return database.executar(instrucao);
}

function atualizar(fkIntegrante){
    var instrucao = `
    update integrante set qnt_tirado =  qnt_tirado + 1 where idIntegrante = ${fkIntegrante};
`
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function alterarAlbum(idAlbum){
    var instrucao = `
    update album set qnt_tirado =  qnt_tirado + 1 where idAlbum = ${idAlbum};
`

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}


function dados() {
     instrucao = `
     select nome,qnt_tirado from integrante;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function dados2() {
    instrucao = `
    select nome,qnt_tirado from album;
   `
   console.log("Executando a instrução SQL: \n" + instrucao);
   return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    alterar,
    dados,
    dados2,
    alterarAlbum
};