import {ToDoFilterAction} from './actions';
import {actionReducer} from '../../util/actionReducer';

export const toDoFilterAction = actionReducer(ToDoFilterAction)((draft, action) => {
    draft.doneFilterName = action.doneFilterName;
});