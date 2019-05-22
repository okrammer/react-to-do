import {actionCreator} from '../../util/actionCreator';

export const StartupAction = actionCreator<{}>('startup');
export const ToDoAddedAction = actionCreator<{ description: string, personId: string }>('toDoAddedAction');
export const ToDoRemoveAction = actionCreator<{ toDoId: string }>('toDoRemoveAction');
export const ToDoDoneAction = actionCreator<{ toDoId: string, done: boolean }>('toDoDone');
export const ToDoFilterAction = actionCreator<{ doneFilterName: string }>('toDoFilter');