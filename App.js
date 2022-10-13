const UserLogin = document.getElementById("Form-User-Login");
const MsgAlert = document.getElementById("MsgAlert");

if (UserLogin) {
    UserLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        if (document.getElementById("Nome").value && document.getElementById("Senha").value) {
            setTimeout(() => {
                MsgAlert.innerHTML = `  <div class='alert alert-success' role='alert'>
                                            Usuario Cadastrado com sucesso !!!
                                        </div>`;
                setTimeout(() => {
                    window.location.reload(1);
                }, "3000")
            }, "1 000")
        } else {
            MsgAlert.innerHTML = `  <div class='alert alert-danger' role='alert'>
                                        Necessario Preencher todos os campos !!!
                                    </div>`;
        }
    });
};