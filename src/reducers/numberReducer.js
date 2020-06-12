const initState = {
    numbers: [],
    title: 'Hello World'
}

export default (state=initState, {type}) => {

    console.log("action type => ", type, ', length => ', state.numbers.length);
    
    switch(type){
        case 'ADD':
            return {
                ...state, 
                numbers: [
                    ...state.numbers, 
                    state.numbers.length + 1
                ]
            }
        case 'DELETE': {
            return {
                ...state,
                numbers: state.numbers.filter(each => each !== state.numbers.length)
            }
        }
        default: 
            return state
    }

    //console.log("action => ",action.type);
    //return state
}