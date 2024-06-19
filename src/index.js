import './pages/index.css';
import { initialCards } from './components/cards.js';
import { createCard, deleteCard, likeCard } from './components/card.js';
import { closeModalOverlay, openModal, closeModal } from './components/modal.js';
import { enableValidation, clearValidation, validationConfig } from './components/validation.js';
import { userGet, cardsGet, cardsPost, userPatch, cardsDelete, avatarPatch  } from './components/api.js';

const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const newPlaceButton = document.querySelector('.profile__add-button');
const newPlacePopup = document.querySelector('.popup_type_new-card');
const content = document.querySelector('.content');
const cardsContainer = content.querySelector('.places__list');
const formProfile = document.forms['edit-profile'];
const formPlace = document.forms['new-place'];
const formDeleteCard = document.forms['delete-card'];
const formAvatar = document.forms['avatar'];
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
const avatarPopup = document.querySelector('.popup_type_avatar');
const deletePopup = document.querySelector('.popup_type_delete-card');

let userId = ' ';

enableValidation(validationConfig);

const loading = (isLoading, button) => {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};

const openCard = (image)=>{
  bigImage.src = image.link;
  bigImage.alt = image.name;
  titleImagePopup.textContent = image.name;
  
  openModal(imagePopup);
}

function handleFormEditSubmit(evt) {
  evt.preventDefault(); 
  loading(true, formProfile.querySelector(".popup__button"));
  userPatch({
    name: nameInput.value,
    about: jobInput.value
  })
  .then((updateUserInfo) => {
    titleProfile.textContent = updateUserInfo.name;
    descriptionProfile.textContent = updateUserInfo.about; 
    
    closeModal(editPopup);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loading(false, formProfile.querySelector(".popup__button"));
  });
}
formProfile.addEventListener('submit', handleFormEditSubmit); 

function handleFormAvatarSubmit(evt) {
  evt.preventDefault(); 
  loading(true, formAvatar.querySelector(".popup__button"));
  avatarPatch(formAvatar.link.value)
  .then((updateAvatar) => {
    userImage.style.background = `url(${updateAvatar.avatar})`;
    
    closeModal(avatarPopup);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loading(false, formAvatar.querySelector(".popup__button"));
  });
}
formAvatar.addEventListener('submit', handleFormAvatarSubmit); 

function addNewCard(evt) {
  evt.preventDefault(); 
  loading(true, formPlace.querySelector(".popup__button"));
  const newCardData = {
    name: nameCard.value,
    link: urlCard.value
  }

  cardsPost(newCardData)
  .then((cardInfo) => {
    const newCard = createCard(cardInfo, userId, deleteCard, likeCard, openCard);
    cardsContainer.prepend(newCard);
  
    formPlace.reset();
  
    closeModal(newPlacePopup);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loading(false, formPlace.querySelector(".popup__button"));
  }); 
}
formPlace.addEventListener('submit', addNewCard); 

function renderInitialCards(cards) {
  cards.forEach((data) => {
    const card = createCard(data, userId, deleteCard, likeCard, openCard);
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

userImage.addEventListener('click', () => {
  clearValidation(formAvatar);
  openModal(avatarPopup);
})

avatarPopup.addEventListener('click', closeModalOverlay);

newPlacePopup.addEventListener('click', closeModalOverlay);

imagePopup.addEventListener('click', closeModalOverlay);

deletePopup.addEventListener('click', closeModalOverlay);

function deleteMyCard (evt) {
  evt.preventDefault(); 

  cardsDelete(deletePopup.dataset.cardId)
  .then(() => {
    const card = document.querySelector(
      `[data-card-id="${deletePopup.dataset.cardId}"]`,
    );
    console.log(card);
    card.remove();
    closeModal(deletePopup);
  })
  .catch((err) => {
    console.log(err);
  });
}
formDeleteCard.addEventListener('submit', deleteMyCard);

closeButtons.forEach((button) =>{
  const parentPopup = button.closest('.popup');
  button.addEventListener('click', function(){
  closeModal(parentPopup);
  });
});

Promise.all([userGet(), cardsGet()])
  .then(([user, cards]) => {
    userId = user._id;
    titleProfile.textContent = user.name;
    descriptionProfile.textContent = user.about;
    userImage.style.background = `url(${user.avatar})`;
    renderInitialCards(cards);
  })
  .catch((err) => {
    console.log("Ошибка - данные не получены", err);
  });
  