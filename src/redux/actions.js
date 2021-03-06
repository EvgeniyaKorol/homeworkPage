/**
 * Created by Eugenia on 16.07.2018.
 */
import * as groupTypes from './groupActionTypes';
import * as types from './courseActionTypes';
import * as topicTypes from './topicActionTypes';

export function changeCourse(id) {
    return {
        type: types.CHANGE_COURSE,
        id
    }
}

export function changeGroup(id) {
    return {
        type: groupTypes.CHANGE_GROUP,
        id
    }
}

export function displayTasks (id) {
    return {
        type: topicTypes.TOGGLE_TOPICS,
        id
    }
}
