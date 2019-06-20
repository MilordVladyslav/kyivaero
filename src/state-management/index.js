import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import reducers from './reducers'

const store = createStore(reducers);
