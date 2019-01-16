import {combineReducers,createStore} from 'redux';


function productsReducer (state = [], action) {
  return state;
}

function usersReducer (state = '', action) {
  switch (action.type) {
    case 'updateUser':
    return action.payload.user
  }
  return state;
}

const allReducers = combineReducers({
  products:productsReducer,
  user:usersReducer
})

const store = createStore(
  allReducers , 
  {
  products:[{name:'iPhone'}],
  user:'Michael'
  },
  window.devToolsExtension && window.devToolsExtension()
);
console.log(store.getState());



const updateUserAction = {
  type:'updateUser',
  payload:{
    user:'John'
  }
}

store.dispatch(updateUserAction)