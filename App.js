const CadUser = document.getElementById("Form-Cad-User");
const LoginUser = document.getElementById("Form-Login-User");
const MsgAlert = document.getElementById("MsgAlert");

if (CadUser) {
    CadUser.addEventListener("submit", (e) => {
        e.preventDefault();

        let Nome = document.getElementById("Nome");
        let Senha = document.getElementById("Senha");

        if (Nome.value && Senha.value) {
            Nome.style.border = "1px dashed green";
            Senha.style.border = "1px dashed green"
            MsgAlert.innerHTML = `  <div class="alert alert-success alert-dismissable">
                                        <b class="alert-link">SUCESSO!</b> Cadastrando Usuario...
                                    </div>`;

            let Users = JSON.parse(localStorage.getItem("Users") || "[]");
            Users.push({ nomeCad: Nome.value, senhaCad: Senha.value });
            localStorage.setItem("Users", JSON.stringify(Users));

            setTimeout(() => { window.location.href = "./Login.html"; }, "3000");
        } else {
            Nome.style.border = "1px dashed red";
            Senha.style.border = "1px dashed red";
            MsgAlert.innerHTML = `  <div class="alert alert-danger alert-dismissable">
                                        <b class="alert-link">Erro!</b> Por Favor Preencher os Campos!
                                    </div>`;
        };
    });
};

if (LoginUser) {
    LoginUser.addEventListener("submit", (e) => {
        e.preventDefault();

        let Users = [];
        let Nome = document.getElementById("Nome");
        let Senha = document.getElementById("Senha");

        let UserValid = {
            nome: null,
            senha: null
        }

        if (Nome.value != "" && Senha.value != "") {

            Users = JSON.parse(localStorage.getItem("Users"));
            Users.forEach((User) => {
                if (Nome.value == User.nomeCad && Senha.value == User.senhaCad) {
                    UserValid = {
                        nome: User.nomeCad,
                        senha: User.senhaCad
                    }
                }
            });

            if (Nome.value == UserValid.nome && Senha.value == UserValid.senha) {
                let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                localStorage.setItem("token", token);

                Nome.style.border = "1px dashed green";
                Senha.style.border = "1px dashed green"
                MsgAlert.innerHTML = `  <div class="alert alert-success alert-dismissable">
                                            <b class="alert-link">SUCESSO!</b> Você Esta Logado!
                                        </div>`;
                // setTimeout(() => { window.location.href = "Home.html"; }, "3000");
            } else {
                Nome.style.border = "1px dashed red";
                Senha.style.border = "1px dashed red";
                MsgAlert.innerHTML = `  <div class="alert alert-warning alert-dismissable">
                                            <b class="alert-link">ALERTA!</b> Campo Nome ou Senha Incorretos!
                                        </div>`;
            };
        } else {
            Nome.style.border = "1px dashed red";
            Senha.style.border = "1px dashed red";
            MsgAlert.innerHTML = `  <div class="alert alert-danger alert-dismissable">
                                        <b class="alert-link">Erro!</b> Por Favor Preencher os Campos!
                                    </div>`;
        };
    });
};

function Logoff(){
    
}