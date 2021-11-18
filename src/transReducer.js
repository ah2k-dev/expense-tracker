export const transReducer = ((state, action)=>{
    switch (action.type){
        case 'ADD':{
            return [action.payload, ...state]
        }
        case 'DELETE':{
            return [ ...state.filter(transaction => transaction.id !== action.payload)]
        }
        default:{
            return state;
        }
    }
})