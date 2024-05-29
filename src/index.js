import './pages/index.css';
import { initialCards } from './components/cards.js';
import { createCard, deleteCard, likeCard } from './components/card.js';
import { closeModalEsc, closeModalOverlay, openModal, closeModal } from './components/modal.js';

const editForm = document.forms["edit-profile"];
const placeForm = document.forms["new-place"];
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const newPlaceButton = document.querySelector('.profile__add-button');
const newPlacePopup = document.querySelector('.popup_type_new-card');
const content = document.querySelector('.content');
const cardsContainer = content.querySelector('.places__list');



function renderInitialCards(cards) {
  cards.forEach((data) => {
    const card = createCard(data, deleteCard, likeCard);
    cardsContainer.append(card); 
  });
}

renderInitialCards(initialCards);

editButton.addEventListener('click', function(){
//   editPopup.setAttribute('style',
//   `display: flex;
//   visibility: visible;
//   opacity: 1;
//   transition: visibility 0s, opacity 0.5s linear;`
// )
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

const closeButton = document.querySelectorAll('.popup__close');
closeButton.forEach((button) =>{
  const parentPopup = button.closest('.popup');
  console.log(parentPopup);
  button.addEventListener('click', function(){
  closeModal(parentPopup);
});
});