/**
 * Created by Eugenia on 16.07.2018.
 */
import * as types from "./UIActionTypes";
import {Map} from 'immutable';

const initialState = Map ({
        selectedCourseId: '1',
        selectedGroupId: '1',
        selectedStudent: null,
        selectedTask: null

});

export const uiState = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
};