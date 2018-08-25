import axios from 'axios'
import { FETCH_BITCOIN } from "./constants";

export const fetchBitcoin = () => {    
    return dispatch => axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {                
         
            return dispatch({ type: FETCH_BITCOIN, bitcoin: response.data  })
    })    
}

export default fetchBitcoin
