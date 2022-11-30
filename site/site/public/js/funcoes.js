// sessão
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var fkIntegrante = sessionStorage.PERSONA_USUARIO;


    var b_usuario = document.getElementById("b_usuario");

    if (email != undefined && nome != undefined && fkIntegrante != undefined) {
        window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;
        b_fkIntegrante.innerHTML = fkIntegrante;
        


    } else {
        window.location = "../login/login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login/login.html";
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

