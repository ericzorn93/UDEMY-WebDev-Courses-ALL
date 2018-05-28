import axios from 'axios';
import { key, proxy } from '../config';


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        // const secondProxy = "https://cors-proxy.htmldriven.com/?url=";
        const key = "66a021708a848799157dcccdd9ef124f";
        
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
