import {FETCH_DATA} from '../constants/index';
import {FILTER_DATA} from '../constants/index';

const initialState = {
       cards :[],
       filteredItems:[],
       searchTerm:''
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case FETCH_DATA : 
            return {
                ...state ,
                cards : action.payload,
                filteredItems: action.payload
            }
        case FILTER_DATA :
            return {
                ...state,
                filteredItems : action.payload.cards ,
                searchTerm : action.payload.searchTerm
            }
        default :
           return state ;
    }
    
  };
  
export default rootReducer;