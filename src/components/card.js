const cardTemplate = document.querySelector('#card-template').content; 

function createCard (cardData, onDelete, likeCard, openCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const imageCard = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__title').textContent = cardData.name;
  imageCard.src = cardData.link;
  imageCard.alt = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => {
    onDelete(cardElement);
  });

  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeCard);
  
  imageCard.addEventListener('click', () => {
    openCard(cardData);
  });
  
  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

function likeCard (evt){
  evt.target.classList.toggle('card__like-button_is-active');
}

export {createCard, deleteCard, likeCard};