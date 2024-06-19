const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-16',
  headers: {
    authorization: '0b7b1b37-db22-43dd-b01e-bcffbf5126a3',
    'Content-Type': 'application/json'
  }
}

function userGet() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET', 
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function cardsGet() {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET', 
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function userPatch(userInfo) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH', 
    headers: config.headers,
    body: JSON.stringify({
      name: userInfo.name,
      about: userInfo.about
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function cardsPost(cardInfo) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST', 
    headers: config.headers,
    body: JSON.stringify({
      name: cardInfo.name,
      link: cardInfo.link
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function addLike(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT', 
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function cardsDelete(id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE', 
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function deleteLike(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE', 
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function avatarPatch(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH', 
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export {userGet, cardsGet, cardsPost, userPatch, cardsDelete, addLike, deleteLike, avatarPatch};