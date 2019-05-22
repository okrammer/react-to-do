import {ActionCreator} from './actionCreator';
import produce, {Draft} from 'immer';
import {State} from '../model/State';

export const actionReducer = <P>(...actionCreator: ActionCreator<P>[]) =>
    (recipe: (draft: Draft<State>, action: P) =>
        Draft<State> | void): (state: State, action: any) =>
        State => {

    return (state, action) => {
        if (!actionCreator.some(a => a.is(action))) {
            return state;
        }

        return produce(state, draft => recipe(draft, action));
    };
};