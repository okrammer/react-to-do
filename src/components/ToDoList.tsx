import React, {ChangeEvent} from 'react';
import {ToDo} from '../model/ToDo';
import {Person} from '../model/Person';
import {doneFilterValues} from '../model/DoneFilter';
import {Action} from '../util/actionCreator';
import {ToDoDoneAction, ToDoFilterAction, ToDoRemoveAction} from './reducer/actions';


interface Props {
    toDos: ReadonlyArray<ToDo>;
    persons: ReadonlyArray<Person>;
    doneFilterName: string;
    dispatch: (action: Action<any>)=>void;
}

export const ToDoList: React.FC<Props> = ({dispatch, toDos, persons, doneFilterName}) => {

    const onDoneFor = (toDo: ToDo) => (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ToDoDoneAction.create({toDoId: toDo.id, done: e.target.checked}));
    };

    const onDoneFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(ToDoFilterAction.create({doneFilterName: e.target.value}));
    };

    const onToDoRemovedFor = (toDo: ToDo) => () => dispatch(ToDoRemoveAction.create({toDoId: toDo.id}));

    const renderTodo = (toDo: ToDo) => {
        const person = persons.find(person => person.id === toDo.personId);
        return <tr key={toDo.id}>
            <td style={{background: person ? person.color : '#CCCCCC'}}>{person && person.name}</td>
            <td>{toDo.description}</td>
            <td><input type="checkbox" checked={toDo.done} onChange={onDoneFor(toDo)}/></td>
            <td style={{'width': '20%'}}>
                <button onClick={onToDoRemovedFor(toDo)}>remove</button>
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
                    <select value={doneFilterName} onChange={onDoneFilterChange}>
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
            {toDos.map(renderTodo)}
            </tbody>
        </table>
    );
}