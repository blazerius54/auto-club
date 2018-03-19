import { SET_RATING } from '../const/index';


export function reducer(state = [], action) {
    let newState = state;
    switch (action.type) {
        case SET_RATING:
            newState = {
                games: [
                ...state.games.slice(0, action.index),
                state.games[action.index] = {
                    ...state.games[action.index], rating: [action.rating]
                },
                ...state.games.slice(action.index+1),
]
            }
            console.log(action)
            return newState;
        default:
            return state;
    }
}