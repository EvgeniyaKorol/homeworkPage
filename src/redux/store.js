/**
 * Created by Eugenia on 16.07.2018.
 */
import {combineReducers, createStore} from 'redux';
import {topics} from "./topicsReducers";
import {groups} from "./groupReducers";
import {uiState} from "./UIReducers";
import {userState} from "./userReducers";
import {courses} from "./courseReducer";

export const store = createStore (combineReducers ({courses, groups, topics, uiState, userState}));

