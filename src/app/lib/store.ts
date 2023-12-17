import { createStore, combineReducers } from 'redux';
import panelReducer from './reducers/panelRouter';

const rootReducer = combineReducers({
  panel: panelReducer,
  // Adicione outros reducers aqui, se houver
});

const store = createStore(rootReducer);

export default store;