const cadastrar = () => {
    const nome = $("#nome").val();
    const documento = $("#documento").val();
    const email = $("#email").val();
    const telefone = $("#telefone").val();
    const tipoPessoa = $("#tipoPessoa").val();
    const senha = $("#senha").val();

    $.post("http://localhost:3333/usuarios/cadastrar", 
    {
        nome,
        documento,
        email, 
        telefone, 
        tipo: tipoPessoa,
        senha
    },(data) => {
        console.log(data);
    })
};