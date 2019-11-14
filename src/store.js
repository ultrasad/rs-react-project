import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import number from './reducers/number'
import user from './reducers/user';

const reducer = combineReducers({
    n: number,
    u: user
})

//export default createStore(number) //number reducer
export default createStore(reducer, applyMiddleware(thunk)) //multi reducer