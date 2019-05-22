import {ToDoDoneAction} from './actions';
import {actionReducer} from '../../util/actionReducer';

export const toDoDoneAction = actionReducer(ToDoDoneAction)((draft, action) => {
    const toDo = draft.toDos[action.toDoId];
    if(toDo){
        toDo.done = action.done;
    }
});