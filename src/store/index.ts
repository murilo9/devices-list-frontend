import { combineReducers, createReducer, createStore } from "@reduxjs/toolkit";
import reducers from './rootReducer';

const combinedReducers = combineReducers(reducers);

const store = createStore(combinedReducers);

export default store;