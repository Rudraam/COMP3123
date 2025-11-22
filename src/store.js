import { createStore } from 'redux';
import authReducer from './reducer';

// 1. Store: Holds the state
// 2. Reducer: specifices how state changes
const store = createStore(authReducer);

// 5. Subscribe: Listen to state changes
store.subscribe(() => {
    console.log('State updated:', store.getState());
});

export default store;
