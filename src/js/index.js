const cadastrar = () => {
  const nome = $("#nome").val();
  const documento = $("#documento").val();
  const email = $("#email").val();
  const telefone = $("#telefone").val();
  const tipoPessoa = $("input[name='tipoPessoa']:checked").val();
  const senha = $("#senha").val();
  const moedas = {
    btc: "",
    eth: "",
    usdt: "",
    xrp: "",
    bch: "",
    link: "",
    bnb: "",
    ltc: "",
    dot: "",
    bsv: "",
  };
  const acesso = true;
  const tipo = "";
  const data = {
    nome,
    documento,
    email,
    telefone,
    tipoPessoa,
    senha,
    moedas,
    acesso,
    tipo,
  };

  $.ajax({
    url: "http://localhost:3333/usuarios/cadastrar",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(data),
    complete: function (xhr, textStatus) {
      if (xhr.status === 400) {
        window.alert("Erro ao salvar realizar o cadastro");
        window.alert(textStatus);
      }
    },
    success: function (data, textStatus, xhr) {
      console.log(data);

      if (xhr.status === 201) {
        window.alert("Cadastro realizado com sucesso.");

        $("#nome").val("");
        $("#documento").val("");
        $("#email").val("");
        $("#telefone").val("");
        $("#senha").val("");

        $("#entrar").click();
      }
    },
  });
};

const login = () => {
  const email = $("#emailLogin").val();
  const senha = $("#senhaLogin").val();
  const data = { email, senha };

  $.ajax({
    url: "http://localhost:3333/login",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(data),
    complete: function (xhr, textStatus) {
      if (xhr.status === 400) {
        window.alert("Erro ao realizar o login");
        window.alert(textStatus);
      }
    },
    success: function (data, textStatus, xhr) {
      if(xhr.status === 202){
        console.log(data);
        if(!data.usuario.id){
          window.alert("Ocorreu um erro ao realizar o login");
          return;
        }
        setCookie("id", data.usuario.id, 1/24);

        if(data.usuario.tipo === "usr"){
          window.location = "/src/telas/ClienteBitbank.html";
        }else{
          window.location = "/src/telas/AdministradorBitbank.html";
        }
      }
    },
  });
};

$(document).ready(function () {
  $("#documento").mask("000.000.000-00");
  $("#telefone").mask("(00) 00000-0000");
  $("#email").mask("A", {
    translation: {
      A: { pattern: /[\w@\-.+]/, recursive: true },
    },
  });
  $("#emailLogin").mask("A", {
    translation: {
      A: { pattern: /[\w@\-.+]/, recursive: true },
    },
  });
});
