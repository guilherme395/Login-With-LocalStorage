const CadUser = document.getElementById("Form-Cad-User");
const MsgAlert = document.getElementById("MsgAlert");

if (CadUser) {
    CadUser.addEventListener("submit", (e) => {
        e.preventDefault();

        let Nome = document.getElementById("Nome");
        let Senha = document.getElementById("Senha");

        if (Nome.value && Senha.value) {
            MsgAlert.innerHTML = `  <div class='alert alert-success' role='alert'>
                                            Cadastrado Usuario...
                                        </div>`;

            let Users = JSON.parse(localStorage.getItem("Users") || "[]");
            Users.push({ nomeCad: Nome.value, senhaCad: Senha.value });
            localStorage.setItem("Users", JSON.stringify(Users));

            setTimeout(() => { window.location.href = "./Login.html"; }, "3000");
        } else {
            MsgAlert.innerHTML = `  <div class='alert alert-danger' role='alert'>
                                        Necessario Preencher todos os campos !!!
                                    </div>`;
        }
    });
};