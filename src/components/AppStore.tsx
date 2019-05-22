import React, {useEffect, useReducer} from 'react';
import '../App.css';
import {State} from '../model/State';
import {AppLayout} from './AppLayout';
import {
    StartupAction,
    ToDoAddedAction,
    ToDoDoneAction,
    ToDoFilterAction,
    ToDoRemoveAction
} from './reducer/toDoActions';
import {rootReducer} from './reducer/mainReducer';

export function AppStore() {

    const [state, dispatch] = useReducer(rootReducer, new State());

    useEffect(() => {
        console.log('dispatching StartupAction');
        dispatch(StartupAction.create({}));
    }, [dispatch]);

    const onToDoAdded = (description: string, personId: string) =>
        dispatch(ToDoAddedAction.create({description, personId}));

    const onToDoRemoved = (toDoId: string) =>
        dispatch(ToDoRemoveAction.create({toDoId}));

    const onToDoDone = (toDoId: string, done: boolean) =>
        dispatch(ToDoDoneAction.create({toDoId, done}));

    const onDoneFilter = (doneFilter: boolean | undefined) =>
        dispatch(ToDoFilterAction.create({doneFilter}));


    return (
        <AppLayout
            {...{
                onToDoDone,
                onToDoAdded,
                onToDoRemoved,
                onDoneFilter,
                toDos: state.toDoList,
                persons: state.personList
            }}
        />
    )
}