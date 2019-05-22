import React, {ChangeEvent} from 'react';
import {ToDo} from '../model/ToDo';
import {Person} from '../model/Person';
import {JSX} from '@babel/types';
import {doneFilterValues} from '../model/DoneFilter';


export interface ToDoListProp {
    toDos: ReadonlyArray<ToDo>;
    persons: ReadonlyArray<Person>;
    doneFilterName: string;
    onToDoRemoved: (todoId: string) => void
    onToDoDone: (todoId: string, done: boolean) => void
    onDoneFilter: (doneFilter: string) => void
}

export function ToDoList(props: ToDoListProp): JSX.Element {

    const onDoneFor = (toDo: ToDo) => (e: ChangeEvent<HTMLInputElement>) => {
        props.onToDoDone(toDo.id, e.target.checked)
    };

    const onDoneFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onDoneFilter(e.target.value);
    };

    const renderTodo = (toDo: ToDo) => {
        const person = props.persons.find(person => person.id === toDo.personId);
        return <tr key={toDo.id}>
            <td style={{background: person ? person.color : '#CCCCCC'}}>{person && person.name}</td>
            <td>{toDo.description}</td>
            <td><input type="checkbox" checked={toDo.done} onChange={onDoneFor(toDo)}/></td>
            <td style={{'width': '20%'}}>
                <button onClick={() => props.onToDoRemoved(toDo.id)}>remove</button>
            </td>
        </tr>
    };

    return (
        <table className="table is-fullwidth">
            <thead>
            <tr>
                <th colSpan={4}>Todo List</th>
            </tr>
            <tr>
                <td>Person</td>
                <td>Description</td>
                <td>Done</td>
                <td/>
            </tr>
            <tr>
                <td/>
                <td/>
                <td>
                    <select value={props.doneFilterName} onChange={onDoneFilterChange}>
                        {
                            doneFilterValues.map(filterValue =>
                                <option key={filterValue.name} value={filterValue.name}>{filterValue.label}</option>
                            )
                        }
                    </select>
                </td>
                <td/>
            </tr>
            </thead>
            <tbody>
            { props.toDos.map(renderTodo) }
            </tbody>
        </table>
    );
}