import { addLike, deleteLike} from './api';
import { openModal } from './modal';

const cardTemplate = document.querySelector('#card-template').content; 
const deletePopup = document.querySelector('.popup_type_delete-card');


function createCard (cardData, userId, onDelete, likeCard, openCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const imageCard = cardElement.querySelector('.card__image');
  cardElement.dataset.cardId = cardData._id;
  cardElement.querySelector('.card__title').textContent = cardData.name;
  imageCard.src = cardData.link;
  imageCard.alt = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  if (cardData.owner._id === userId){
    deleteButton.addEventListener('click', () => {
      onDelete(cardElement, cardData._id);
    });
  } else {
    deleteButton.remove();
  }

  const likeButton = cardElement.querySelector('.card__like-button');
  const likeCounter = cardElement.querySelector('.card__like-counter');
  likeCounter.textContent = cardData.likes.length;
  const isLiked = cardData.likes.some((like) => like._id === userId);
  if (isLiked) {
    likeButton.classList.add("card__like-button_is-active");
  }

  likeButton.addEventListener('click', (evt) => {
    likeCard(evt, cardData._id)});
  
  imageCard.addEventListener('click', () => {
    openCard(cardData);
  });
  
  return cardElement;
};

function likeCard (evt, cardId){
  // evt.target.classList.toggle('card__like-button_is-active');
  let counterLikes = evt.target.parentNode.querySelector('.card__like-counter');
  // let cardId = counterLikes.parentNode._id;
  // console.log(cardId);
  if (evt.target.classList.contains("card__like-button_is-active")) {
    deleteLike(cardId)
      .then((сard) => {
        evt.target.classList.toggle("card__like-button_is-active");
        counterLikes.textContent = сard.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    addLike(cardId)
      .then((сard) => {
        evt.target.classList.toggle("card__like-button_is-active");
        counterLikes.textContent = сard.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

function deleteCard(evt, cardId) {
  openModal(deletePopup);
  deletePopup.dataset.cardId = cardId;
};

export {createCard, deleteCard, likeCard};