const cardTemplate = document.querySelector('#card-template').content; 

function createCard (cardData, onDelete, likeCard, openCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__image').alt = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => {
    onDelete(cardElement);
  });

  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeCard);

  const imageCard = cardElement.querySelector('.card__image');
  const popupImage = document.querySelector('.popup_type_image');
  const bigImage = document.querySelector('.popup__image');
  const titleImagePopup = document.querySelector('.popup__caption');
  imageCard.addEventListener('click', () => {
    openCard(popupImage, cardData, bigImage, titleImagePopup);
  });
  
  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

function likeCard (evt){
  evt.target.classList.toggle('card__like-button_is-active');
}

function openCard (popup, image, imageInPopup, imageTitlePopup){
  imageInPopup.src = image.link;
  imageInPopup.alt = image.name;
  imageTitlePopup.textContent = image.name;
  
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', (evt)=> {
  if (evt.key === 'Escape') {
    popup.classList.remove('popup_is-opened');
  }
});
}

export {createCard, deleteCard, likeCard, openCard};