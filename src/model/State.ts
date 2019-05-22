import {ToDo} from './ToDo';
import {Person} from './Person';

export interface State {

    readonly persons: Readonly<{ [name: string]: Person }>

    readonly toDos: Readonly<{ [id: string]: ToDo }>

    readonly personList: ReadonlyArray<Person>

    readonly toDoList: ReadonlyArray<ToDo>

    readonly doneFilterName: string

}