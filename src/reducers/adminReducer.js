import { UPDATE_ADMIN } from '../actions/admin-action.js';


export default function adminReducer (state = '', {type,payload}) {
    // console.log(payload)
    switch(type){
        case UPDATE_ADMIN:
        return payload
        default:
        return state
    }    
  }