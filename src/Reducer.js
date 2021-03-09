
const MyReducer = (state, action) => {
    switch(action.type){
        case "ADD_INCOME": 
            return {...state, 
                transactions: [action.payload, ...state.transactions]
            };
        case "ADD_EXPENSE": 
        return {...state, 
            transactions: [action.payload, ...state.transactions]
        };
        default: 
            return state;
    }
}

export default MyReducer;