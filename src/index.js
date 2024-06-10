import './pages/index.css';
import { initialCards } from './components/cards.js';
import { createCard, deleteCard, likeCard } from './components/card.js';
import { closeModalOverlay, openModal, closeModal } from './components/modal.js';
import { enableValidation, clearValidation, validationConfig } from './components/validation.js';
import { userGet, getInitialCards, cardsGet, cardsPost, userPatch, cardsDelete, addLike, deleteLike, avatarPatch  } from './components/api.js';

const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const newPlaceButton = document.querySelector('.profile__add-button');
const newPlacePopup = document.querySelector('.popup_type_new-card');
const content = document.querySelector('.content');
const cardsContainer = content.querySelector('.places__list');
const formProfile = document.forms['edit-profile'];
const formPlace = document.forms['new-place'];
const imagePopup = document.querySelector('.popup_type_image');
const closeButtons = document.querySelectorAll('.popup__close');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_description');
const nameCard = formPlace.querySelector('.popup__input_type_card-name');
const urlCard = formPlace.querySelector('.popup__input_type_url');
const titleProfile = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__description');
const bigImage = document.querySelector('.popup__image');
const titleImagePopup = document.querySelector('.popup__caption');
const userImage = document.querySelector('.profile__image');

enableValidation(validationConfig);



function handleFormEditSubmit(evt) {
  evt.preventDefault(); 

  titleProfile.textContent = nameInput.value;
  descriptionProfile.textContent = jobInput.value; 
  
  closeModal(editPopup);
}
formProfile.addEventListener('submit', handleFormEditSubmit); 

function addNewCard(evt) {
  evt.preventDefault(); 

  const newCardData = {
    name: nameCard.value,
    link: urlCard.value
  }
  
  const newCard = createCard(newCardData, deleteCard, likeCard, openCard);
  cardsContainer.prepend(newCard);

  formPlace.reset();

  closeModal(newPlacePopup);
}
formPlace.addEventListener('submit', addNewCard); 

const openCard = (image)=>{
  bigImage.src = image.link;
  bigImage.alt = image.name;
  titleImagePopup.textContent = image.name;
  
  openModal(imagePopup);
}

function renderInitialCards(cards) {
  cards.forEach((data) => {
    const card = createCard(data, deleteCard, likeCard, openCard);
    cardsContainer.append(card); 
  });
}

editButton.addEventListener('click', function(){
    clearValidation(formProfile);
    openModal(editPopup);
    nameInput.value = titleProfile.textContent;
    jobInput.value = descriptionProfile.textContent; 
});

editPopup.addEventListener('click', closeModalOverlay);

newPlaceButton.addEventListener('click', function(){
  clearValidation(formPlace);
  openModal(newPlacePopup);
});

newPlacePopup.addEventListener('click', closeModalOverlay);

imagePopup.addEventListener('click', closeModalOverlay);

closeButtons.forEach((button) =>{
  const parentPopup = button.closest('.popup');
  button.addEventListener('click', function(){
  closeModal(parentPopup);
  });
});

const userId = '';
function userInfo(user) {
  titleProfile.textContent = user.name;
  descriptionProfile.textContent = user.about;
  userImage.setAttribute("style", `background-image: url('${user.avatar}')`);
  // userId = user._id;
}

Promise.all([userGet(), cardsGet()])
  .then(([user, cards]) => {
    titleProfile.textContent = user.name;
    descriptionProfile.textContent = user.about;
    user.avatar;
    renderInitialCards(cards);
  })
  .catch((err) => {
    console.log("Ошибка - данные не получены", err);
  });
  