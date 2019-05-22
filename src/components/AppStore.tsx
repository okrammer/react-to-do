import React, {useEffect, useReducer} from 'react';
import '../App.css';
import {State} from '../model/State';
import {AppLayout} from './AppLayout';
import {StartupAction, ToDoAddedAction, ToDoDoneAction, ToDoFilterAction, ToDoRemoveAction} from './reducer/actions';
import {rootReducer} from './reducer/rootReducer';
import {Storage} from '../util/Storage';

export const AppStore: React.FC<undefined> = () => {

    const [state, dispatch] = useReducer(rootReducer, Storage.load() || {} as State);

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

    const onDoneFilter = (doneFilterName: string) =>
        dispatch(ToDoFilterAction.create({doneFilterName}));


    return (
        <AppLayout
            {...{
                onToDoDone,
                onToDoAdded,
                onToDoRemoved,
                onDoneFilter,
                toDos: state.toDoList || [],
                persons: state.personList || [],
                doneFilterName: state.doneFilterName
            }}
        />
    )
}