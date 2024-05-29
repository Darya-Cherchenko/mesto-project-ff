function createCard (cardData, onDelete, likeCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__image').alt = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
console.log(deleteButton);
  deleteButton.addEventListener('click', () => {
    onDelete(cardElement);
  });

  const likeButton = cardElement.querySelector('card__like-button');
  likeButton.addEventListener('click', function(){
    likeCard();
  });
  // const openCard = cardElement.querySelector('.card__image');
  // openCard.addEventListener('click', function(){
  //   openImage(cardData);
  // })
  
  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

function likeCard (evt){
  evt.target.classList.toggle('card__like-button_is-active');
}

export {createCard, deleteCard, likeCard};