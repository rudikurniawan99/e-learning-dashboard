import { RESET_CURRENT_USER, UPDATE_CURRENT_USER } from 'redux/types';

const initialState = { id: '', name: '', email: '', role: '' };

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_USER:
            return { ...state, ...action.payload };
        case RESET_CURRENT_USER:
            return { ...state };
        default:
            return state;
    }
};
