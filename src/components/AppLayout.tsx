import React from 'react';
import '../App.css';
import {ToDo} from '../model/ToDo';
import {Person} from '../model/Person';
import {ToDoForm} from './ToDoForm';
import {ToDoList} from './ToDoList';

export interface AppLayoutProps {
    toDos: ReadonlyArray<ToDo>;
    persons: ReadonlyArray<Person>;
    doneFilterName: string;


    onToDoAdded: (description: string, personId: string) => void
    onToDoRemoved: (id: string) => void
    onToDoDone: (todoId: string, done: boolean) => void
    onDoneFilter: (doneFilterName: string) => void
}

export function AppLayout(props: AppLayoutProps) {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Name List</h1>
                <div className="columns">
                    <div className="column is-one-third">
                        <ToDoForm {...props}/>
                    </div>
                    <div className="column  is-one-third">
                        <ToDoList {...props}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
