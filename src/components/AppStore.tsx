import React, {useEffect} from 'react';
import '../App.css';
import {State} from '../model/State';
import {AppLayout} from './AppLayout';
import {StartupAction} from './reducer/actions';
import {rootReducer} from './reducer/rootReducer';
import {Storage} from '../util/Storage';
import {Action} from '../util/actionCreator';
import {useReducer} from 'reinspect';

export const StoreContext = React.createContext({
    dispatch: (action: Action<any>): void => {
    },
    state: undefined as unknown as State
})

export const AppStore: React.FC<{}> = () => {

    const [state, dispatch] = useReducer(
        rootReducer,
        Storage.load() || {} as State,
        s => s,
        'rootStore'
    );

    useEffect(() => {
        console.log('dispatching StartupAction');
        dispatch(StartupAction.create({}));
    }, [dispatch]);


    return (
        <AppLayout
            {...{
                dispatch,
                state
            }}
        />
    )
}