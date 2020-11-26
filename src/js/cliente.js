$(document).ready(function(){
    const cookie = getCookie("id");

    if(cookie === ""){
        window.alert("Sessão invalida.");
        window.location.href = "";
        return;
    }

    window.alert("Bem-vindo novamente");
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
      url: "http://131.221.189.3:3333/usuario/atualizarUsuario",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(data),
      complete: function(xhr, textStatus) {
          if(xhr.status === 400){
            console.log(xhr.status);
          }
      },
      success: function(data, textStatus, xhr) {
          console.log(xhr.status);
          console.log(data);
          if(xhr.status === 202){
            console.log("Informações atualizadas")
        }
      },
    })
};