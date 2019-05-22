import {State} from '../../model/State';
import {Storage} from '../../util/Storage';
import {toDoAddActionReducer} from './toDoAddActionReducer';
import {toDoRemoveReducer} from './toDoRemoveActionReducer';
import {toDoDoneAction} from './toDoDoneActionReducer';
import {toDoFilterAction} from './toDoFilterActionReducer';
import {toDoListCalcAction} from './toDoListCalcReducer';


const reducerList = [
    toDoAddActionReducer,
    toDoRemoveReducer,
    toDoDoneAction,
    toDoFilterAction,
    toDoListCalcAction,
    toDoListCalcAction
];

export function rootReducer(state: State, action: any): State {
    const newState = reducerList.reduce((state, reducer) => reducer(state, action), state);
    console.log('rootReducer', {action, state, newState});
    Storage.save(newState);
    return newState;
}