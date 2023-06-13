const btn = document.querySelector('.botao-iniciar');

function verify() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');

  email.addEventListener('input', verificarLogin);
  senha.addEventListener('input', verificarLogin);

  let usuario = '';
  let usuarioSenha = '';

  async function verificarLogin() {
    const verificarEmail = email.value;
    const verificarSenha = senha.value;
    const url = 'http://localhost:8080/api/clientes';

    try {
      const response = await fetch(url);
      const json = await response.json();

      const dados = json.map((dado) => {
        if (dado.email === verificarEmail && dado.senha === verificarSenha) {
          usuario = dado.email;
          usuarioSenha = dado.senha;
        } else {
          return;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  btn.addEventListener('click', handleClick);

  function handleClick(e) {
    e.preventDefault();

    if (usuario && usuarioSenha) {
      alert('Login Efetuado!');
      window.location.href = './usuarioLogado.html';
    } else {
      alert('Informacoes incorretas.');
    }
  }
}

verify();
