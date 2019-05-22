import {ToDo} from './ToDo';
import {Person} from './Person';
import {immerable} from 'immer';

export class State {
    [immerable] = true;

    readonly persons: Readonly<{[name: string]: Person}> = {};

    readonly toDos: Readonly<{[id: string]: ToDo}> = {};

    readonly filteredToDoList: ReadonlyArray<ToDo> = [];

    readonly personList: ReadonlyArray<Person> = [];

    readonly toDoList: ReadonlyArray<ToDo> = [];

    readonly doneFilter: boolean | undefined = undefined;

}