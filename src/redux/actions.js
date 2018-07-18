/**
 * Created by Eugenia on 16.07.2018.
 */
import * as types from './groupActionTypes.js';

export function changeGroup (id) {
    return {
        type: types.CHANGE_GROUP,
        id
    }
}
