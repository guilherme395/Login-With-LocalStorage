const CadUser = document.getElementById("Form-Cad-User");
const LoginUser = document.getElementById("Form-Login-User");
const MsgAlert = document.getElementById("MsgAlert");

if (CadUser) {
    CadUser.addEventListener("submit", (e) => {
        e.preventDefault();

        let Nome = document.getElementById("Nome");
        let Senha = document.getElementById("Senha");

        if (Nome.value && Senha.value) {
            MsgAlert.innerHTML = `  <div class='alert alert-success' role='alert'>
                                        Sucesso: Cadastrando Usuario...
                                    </div>`;

            let Users = JSON.parse(localStorage.getItem("Users") || "[]");
            Users.push({ nomeCad: Nome.value, senhaCad: Senha.value });
            localStorage.setItem("Users", JSON.stringify(Users));

            setTimeout(() => { window.location.href = "./Login.html"; }, "3000");
        } else {
            MsgAlert.innerHTML = `  <div class='alert alert-danger' role='alert'>
                                        Erro: Necessario Preencher todos os campos !!!
                                    </div>`;
        }
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

        if (Nome.value != null && Senha.value != null) {

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
                let Token = Math.random().toString(16).substring(2);
                console.log(Token);
                MsgAlert.innerHTML = `  <div class='alert alert-success' role='alert'>
                                            Sucesso: Usuario Logado...
                                        </div>`;
                setTimeout(() => { window.location.href = "Home.html"; }, "3000");
            } else {
                Nome.style.border = "1px solid red";
                Senha.style.border = "1px solid red";
                MsgAlert.innerHTML = `  <div class='alert alert-warning' role='alert'>
                                            Erro: Os Dados Informados Estão Incorretos...
                                        </div>`;
            }
        } else {
            Nome.style.border = "1px solid red";
            Senha.style.border = "1px solid red";
            MsgAlert.innerHTML = `  <div class='alert alert-danger' role='alert'>
                                        Erro: Por Favor, Preencher Os Campos Nome e Senha...
                                    </div>`;
        }
    });
};