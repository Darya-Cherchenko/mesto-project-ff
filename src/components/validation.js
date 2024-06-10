export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
} 

const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
} else {
  buttonElement.removeAttribute('disabled', false);
  buttonElement.classList.remove(validationConfig.inactiveButtonClass);
}
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.error);
  } else {
    inputElement.setCustomValidity('');
  }
  
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}; 

export const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement); 
  });
};

export const clearValidation = (profileForm) => {
  const inputList = Array.from(profileForm.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = profileForm.querySelector(validationConfig.submitButtonSelector);

  inputList.forEach((inputElement) => {
    hideInputError(profileForm, inputElement);
  });
  toggleButtonState(inputList, buttonElement);
}