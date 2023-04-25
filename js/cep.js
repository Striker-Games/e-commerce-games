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