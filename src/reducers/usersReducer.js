
export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'addUser':
            
            return [
                ...state,
                {
                    ...action.payload,
                }
            ];
        case 'removeUser':
            return state.filter(user => user.nit !== action.payload);
        case 'updateUser':
            return state.map(u => {
                if (u.nit === action.payload.nit) {
                    return {
                        ...action.payload
                    };
                }
                return u;
            })
        case 'loadingUsers':
            return action.payload;
        default:
            return state;
    }
}