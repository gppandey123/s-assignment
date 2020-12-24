import {FETCH_DATA} from '../constants/index'; 
import {FILTER_DATA} from '../constants/index';

export function getData() {
  return function(dispatch) {
    return fetch("https://api.jikan.moe/v3/search/anime?q=naruto&limit=16")
      .then(response => response.json())
      .then(data => {
        dispatch({ type: FETCH_DATA, payload:[...data.results] });
      });
  };
}

export function getfilterProduct(cards ,searchTerm) {
      return function(dispatch){
          
         dispatch({
           type:FILTER_DATA,
           payload :{
             searchTerm : searchTerm,
            cards: searchTerm === "" ? cards :
               cards.filter(item => {
              return(  item.title.toLowerCase()
                .indexOf(searchTerm.toLowerCase()) >-1)
               })
           }
         })
      }
}

