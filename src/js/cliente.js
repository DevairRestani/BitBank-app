$(document).ready(function(){
    const cookie = getCookie("id");

    if(cookie === ""){
        window.alert("Sessão invalida.");
        window.location.href = "";
        return;
    }

    window.alert("Bem-vindo novamente");
})