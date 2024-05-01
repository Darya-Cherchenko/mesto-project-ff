// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const content = document.querySelector('.content');
const cardList = content.querySelector('.places__list');
const deleteButton = content.querySelector('.card__delete-button');

// @todo: Функция создания карточки
const addCard = (name, link) => {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').setAttribute('src', link);
  cardElement.querySelector('.card__image').setAttribute('alt', name);
  const deleteButton = cardElement.querySelector('.card__delete-button').addEventListener('click', function(){
    deleteCard(cardElement);
  });
  cardList.append(cardElement);
}

// @todo: Функция удаления карточки
function deleteCard(card){
  card.remove();
};

// @todo: Вывести карточки на страницу
function newCard(node, cards) {
  cards.forEach((data) => {
    const fun = addCard(data.name, data.link);
  });
}

newCard(cardList, initialCards);


