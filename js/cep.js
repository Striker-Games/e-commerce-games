const inputCep = document.getElementById('cep');
const btn = document.getElementById('btn');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const logradouro = document.getElementById('logradouro');

function handleClick(e) {
  e.preventDefault();
  const cep = inputCep.value;
  fetchCep(`https://viacep.com.br/ws/${cep}/json/`);
}

async function fetchCep(url) {
  try {
    const dadosCep = await fetch(url);
    const cepJson = await dadosCep.json();
    bairro.value = cepJson.bairro;
    cidade.value = cepJson.localidade;
    logradouro.value = cepJson.logradouro;
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener('click', handleClick);

const button = document.getElementById('submit');
button.addEventListener('click', registrarCliente);

async function registrarCliente(event) {
  event.preventDefault();

  const name = document.getElementById('nome').value;
  const senha = document.getElementById('senha').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('telefone').value;
  const cpf = document.getElementById('cpf').value;
  const cep = document.getElementById('cep').value;
  const bairro = document.getElementById('bairro').value;
  const cidade = document.getElementById('cidade').value;
  const logradouro = document.getElementById('logradouro').value;
  const complemento = document.getElementById('complemento').value;

  const requestBody = {
    nome: name,
    senha: senha,
    email: email,
    telefone: phone,
    cpf: cpf,
    cep: cep,
    bairro: bairro,
    cidade: cidade,
    bairro: bairro,
    logradouro: logradouro,
    complemento: complemento,
  };

  const url = 'http://localhost:8080/api/clientes';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    const dataJson = await response.json();
    if (response.status === 201) {
      alert('Conta Criada');
      window.location.href = './login.html';
    } else {
      alert('Digite os dados corretamente.');
    }
    console.log(dataJson);
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
}
