const url = 'http://localhost:8080/api/clientes';

async function dadosUsuario() {
  const name = document.getElementById('nome');
  const senha = document.getElementById('senha');
  const email = document.getElementById('email');
  const phone = document.getElementById('telefone');
  const cpf = document.getElementById('cpf');
  const cep = document.getElementById('cep');
  const bairro = document.getElementById('bairro');
  const cidade = document.getElementById('cidade');
  const logradouro = document.getElementById('logradouro');

  try {
    const response = await fetch(url);
    const json = await response.json();

    name.value = json[0].nome;
    cpf.value = json[0].cpf;
    email.value = json[0].email;
    phone.value = json[0].telefone;
    cep.value = json[0].cep;
    bairro.value = json[0].bairro;
    cidade.value = json[0].cidade;
    logradouro.value = json[0].logradouro;
    senha.value = json[0].senha;
  } catch (error) {
    console.log(error);
  }
}

dadosUsuario();
