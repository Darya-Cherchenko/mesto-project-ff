import './pages/index.css';
import { initialCards } from './components/cards.js';
import { createCard, deleteCard, likeCard, openCard } from './components/card.js';
import { closeModalEsc, closeModalOverlay, openModal, closeModal } from './components/modal.js';

const cardNew = document.querySelector('.places__list');
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const newPlaceButton = document.querySelector('.profile__add-button');
const newPlacePopup = document.querySelector('.popup_type_new-card');
const content = document.querySelector('.content');
const cardsContainer = content.querySelector('.places__list');
const formElement = document.querySelector('.popup__form');
const formPlace = document.forms['new-place'];
const imagePopup = document.querySelector('.popup_type_image');
const closeButton = document.querySelectorAll('.popup__close');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const nameCard = formPlace.querySelector('.popup__input_type_card-name');
const urlCard = formPlace.querySelector('.popup__input_type_url');


function handleFormSubmit(evt) {
  evt.preventDefault(); 

  const titleProfile = document.querySelector('.profile__title');
  const descriptionProfile = document.querySelector('.profile__description');

  titleProfile.textContent = nameInput.value;
  descriptionProfile.textContent = jobInput.value;
  
  closeModal(evt.target.closest('.popup_is-opened'));
}
formElement.addEventListener('submit', handleFormSubmit); 

function addNewCard(evt) {
  evt.preventDefault(); 

  const newCardData = {
    name: nameCard.value,
    link: urlCard.value
  }
  
  const newCard = createCard(newCardData, deleteCard, likeCard);
  console.log(cardNew);
  cardNew.prepend(newCard);

  closeModal(evt.target.closest('.popup_is-opened'));
}
formPlace.addEventListener('submit', addNewCard); 

function renderInitialCards(cards) {
  cards.forEach((data) => {
    const card = createCard(data, deleteCard, likeCard, openCard);
    cardsContainer.append(card); 
  });
}
renderInitialCards(initialCards);

editButton.addEventListener('click', function(){
    openModal(editPopup);
});

editPopup.addEventListener('click', function(evt){
  closeModalOverlay(evt);
})

newPlaceButton.addEventListener('click', function(){
  openModal(newPlacePopup);
});

newPlacePopup.addEventListener('click', function(evt){
  closeModalOverlay(evt);
});

imagePopup.addEventListener('click', function(evt){
  closeModalOverlay(evt);
});

closeButton.forEach((button) =>{
  const parentPopup = button.closest('.popup');
  button.addEventListener('click', function(){
  closeModal(parentPopup);
  });
});