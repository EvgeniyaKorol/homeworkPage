import {combineReducers, createStore} from 'redux';
import {topics} from "./topicsReducers";
import {groups} from "./groupReducers";
import {uiState} from "./UIReducers";

export const store = createStore (combineReducers ({topics, groups, uiState}));