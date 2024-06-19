/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   avatarPatch: () => (/* binding */ avatarPatch),\n/* harmony export */   cardsDelete: () => (/* binding */ cardsDelete),\n/* harmony export */   cardsGet: () => (/* binding */ cardsGet),\n/* harmony export */   cardsPost: () => (/* binding */ cardsPost),\n/* harmony export */   deleteLike: () => (/* binding */ deleteLike),\n/* harmony export */   userGet: () => (/* binding */ userGet),\n/* harmony export */   userPatch: () => (/* binding */ userPatch)\n/* harmony export */ });\nvar config = {\n  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-16',\n  headers: {\n    authorization: '0b7b1b37-db22-43dd-b01e-bcffbf5126a3',\n    'Content-Type': 'application/json'\n  }\n};\nfunction userGet() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: 'GET',\n    headers: config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\nfunction cardsGet() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: 'GET',\n    headers: config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\nfunction userPatch(userInfo) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: userInfo.name,\n      about: userInfo.about\n    })\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\nfunction cardsPost(cardInfo) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: 'POST',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: cardInfo.name,\n      link: cardInfo.link\n    })\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\nfunction addLike(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(id), {\n    method: 'PUT',\n    headers: config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\nfunction cardsDelete(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/\").concat(id), {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\nfunction deleteLike(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(id), {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\nfunction avatarPatch(avatar) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me/avatar\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: avatar\n    })\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\n\n\n//# sourceURL=webpack://src/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/components/api.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\n\n\nvar cardTemplate = document.querySelector('#card-template').content;\nvar deletePopup = document.querySelector('.popup_type_delete-card');\nfunction createCard(cardData, userId, onDelete, likeCard, openCard) {\n  var cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);\n  var imageCard = cardElement.querySelector('.card__image');\n  cardElement.dataset.cardId = cardData._id;\n  cardElement.querySelector('.card__title').textContent = cardData.name;\n  imageCard.src = cardData.link;\n  imageCard.alt = cardData.name;\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  if (cardData.owner._id === userId) {\n    deleteButton.addEventListener('click', function () {\n      onDelete(cardElement, cardData._id);\n    });\n  } else {\n    deleteButton.remove();\n  }\n  var likeButton = cardElement.querySelector('.card__like-button');\n  var likeCounter = cardElement.querySelector('.card__like-counter');\n  likeCounter.textContent = cardData.likes.length;\n  var isLiked = cardData.likes.some(function (like) {\n    return like._id === userId;\n  });\n  if (isLiked) {\n    likeButton.classList.add(\"card__like-button_is-active\");\n  }\n  likeButton.addEventListener('click', function (evt) {\n    likeCard(evt, cardData._id);\n  });\n  imageCard.addEventListener('click', function () {\n    openCard(cardData);\n  });\n  return cardElement;\n}\n;\nfunction likeCard(evt, cardId) {\n  // evt.target.classList.toggle('card__like-button_is-active');\n  var counterLikes = evt.target.parentNode.querySelector('.card__like-counter');\n  // let cardId = counterLikes.parentNode._id;\n  // console.log(cardId);\n  if (evt.target.classList.contains(\"card__like-button_is-active\")) {\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.deleteLike)(cardId).then(function (сard) {\n      evt.target.classList.toggle(\"card__like-button_is-active\");\n      counterLikes.textContent = сard.likes.length;\n    }).catch(function (err) {\n      console.log(err);\n    });\n  } else {\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.addLike)(cardId).then(function (сard) {\n      evt.target.classList.toggle(\"card__like-button_is-active\");\n      counterLikes.textContent = сard.likes.length;\n    }).catch(function (err) {\n      console.log(err);\n    });\n  }\n}\n;\nfunction deleteCard(evt, cardId) {\n  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(deletePopup);\n  deletePopup.dataset.cardId = cardId;\n}\n;\n\n\n//# sourceURL=webpack://src/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://src/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   closeModalOverlay: () => (/* binding */ closeModalOverlay),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction closeModalOverlay(evt) {\n  if (evt.target === evt.currentTarget) {\n    closeModal(evt.target);\n  }\n}\nfunction closeModal(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closeModalEsc);\n}\nfunction openModal(popup) {\n  popup.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closeModalEsc);\n}\nfunction closeModalEsc(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    closeModal(openedPopup);\n  }\n}\n\n\n//# sourceURL=webpack://src/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation),\n/* harmony export */   validationConfig: () => (/* binding */ validationConfig)\n/* harmony export */ });\nvar validationConfig = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: 'popup__input_type_error',\n  errorClass: 'popup__error_visible'\n};\nvar showInputError = function showInputError(formElement, inputElement) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add(validationConfig.inputErrorClass);\n  errorElement.textContent = inputElement.validationMessage;\n  errorElement.classList.add(validationConfig.errorClass);\n};\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n};\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.setAttribute('disabled', true);\n    buttonElement.classList.add(validationConfig.inactiveButtonClass);\n  } else {\n    buttonElement.removeAttribute('disabled', false);\n    buttonElement.classList.remove(validationConfig.inactiveButtonClass);\n  }\n};\nvar hideInputError = function hideInputError(formElement, inputElement) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove(validationConfig.inputErrorClass);\n  errorElement.classList.remove(validationConfig.errorClass);\n  errorElement.textContent = '';\n};\nvar checkInputValidity = function checkInputValidity(formElement, inputElement) {\n  if (inputElement.validity.patternMismatch) {\n    inputElement.setCustomValidity(inputElement.dataset.error);\n  } else {\n    inputElement.setCustomValidity('');\n  }\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement);\n  } else {\n    hideInputError(formElement, inputElement);\n  }\n};\nvar setEventListeners = function setEventListeners(formElement) {\n  var inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));\n  var buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      checkInputValidity(formElement, inputElement);\n      toggleButtonState(inputList, buttonElement);\n    });\n  });\n};\nvar enableValidation = function enableValidation() {\n  var formList = Array.from(document.querySelectorAll(validationConfig.formSelector));\n  formList.forEach(function (formElement) {\n    setEventListeners(formElement);\n  });\n};\nvar clearValidation = function clearValidation(profileForm) {\n  var inputList = Array.from(profileForm.querySelectorAll(validationConfig.inputSelector));\n  var buttonElement = profileForm.querySelector(validationConfig.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    hideInputError(profileForm, inputElement);\n  });\n  toggleButtonState(inputList, buttonElement);\n};\n\n//# sourceURL=webpack://src/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards.js */ \"./src/components/cards.js\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _components_validation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/validation.js */ \"./src/components/validation.js\");\n/* harmony import */ var _components_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/api.js */ \"./src/components/api.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar editButton = document.querySelector('.profile__edit-button');\nvar editPopup = document.querySelector('.popup_type_edit');\nvar newPlaceButton = document.querySelector('.profile__add-button');\nvar newPlacePopup = document.querySelector('.popup_type_new-card');\nvar content = document.querySelector('.content');\nvar cardsContainer = content.querySelector('.places__list');\nvar formProfile = document.forms['edit-profile'];\nvar formPlace = document.forms['new-place'];\nvar formDeleteCard = document.forms['delete-card'];\nvar formAvatar = document.forms['avatar'];\nvar imagePopup = document.querySelector('.popup_type_image');\nvar closeButtons = document.querySelectorAll('.popup__close');\nvar nameInput = formProfile.querySelector('.popup__input_type_name');\nvar jobInput = formProfile.querySelector('.popup__input_type_description');\nvar nameCard = formPlace.querySelector('.popup__input_type_card-name');\nvar urlCard = formPlace.querySelector('.popup__input_type_url');\nvar titleProfile = document.querySelector('.profile__title');\nvar descriptionProfile = document.querySelector('.profile__description');\nvar bigImage = document.querySelector('.popup__image');\nvar titleImagePopup = document.querySelector('.popup__caption');\nvar userImage = document.querySelector('.profile__image');\nvar avatarPopup = document.querySelector('.popup_type_avatar');\nvar deletePopup = document.querySelector('.popup_type_delete-card');\nvar userId = ' ';\n(0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.enableValidation)(_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.validationConfig);\nvar loading = function loading(isLoading, button) {\n  button.textContent = isLoading ? \"Сохранение...\" : \"Сохранить\";\n};\nvar openCard = function openCard(image) {\n  bigImage.src = image.link;\n  bigImage.alt = image.name;\n  titleImagePopup.textContent = image.name;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(imagePopup);\n};\nfunction handleFormEditSubmit(evt) {\n  evt.preventDefault();\n  loading(true, formProfile.querySelector(\".popup__button\"));\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.userPatch)({\n    name: nameInput.value,\n    about: jobInput.value\n  }).then(function (updateUserInfo) {\n    titleProfile.textContent = updateUserInfo.name;\n    descriptionProfile.textContent = updateUserInfo.about;\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(editPopup);\n  }).catch(function (err) {\n    console.log(err);\n  }).finally(function () {\n    loading(false, formProfile.querySelector(\".popup__button\"));\n  });\n}\nformProfile.addEventListener('submit', handleFormEditSubmit);\nfunction handleFormAvatarSubmit(evt) {\n  evt.preventDefault();\n  loading(true, formAvatar.querySelector(\".popup__button\"));\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.avatarPatch)(formAvatar.link.value).then(function (updateAvatar) {\n    userImage.style.background = \"url(\".concat(updateAvatar.avatar, \")\");\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(avatarPopup);\n  }).catch(function (err) {\n    console.log(err);\n  }).finally(function () {\n    loading(false, formAvatar.querySelector(\".popup__button\"));\n  });\n}\nformAvatar.addEventListener('submit', handleFormAvatarSubmit);\nfunction addNewCard(evt) {\n  evt.preventDefault();\n  loading(true, formPlace.querySelector(\".popup__button\"));\n  var newCardData = {\n    name: nameCard.value,\n    link: urlCard.value\n  };\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.cardsPost)(newCardData).then(function (cardInfo) {\n    var newCard = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(cardInfo, userId, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.likeCard, openCard);\n    cardsContainer.prepend(newCard);\n    formPlace.reset();\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(newPlacePopup);\n  }).catch(function (err) {\n    console.log(err);\n  }).finally(function () {\n    loading(false, formPlace.querySelector(\".popup__button\"));\n  });\n}\nformPlace.addEventListener('submit', addNewCard);\nfunction renderInitialCards(cards) {\n  cards.forEach(function (data) {\n    var card = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(data, userId, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.likeCard, openCard);\n    cardsContainer.append(card);\n  });\n}\neditButton.addEventListener('click', function () {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(formProfile);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(editPopup);\n  nameInput.value = titleProfile.textContent;\n  jobInput.value = descriptionProfile.textContent;\n});\neditPopup.addEventListener('click', _components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModalOverlay);\nnewPlaceButton.addEventListener('click', function () {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(formPlace);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(newPlacePopup);\n});\nuserImage.addEventListener('click', function () {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_4__.clearValidation)(formAvatar);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(avatarPopup);\n});\navatarPopup.addEventListener('click', _components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModalOverlay);\nnewPlacePopup.addEventListener('click', _components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModalOverlay);\nimagePopup.addEventListener('click', _components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModalOverlay);\ndeletePopup.addEventListener('click', _components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModalOverlay);\nfunction deleteMyCard(evt) {\n  evt.preventDefault();\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.cardsDelete)(deletePopup.dataset.cardId).then(function () {\n    var card = document.querySelector(\"[data-card-id=\\\"\".concat(deletePopup.dataset.cardId, \"\\\"]\"));\n    console.log(card);\n    card.remove();\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(deletePopup);\n  }).catch(function (err) {\n    console.log(err);\n  });\n}\nformDeleteCard.addEventListener('submit', deleteMyCard);\ncloseButtons.forEach(function (button) {\n  var parentPopup = button.closest('.popup');\n  button.addEventListener('click', function () {\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(parentPopup);\n  });\n});\nPromise.all([(0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.userGet)(), (0,_components_api_js__WEBPACK_IMPORTED_MODULE_5__.cardsGet)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    user = _ref2[0],\n    cards = _ref2[1];\n  userId = user._id;\n  titleProfile.textContent = user.name;\n  descriptionProfile.textContent = user.about;\n  userImage.style.background = \"url(\".concat(user.avatar, \")\");\n  renderInitialCards(cards);\n}).catch(function (err) {\n  console.log(\"Ошибка - данные не получены\", err);\n});\n\n//# sourceURL=webpack://src/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://src/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;