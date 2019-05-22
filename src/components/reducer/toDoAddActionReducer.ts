import {ToDoAddedAction} from './actions';
import {v4} from 'uuid';
import {actionReducer} from '../../util/actionReducer';

export const toDoAddActionReducer = actionReducer(ToDoAddedAction)((draft, action) => {
    const todo = {
        id: v4(),
        personId: action.personId,
        description: action.description,
        done: false
    };
    draft.toDos[todo.id] = todo;
});