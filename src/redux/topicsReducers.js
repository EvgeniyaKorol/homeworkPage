/**
 * Created by Eugenia on 16.07.2018.
 */
import * as types from "./groupActionTypes";

const initialState = {
    topic1: {
            id: '1',
            name: 'html',
            tasks: [
                {
                    id: '1',
                    name: 'Введение'
                },
                {
                    id: '2',
                    name: 'Страничка ВК'
                }
            ]
        },
    topic2: {
            id: '2',
            name: 'CSS',
            tasks: []
        },
    topic3: {
            id: '3',
            name: 'Slider',
            tasks: [
                {
                    id: '1',
                    name: 'Slider V1'
                },
                {
                    id: '2',
                    name: 'Slider V2 Конструктор'
                }
            ]
        },
    topic4: {
            id: '4',
            name: 'Calculator',
            tasks: [
                {
                    id: '1',
                    name: 'Calc V1'
                },
                {
                    id: '2',
                    name: 'Calc V2'
                },
                {
                    id: '3',
                    name: 'Calc V3'
                }
            ]
        }

};

export const topics = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state
    }
};