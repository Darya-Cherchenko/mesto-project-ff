const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-16',
  headers: {
    authorization: '0b7b1b37-db22-43dd-b01e-bcffbf5126a3',
    'Content-Type': 'application/json'
  }
}

const url = {
  cards: 'cards',
  users: 'users/me',
  likes: 'likes',
  avatar: 'avatar',
}

const getInitialCards = (api, option) => {
  return fetch(`${config.baseUrl}/${api}`, option)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
} 

function userGet() {
  return getInitialCards(`${config.baseUrl}/${url.users}`, {
    method: 'GET', 
    headers: config.headers
  });
}

function cardsGet() {
  return getInitialCards(`${config.baseUrl}/${url.cards}`, {
    method: 'GET', 
    headers: config.headers
  });
}

function userPatch(name, about) {
  return getInitialCards(`${config.baseUrl}/users/me`, {
    method: 'PATCH', 
    headers: config.headers,
    body: JSON.stringify({
      name,
      about
    })
  })
}

function cardsPost(name, link) {
  return getInitialCards(`${config.baseUrl}/cards`, {
    method: 'POST', 
    headers: config.headers,
    body: JSON.stringify({
      name,
      link,
    })
  });
}

function addLike(id) {
  return getInitialCards(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT', 
    headers: config.headers
  })
}

function cardsDelete(id) {
  return getInitialCards(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE', 
    headers: config.headers
  })
}

function deleteLike(id) {
  return getInitialCards(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE', 
    headers: config.headers
  })
}

function avatarPatch(avatar) {
  return getInitialCards(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH', 
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
}

export {userGet, getInitialCards, cardsGet, cardsPost, userPatch, cardsDelete, addLike, deleteLike, avatarPatch}