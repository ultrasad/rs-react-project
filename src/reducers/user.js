const initState = {
    //customers: []
    users: []
}

export default (state=initState, {type, data}) => {
    //return state
    switch(type){
        case 'USER_ADD':
            return {...state, users: data}
        default: 
            return state
    }
}