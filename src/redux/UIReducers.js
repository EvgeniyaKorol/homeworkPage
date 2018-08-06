/**
 * Created by Eugenia on 16.07.2018.
 */
import * as types from "./UIActionTypes";
import * as groupTypes from './groupActionTypes';
import * as courseTypes from './courseActionTypes';

import {Map} from 'immutable';

const initialState = Map ({
        selectedCourseId: '1',
        selectedGroupId: '1',
        selectedStudent: null,
        selectedTask: null

});

export const uiState = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case courseTypes.CHANGE_COURSE:
            return initialState.set('selectedCourseId', action.id);

        case groupTypes.CHANGE_GROUP:
            return initialState.set('selectedGroupId', action.id);
        default:
            return state
    }
};