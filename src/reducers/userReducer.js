const initState = {
    //customers: []
    users: []
}

export default (state=initState, {type, data}) => { //action{type, payload}
    //return state
    switch(type){ //action.type
        case 'USER_ADD':
            return {...state, users: data} //action.data(payload)
        default: 
            return state
    }
}