$(document).ready(function(){
    const cookie = getCookie("id");

    if(cookie === ""){
        window.alert("Sessão invalida.");
        window.location.href = "";
        return;
    }

    const id = getCookie("id");
    const data = { id };

    $.ajax({
      url: "http://localhost:3333/usuario/recuperarAdmin",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(data),
      complete: function(xhr, textStatus) {
          if(xhr.status === 400){
            window.alert("Erro ao recuperar o cadastro.");
          }
      },
      success: function(data, textStatus, xhr) {
          if(xhr.status === 200){

            console.log(data);

            $("#nome").val(data.nome);
            $("#documento").val(data.documento);
            $("#email").val(data.email);
            $("#telefone").val(data.telefone);
        }
      }
    })
})

const atualizarAdmin = () => {
    const nome = $("#nome").val();
    const documento = $("#documento").val();
    const email = $("#email").val();
    const telefone = $("#telefone").val();
    const tipoPessoa = $("input[name='tipoPessoa']:checked").val();
    const senha = $("#senha").val();
    const acesso = true;
    const tipo = "";
    const id = getCookie("id");
    const data = { id, nome, documento, email, telefone, tipoPessoa, senha, acesso, tipo };
  
    $.ajax({
      url: "http://localhost:3333/usuario/atualizarAdmin",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(data),
      complete: function(xhr, textStatus) {
          if(xhr.status === 400){
            window.alert("Erro ao atualizar o cadastro.");
          }
      },
      success: function(data, textStatus, xhr) {
          if(xhr.status === 200){
            window.alert("Informações atualizadas");
        }
      },
    })
};

const sairAdmin = () => {

  const id = getCookie("id");
  const data = { id };

  $.ajax({
    url: "http://localhost:3333/usuario/sairAdmin",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(data),
    complete: function(xhr, textStatus) {
        if(xhr.status === 400){
          window.alert("Erro ao sair.");
        }
    },
    success: function(data, textStatus, xhr) {
        if(xhr.status === 200){
          deleteCookie(id); 
          window.location = "../../index.html";
      }
    },
  })
};