const UserLogin = document.getElementById("Form-User-Login");

if (UserLogin) {
    UserLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        if (document.getElementById("Nome").value && document.getElementById("Senha").value ) {
            console.log("Por enquanto ta tudo certo meu brother !!!!");
        }else{
            alert("Por Favor Preencher todos os capos !!!");
        }
    });
};