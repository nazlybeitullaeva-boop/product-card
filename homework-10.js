import { products } from "./products.js";

const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

function askCardsCount() {
  const answer = prompt('Сколько карточек отобразить? От 1 до 5');
  const count = Number(answer);

  if (Number.isInteger(count) && count >= 1 && count <= 5) {
    return count;
  }

  alert('Нужно ввести целое число от 1 до 5');
  return 0;
}

function renderProducts(productsToRender) {
  productList.innerHTML = '';

  productsToRender.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);

    const image = productClone.querySelector('.card__image');
    image.src = product.image;
    image.alt = product.name;

    productClone.querySelector('.card__label').textContent = product.skinType;
    productClone.querySelector('.card__title').textContent = product.name;
    productClone.querySelector('.card__description').textContent = product.description;
    productClone.querySelector('.card__price').textContent = `${product.price.toLocaleString('ru-RU')} ${product.currency}`;

    const compositionList = productClone.querySelector('.card__composition-list');
    product.composition.forEach(ingredient => {
      const item = document.createElement('li');
      item.classList.add('card__composition-list-item');
      item.textContent = ingredient;
      compositionList.appendChild(item);
    });

    productList.appendChild(productClone);
  });
}

const cardsCount = askCardsCount();
renderProducts(products.slice(0, cardsCount));

const productDescriptions = products.reduce((result, product) => {
  result.push({ [product.name]: product.description });
  return result;
}, []);

console.log(productDescriptions);

