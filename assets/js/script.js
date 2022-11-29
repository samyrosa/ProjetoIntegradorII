// Verificando os campos do formulario de Cadastro
function VerificarCadastro() {
    var nome = document.getElementById('NomeCadastro').value
    var sobrenome = document.getElementById('SobreCadastro').value
    var email = document.getElementById('EmailCadastro').value
    var dataN = document.getElementById('DNCadastro').value
    var cpf = document.getElementById('cpfCadastro').value
    var senha = document.getElementById('Senha').value
    var senhaC = document.getElementById('ConfCadastro').value

    if (nome == "" || sobrenome == "" || email == "" || dataN == "" || cpf == "" || senha == "" || senhaC == "") {
        swal("Cuidado!", "Preencha todos os campos.", "warning");
        return;
    } else {
        swal("Bem-Vindo ao Clube do Porto!", "Seu cadastro foi realizado com sucesso.", "success");
    }
}

// Verificando os campos do formulario de Contato
function VerificarContato() {
    var nomeC = document.getElementById('NomeContato').value
    var emailC = document.getElementById('EmailContato').value
    var telefone = document.getElementById('TelefoneContato').value
    var msg = document.getElementById('MgsContato').value

    if (nomeC == "" || emailC == "" || telefone == "" || msg == "") {
        swal("Cuidado!", "Preencha todos os campos.", "warning");
        return;
    } else {
        swal("Feedback enviado!", "Sua mensagem foi enviada com sucesso.", "success");
    }
}

// Verificando os campos do formulario de Login
function VerificarLogin() {
    var emailL = document.getElementById('emailLogin').value
    var senhaL = document.getElementById('senhaLogin').value

    if (emailL == "" || senhaL == "") {
        swal("Cuidado!", "Preencha todos os campos.", "warning");
        return;
    } else {
        swal("Bem-Vindo", "Seu login foi realizado com sucesso.", "success");
    }
}