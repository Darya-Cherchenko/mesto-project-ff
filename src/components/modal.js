function closeModalOverlay (evt) {
  if (evt.target === evt.currentTarget){
    closeModal(evt.target);
  }
}

function closeModal(popup){
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalEsc);
}

function openModal(popup){
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeModalEsc);  
}

function closeModalEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closeModal(openedPopup);
  }
}

export {closeModalOverlay, openModal, closeModal};