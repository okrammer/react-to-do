import {ToDoAddedAction, ToDoDoneAction, ToDoFilterAction, ToDoRemoveAction} from './actions';
import {actionReducer} from '../../util/actionReducer';
import {doneFilterValues} from '../../model/DoneFilter';

export const toDoListCalcAction = actionReducer<{}>(ToDoRemoveAction, ToDoAddedAction, ToDoDoneAction, ToDoFilterAction)((draft, action) => {
    const doneFilter = doneFilterValues.find(f => f.name === draft.doneFilterName);
    draft.toDoList = Object.values(draft.toDos)
        .filter(todo => (!doneFilter || doneFilter.value === undefined || doneFilter.value === todo.done));
});