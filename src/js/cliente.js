$(document).ready(function(){
    const cookie = getCookie("id");

    if(cookie === ""){
        window.alert("Sessão invalida.");
        window.location.href = "";
        return;
    }

    window.alert("Bem-vindo novamente");

    const id = getCookie("id");
    const data = { id };

    $.ajax({
      url: "http://131.221.189.3:3333/usuario/recuperar",
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

            document.querySelector("#bitcoin").checked = data.moedas.bch
            document.querySelector("#eth").checked = data.moedas.eth
            document.querySelector("#usdt").checked = data.moedas.usdt
            document.querySelector("#xrp").checked = data.moedas.xrp
            document.querySelector("#bch").checked = data.moedas.bch
            document.querySelector("#link").checked = data.moedas.link
            document.querySelector("#bnb").checked = data.moedas.bnb
            document.querySelector("#ltc").checked = data.moedas.ltc
            document.querySelector("#dot").checked = data.moedas.dot
            document.querySelector("#bsv").checked = data.moedas.bsv
        }
      }
    })
})

const atualizarUsuario = () => {
    const nome = $("#nome").val();
    const documento = $("#documento").val();
    const email = $("#email").val();
    const telefone = $("#telefone").val();
    const tipoPessoa = $("input[name='tipoPessoa']:checked").val();
    const senha = $("#senha").val();
    const moedas = {
      btc: document.querySelector("#bitcoin").checked,
      eth: document.querySelector("#eth").checked,
      usdt: document.querySelector("#usdt").checked,
      xrp: document.querySelector("#xrp").checked,
      bch: document.querySelector("#bch").checked,
      link: document.querySelector("#link").checked,
      bnb: document.querySelector("#bnb").checked,
      ltc: document.querySelector("#ltc").checked,
      dot: document.querySelector("#dot").checked,
      bsv: document.querySelector("#bsv").checked,
    };
    const acesso = true;
    const tipo = "";
    const id = getCookie("id");
    const data = { id, nome, documento, email, telefone, tipoPessoa, senha, moedas, acesso, tipo };
  
    $.ajax({
      url: "http://131.221.189.3:3333/usuario/atualizar",
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