import { createStore, applyMiddleware } from 'redux'; // Middleware for thunk.
import thunk from 'redux-thunk'; //Allow to use redux with async.
import rootReducer from './reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;