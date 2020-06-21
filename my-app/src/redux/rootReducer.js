import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
console.log("this is develope branch");
console.log("first change in master branch");

console.log("second change in develop branch");
console.log("i am in master");
export default rootReducer