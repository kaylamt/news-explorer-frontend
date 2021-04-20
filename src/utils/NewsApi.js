const fetch = require('node-fetch');
const { REACT_APP_NEWS_API_KEY, NODE_ENV } = process.env;

class NewsApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  searchArticles(query) {
    const today = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const params = {
      q: query,
      pageSize: 100,
      to: today.toISOString(),
      from: oneWeekAgo.toISOString(),
      apiKey: REACT_APP_NEWS_API_KEY
    }
    const queryString = new URLSearchParams(params).toString();
    return fetch(`${this._baseUrl}/everything?${queryString}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.statusText))));
  }
}

const baseUrl = NODE_ENV === 'production' ? 'https://nomoreparties.co/news/v2' : 'https://newsapi.org/v2';

const newsApi = new NewsApi(baseUrl);

export default newsApi;

