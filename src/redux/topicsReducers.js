/**
 * Created by Eugenia on 16.07.2018.
 */
import * as types from "./topicActionTypes";
import {List} from 'immutable';
import {Map} from 'immutable';
import {TOGGLE_TOPICS} from "./topicActionTypes";

const initialState = List([
    Map ({id: '1', expanded: false, name: 'html',
        tasks: [
            {id: '1', name: 'Введение'},
            {id: '2', name: 'Страничка ВК'}
        ]}),

    Map ({id: '2', expanded: false, name: 'CSS', tasks: []}),

    Map ({id: '3',
        expanded: false, name: 'Slider',
        tasks: [
            {id: '1', name: 'Slider V1'},
            {id: '2', name: 'Slider V2 Конструктор'}
        ]}),

    Map ({id: '4', expanded: false, name: 'Calculator',
        tasks: [
            {id: '1', name: 'Calc V1'},
            {id: '2', name: 'Calc V2'},
            {id: '3', name: 'Calc V3'}
        ]})
    ]);

export const topics = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TOPICS:
            const index = state.findIndex(e => {

                let a = e.get('id');
                let b = action.id;
                return a === b;
            });
            debugger;
            //let expanded = state.get(['topics', index, 'expanded']);
            //let init = initialState.setIn(['topics', index, 'expanded'], true);
            let init = initialState.map((e) => {
                let a = e.get('id');
                let b = action.id;
                if (a == b) {
                    return e.set('expanded', true);
                }else {
                    return e;
                }
            });
            console.log(init);
            return init;
            console.log(initialState);
        default:
            return state
    }
};