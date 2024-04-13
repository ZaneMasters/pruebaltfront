
export const productsReducer = (state = [], action) => {

    switch (action.type) {
        case 'addProduct':
            
            return [
                ...state,
                {
                    ...action.payload,
                }
            ];
        case 'removeProduct':
            return state.filter(product => product.id !== action.payload);
        
        case 'loadingProducts':
            return action.payload;
        default:
            return state;
    }
}