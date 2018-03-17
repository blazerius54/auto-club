import { SET_RATING } from '../const/index';

export const setRating = (rating, index) => {

    const action = {
        type: SET_RATING,
        rating,
        index
    }
    console.log(action)
    return action
}