import { createStore } from 'redux';
import rootReducer from '../reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = initialState => createStore(rootReducer, initialState);

export default configureStore;
