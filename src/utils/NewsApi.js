const fetch = require('node-fetch');
require('dotenv').config();

class NewsApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  searchArticles(query) {
    const today = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const params = {
      q: query,
      pageSize: 100,
      to: today.toISOString(),
      from: oneWeekAgo.toISOString()
    }
    const queryString = new URLSearchParams(params).toString();
    return fetch(`${this._baseUrl}/everything?${queryString}`, {
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.statusText))));
  }

}

//don't hardcode API key
// const { NEWS_API_KEY } = process.env;
const NEWS_API_KEY = '7a08f2c41cc54ee7b40098de540aaa46';
//CHANGE TO PROXY
const baseUrl = 'https://newsapi.org/v2';

const newsApi = new NewsApi({
  baseUrl,
  headers: {
    authorization: `Bearer ${NEWS_API_KEY}`,
  },
});

export default newsApi;

