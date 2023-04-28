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
  const email = document.getElementById('email').value;
  const phone = document.getElementById('telefone').value;
  const cpf = document.getElementById('cpf').value;

  const requestBody = {
    name: name,
    email: email,
    phone: phone,
    cpf: cpf,
  };

  const url = 'http://localhost:8080/pethotel/client';

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
      window.location.href = './index.html';
    }
    console.log(dataJson);
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
}
