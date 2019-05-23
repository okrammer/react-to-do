import React from 'react';
import '../App.css';
import {ToDoForm} from './ToDoForm';
import {ToDoList} from './ToDoList';
import {Action} from '../util/actionCreator';
import {State} from '../model/State';

export interface Props {
    state: State,
    dispatch: (action: Action<any>) => void
}

export const AppLayout:React.FC<Props> = ({dispatch, state}) => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Name List</h1>
                <div className="columns">
                    <div className="column is-one-third">
                        <ToDoForm persons={state.personList} dispatch={dispatch}/>
                    </div>
                    <div className="column  is-one-third">
                        <ToDoList
                            persons={state.personList}
                            toDos={state.toDoList}
                            doneFilterName={state.doneFilterName}
                            dispatch={dispatch}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
