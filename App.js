const CadUser = document.getElementById("Form-Cad-User");
const LoginUser = document.getElementById("Form-Login-User");
const MsgAlert = document.getElementById("MsgAlert");
const BtnLogoff = document.getElementById("BtnLogoff")

if (CadUser) {
    CadUser.addEventListener("submit", (e) => {
        e.preventDefault();

        let Nome = document.getElementById("Nome");
        let Email = document.getElementById("Email");
        let Senha = document.getElementById("Senha");

        if (Nome.value && Email.value && Senha.value) {
            Nome.style.border = "1px dashed green";
            Email.style.border = "1px dashed green";
            Senha.style.border = "1px dashed green"
            MsgAlert.innerHTML = `  <div class="alert alert-success alert-dismissable">
                                        <b class="alert-link">SUCESSO!</b> Cadastrando Usuario...
                                    </div>`;

            let Users = JSON.parse(localStorage.getItem("Users") || "[]");
            Users.push({
                nomeCad: Nome.value,
                emailCad: Email.value,
                senhaCad: Senha.value
            });
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
        let Email = document.getElementById("Email");
        let Senha = document.getElementById("Senha");

        let UserValid = {
            nome: null,
            email: null,
            senha: null
        }

        if (Nome.value != "" && Email.value != "" && Senha.value != "") {

            Users = JSON.parse(localStorage.getItem("Users"));
            Users.forEach((User) => {
                if (Nome.value == User.nomeCad && Email.value == User.emailCad && Senha.value == User.senhaCad) {
                    UserValid = {
                        nome: User.nomeCad,
                        email: User.emailCad,
                        senha: User.senhaCad
                    }
                }
            });

            if (Nome.value == UserValid.nome && Email.value == UserValid.email && Senha.value == UserValid.senha) {
                let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                localStorage.setItem("token", token);

                localStorage.setItem("UserLogado", JSON.stringify(UserValid));

                Nome.style.border = "1px dashed green";
                Email.style.border = "1px dashed green";
                Senha.style.border = "1px dashed green"
                MsgAlert.innerHTML = `  <div class="alert alert-success alert-dismissable">
                                            <b class="alert-link">SUCESSO!</b> Você Esta Logado!
                                        </div>`;
                setTimeout(() => { window.location.href = "Home.html"; }, "3000");
            } else {
                Nome.style.border = "1px dashed red";
                Email.style.border = "1px dashed red";
                Senha.style.border = "1px dashed red";
                MsgAlert.innerHTML = `  <div class="alert alert-warning alert-dismissable">
                                            <b class="alert-link">ALERTA!</b> Campo Nome ou Senha Incorretos!
                                        </div>`;
            };
        } else {
            Nome.style.border = "1px dashed red";
            Email.style.border = "1px dashed red";
            Senha.style.border = "1px dashed red";
            MsgAlert.innerHTML = `  <div class="alert alert-danger alert-dismissable">
                                        <b class="alert-link">Erro!</b> Por Favor Preencher os Campos!
                                    </div>`;
        };
    });
};
if (BtnLogoff) {
    BtnLogoff.addEventListener("click", () => {
        alert("Tudo bem, Você quer sair certo?");
        localStorage.removeItem("token");
        localStorage.removeItem("UserLogado ");
        window.location.href = "Login.html";
    });
}