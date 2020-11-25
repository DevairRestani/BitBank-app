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
  const data = { nome, documento, email, telefone, tipoPessoa, senha, moedas, acesso, tipo };

  $.ajax({
    url: "http://localhost:3333/usuarios/cadastrar",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(data),
    complete: function(xhr, textStatus) {
        if(xhr.status === 400){
            window.location = "/src/telas/ClienteBitbank.html"
        }
    },
    success: function(data, textStatus, xhr) {
        console.log(xhr.status);
        console.log(data);
    },
  })
};

const login = () => {
  const email = $("#email").val();
  const senha = $("#senha").val();
  const data = { email, senha };

  $.ajax({
    url: "http://localhost:3333/login",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(data),
    complete: function(xhr, textStatus) {
        if(xhr.status === 400){
            window.location = "/src/telas/ClienteBitbank.html"
        }
    },
    success: function(data, textStatus, xhr) {
        console.log(xhr.status);
        console.log(data.tipo = "usr");
    },
  })
};
