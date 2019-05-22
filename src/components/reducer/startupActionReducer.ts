import {StartupAction} from './actions';
import {v4} from 'uuid';
import {actionReducer} from '../../util/actionReducer';
import {defaultDoneFilterName} from '../../model/DoneFilter';

function initialPersons() {
    const person1 = {
        id: v4(),
        name: 'Olli',
        color: '#1a5157'
    };
    const person2 = {
        id: v4(),
        name: 'Vroni',
        color: '#4f275d'
    };
    return {
        [person1.id]: person1,
        [person2.id]: person2
    }
}

export const starupActionReducer = actionReducer(StartupAction)((draft, action) => {
    return {
        toDos: draft.toDos || {},
        persons: draft.persons || initialPersons(),
        doneFilterName: draft.doneFilterName || defaultDoneFilterName,
        // calculated values ...
        personList: [],
        toDoList: []
    };
});