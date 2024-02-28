

const initialState = {
    alltodos:['get bmw', 'pay rent', 'get toy for moksha']
}

const todoReducer = function(state = initialState, action) {
    if (action.type === 'ADDTODO') {
        return {...state, alltodos:[...state.alltodos, action.payload]}
    }
    return state
}

export default todoReducer;