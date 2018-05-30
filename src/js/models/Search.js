import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '60d928950d3c88d4808a8c28b1c6e2a6';
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
    } catch(error) {
      alert(error);
    }
  }

}
