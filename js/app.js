async function produtosFetch(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

const search = document.querySelector('.input-search');
const lista = document.querySelector('.output');

search.addEventListener('input', filter);

async function filter({ target }) {
  const produtos = await produtosFetch('products.json');
  const result = produtos.items.filter((item) =>
    item.fields.title.toLowerCase().includes(target.value.toLowerCase()),
  );

  const procurar = target.value.toLowerCase();
  if (procurar.length === 0) {
    lista.innerHTML = '';
    return;
  }

  displayResults(result);
}

function displayResults(items) {
  lista.innerHTML = '';

  items.forEach((item) => {
    const title = item.fields.title;
    const price = item.fields.price;
    const img = item.fields.image.fields.file.url;
    const link = item.fields.link;

    const resultItem = document.createElement('div');
    resultItem.innerHTML = `<a href="${link}" class="a-input">
    <p class="text-input">${title}</p> 
    <img class="img-input" src="${img}" alt="">
    </a>`;

    lista.appendChild(resultItem);
  });
}
