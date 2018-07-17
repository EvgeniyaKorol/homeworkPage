/**
 * Created by Eugenia on 16.07.2018.
 */
import * as types from "./actionTypes";

const initialState = {
        selectedGroup: "1",
        selectedStudent: null,
        selectedTask: null

};

export const uiState = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
};