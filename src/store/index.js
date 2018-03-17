import { createStore } from 'redux';
import { reducer } from '../reducer/index';
import { games, allApps} from '../data/games';

const defaultState = {
    games,
    // allApps
};

const store = createStore(reducer, defaultState);
export default store;