import {ToDoAddedAction, ToDoRemoveAction} from './actions';
import {actionReducer} from '../../util/actionReducer';

const personListCalcReducer = actionReducer<{}>(ToDoRemoveAction, ToDoAddedAction)((draft, action) => {
    draft.personList = Object.values(draft.persons);
});