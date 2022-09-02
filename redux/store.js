import {createStore, combineReducers} from 'redux';

import dataReducer from './reducer';

const rootReducer = combineReducers({
  dataReducer: dataReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
