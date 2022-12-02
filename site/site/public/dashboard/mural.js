 atualizarFeed();
  b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

  function limparFormulario() {
    document.getElementById("form_postagem").reset();
  }

  var idUsuario = sessionStorage.ID_USUARIO;

  function publicar() {
    var corpo = {
      titulo: form_postagem.titulo.value,
      descricao: form_postagem.descricao.value,
    };

    if (corpo.titulo == "" || corpo.descricao == "") {
      alert("Preencha todos os campos!");
      return false;
    }

    fetch(`/comentarios/publicar/${idUsuario}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(corpo),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          window.alert(
            "Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!"
          );
          // window.location = "/dashboard/mural.html";
          limparFormulario();
        } else if (resposta.status == 404) {
          window.alert("Deu 404!");
        } else {
          throw (
            "Houve um erro ao tentar realizar a postagem! Código da resposta: " +
            resposta.status
          );
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
  }

  function editar(idComentario) {
    sessionStorage.ID_POSTAGEM_EDITANDO = idComentario;
    console.log("cliquei em editar - " + idComentario);
    window.alert(
      "Você será redirecionado à página de edição do aviso de id número: " +
        idComentario
    );
    window.location = "/dashboard/edicao-aviso.html";
  }

  function deletar(idComentario) {
    console.log("Criar função de apagar post escolhido - ID" + idComentario);
    fetch(`/comentarios/deletar/${idComentario}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (resposta) {
        if (resposta.ok) {
          window.alert(
            "Post deletado com sucesso pelo usuario de email: " +
              sessionStorage.getItem("EMAIL_USUARIO") +
              "!"
          );
          window.location = "/dashboard/mural.html";
        } else if (resposta.status == 404) {
          window.alert("Deu 404!");
        } else {
          throw (
            "Houve um erro ao tentar realizar a postagem! Código da resposta: " +
            resposta.status
          );
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }

  function atualizarFeed() {
    //aguardar();
    fetch("/comentarios/listar")
      .then(function (resposta) {
        if (resposta.ok) {
          if (resposta.status == 204) {
            var feed = document.getElementById("feed_container");
            var mensagem = document.createElement("span");
            mensagem.innerHTML = "Nenhum resultado encontrado.";
            feed.appendChild(mensagem);
            throw "Nenhum resultado encontrado!!";
          }

          resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", resposta);

            // Map passa por cada item do array de objetos
            // Verificando se em cada item o fkIntegrante é igual ao idUsuario (que pegamos do sessionStorage)
            resposta.map(function (item) {
              if (item.fkUsuario == idUsuario) {
                document.getElementById("btn-enviar").style.pointerEvents = "none";
                document.getElementById("btn-enviar").innerHTML = "Você já postou!";
              }
            });

            var feed = document.getElementById("feed_container");
            feed.innerHTML = "";
            for (let i = 0; i < resposta.length; i++) {
              var publicacao = resposta[i];

              // criando e manipulando elementos do HTML via JavaScript
              var divPublicacao = document.createElement("div");
              var spanID = document.createElement("span");
              var spanTitulo = document.createElement("span");
              var spanNome = document.createElement("span");
              var divDescricao = document.createElement("div");
              var divButtons = document.createElement("div");
              var btnEditar = document.createElement("button");
              var btnDeletar = document.createElement("button");

              spanID.innerHTML = "ID: <b>" + publicacao.idComentario + "</b>";
              spanTitulo.innerHTML = "Título: <b>" + publicacao.titulo + "</b>";
              spanNome.innerHTML = "Autor: <b>" + publicacao.nome + "</b>";
              divDescricao.innerHTML =
                "Descrição: <b>" + publicacao.descricao + "</b>";
              btnEditar.innerHTML = "Editar";
              btnDeletar.innerHTML = "Deletar";

              divPublicacao.className = "publicacao";
              spanTitulo.id = "inputNumero" + publicacao.idComentario;
              spanNome.className = "publicacao-nome";
              spanTitulo.className = "publicacao-titulo";
              divDescricao.className = "publicacao-descricao";

              divButtons.className = "div-buttons";

              btnEditar.className = "publicacao-btn-editar";
              btnEditar.id = "btnEditar" + publicacao.idComentario;
              btnEditar.setAttribute(
                "onclick",
                `editar(${publicacao.idComentario})`
              );

              btnDeletar.className = "publicacao-btn-editar";
              btnDeletar.id = "btnDeletar" + publicacao.idComentario;
              btnDeletar.setAttribute(
                "onclick",
                `deletar(${publicacao.idComentario})`
              );

              divPublicacao.appendChild(spanID);
              divPublicacao.appendChild(spanNome);
              divPublicacao.appendChild(spanTitulo);
              divPublicacao.appendChild(divDescricao);
              divPublicacao.appendChild(divButtons);
              divButtons.appendChild(btnEditar);
              divButtons.appendChild(btnDeletar);
              feed.appendChild(divPublicacao);
            }
          });
        } else {
          throw "Houve um erro na API!";
        }
      })
      .catch(function (resposta) {
        console.error(resposta);
      });
  }

  function testar() {
    var formulario = new URLSearchParams(
      new FormData(document.getElementById("form_postagem"))
    );

    var divResultado = document.getElementById("div_feed");

    divResultado.appendChild(
      document.createTextNode(formulario.get("descricao"))
    );
    divResultado.innerHTML = formulario.get("descricao");

    return false;
  }