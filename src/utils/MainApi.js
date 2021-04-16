const fetch = require('node-fetch');

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  headers() {
    return {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }
  }

  getArticles() {
    return fetch(`${this._baseUrl}/api/articles`, {
      headers: this.headers(),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`error!${res.statusText}`))));
  }

  createArticle({ keyword, title, text, date, source, link, image }) {
    return fetch(`${this._baseUrl}/api/articles`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      })
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`error!${res.statusText}`))));
  }

  deleteArticle(articleId) {
    return fetch(`${this._baseUrl}/api/articles/${articleId}`, {
      method: 'DELETE',
      headers: this.headers(),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`error!${res.statusText}`))));
  }

  register({ email, password, username }) {
    return fetch(`${this._baseUrl}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password,
        email,
        name: username,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.statusText))));
  }

  authorize({ email, password }) {
    return fetch(`${this._baseUrl}/api/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.statusText))));
  }

  validate(token) {
    return fetch(`${this._baseUrl}/api/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.statusText))));
  }
}

const { NODE_ENV } = process.env;
const baseUrl = NODE_ENV === 'production' ? 'https://kthomas.students.nomoreparties.site' : 'http://localhost:3000';

const mainApi = new MainApi(baseUrl);

export default mainApi;