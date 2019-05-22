import produce, {Draft} from 'immer';
import {StartupAction, ToDoAddedAction, ToDoDoneAction, ToDoFilterAction, ToDoRemoveAction} from './toDoActions';
import {State} from '../../model/State';
import {Person} from '../../model/Person';
import {ToDo} from '../../model/ToDo';

export function rootReducer(state: State, action: any): State {
    let newState = produce(state, draft => {

        if (StartupAction.is(action)) {
            draft = new State() as Draft<State>;
            const person1 = new Person('Otto', '#1a5157');
            const person2 = new Person('Verena', '#4f275d');
            draft.persons[person1.id] = person1;
            draft.persons[person2.id] = person2;
        }

        if (ToDoAddedAction.is(action)) {
            const todo = new ToDo(action.personId, action.description, false);
            draft.toDos[todo.id] = todo
        }

        if (ToDoRemoveAction.is(action)) {
            delete draft.toDos[action.toDoId];
        }

        if (ToDoDoneAction.is(action)) {
            const toDo = draft.toDos[action.toDoId];
            toDo.done = action.done;
        }

        if (ToDoFilterAction.is(action)) {
            draft.doneFilter = action.doneFilter;
        }

        draft.toDoList = Object.values(draft.toDos)
            .filter(todo => draft.doneFilter === undefined || draft.doneFilter === todo.done);

        draft.personList = Object.values(draft.persons);

        return draft;
    });
    console.log('rootReducer', {action, state, newState});
    return newState;
}