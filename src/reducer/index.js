import todoReducers from './todoReducer'

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    todoReducers,

})
export default rootReducer;

// import {combineReducers} from 'redux'
// import cardItem from './reducer'
// export default combineReducers({
//     cardItem,
// })