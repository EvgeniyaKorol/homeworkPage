/**
 * Created by Eugenia on 21.07.2018.
 */
import * as types from "./courseActionTypes";
import {Map, List} from 'immutable';

const initialState = List([
    Map ({
        id: '1',
        name: 'KMB'
    }),
    Map ({
        id: '2',
        name: 'C++'
    }),
    Map ({
        id: '3',
        name: 'KMB JS'
    })]);

export const courses = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_COURSE:
            return {

            };
        default:
            return state
    }
};
