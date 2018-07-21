/**
 * Created by Eugenia on 21.07.2018.
 */
import * as types from "./userActionTypes";
import {Map} from 'immutable';

const initialState = Map ({
    id: null,
    isAdmin: false,
    avatarSrc: null

});

export const userState = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
};