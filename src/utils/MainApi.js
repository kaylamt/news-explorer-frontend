const fetch = require('node-fetch');
require('dotenv').config();

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  register({ email, password, username }) {
    return fetch(`${this._baseUrl}/api/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email,
        name: username,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.statusText))));
  }

  authorize({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.statusText))));
  }

  validate(token) {
    return fetch(`${this._baseUrl}/users/me`, {
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
const baseUrl = NODE_ENV === 'production' ? 'https://api.kaylamt.students.nomoreparties.site' : 'http://localhost:3000';

const mainApi = new MainApi({
  baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;