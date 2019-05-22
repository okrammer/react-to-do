import {ToDoRemoveAction} from './actions';
import {actionReducer} from '../../util/actionReducer';

export const toDoRemoveReducer = actionReducer(ToDoRemoveAction)((draft, action) => {
    delete draft.toDos[action.toDoId];
});