import { createStore } from 'redux';
import { reducer } from '../reducer/index';
import { games } from '../data/games';

const defaultState = {
    games,
};

const store = createStore(reducer, defaultState);
export default store;