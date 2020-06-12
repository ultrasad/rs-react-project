import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

/* index reducer(index file in reducers) */
import number from './reducers/numberReducer'
import user from './reducers/userReducer';

const reducer = combineReducers({
    number,
    user
})
/* end index reducer */

//export default createStore(number) //number reducer
export default createStore(reducer, applyMiddleware(thunk)) //multi reducer