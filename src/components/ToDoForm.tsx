import React, {ChangeEvent} from 'react';
import {BField} from './bulma/BField';
import {BControl} from './bulma/BControl';
import {Person} from '../model/Person';
import {Errors} from '../util/Errors';
import {Action} from '../util/actionCreator';
import {ToDoAddedAction} from './reducer/actions';
import {useState} from 'reinspect';

interface Props {
    dispatch: (action: Action<any>) => void
    persons: ReadonlyArray<Person>;
}

interface State {
    errors: Errors<'description' | 'person'>
    person: Person | undefined
    description: string
}

const defaultState: State = {
    person: undefined,
    description: '',
    errors: new Errors()
};

export const ToDoForm: React.FC<Props> = ({persons, dispatch}) => {

    const [state, setState] = useState(defaultState, 'ToDoForm');

    const onDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setState({...state, description: e.target.value})
    };

    const onPersonChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const person = persons.find(p => p.id === e.target.value);
        setState({...state, person: person})
    };

    const onSubmit = () => {
        const errors = new Errors<'description' | 'person'>();
        if (!state.person) {
            errors.addError('person', 'A Person must be selected');
        }
        if (!state.description) {
            errors.addError('description', 'A description must be provided');
        }
        setState({...state, errors});

        if (!errors.hasError()) {
            setState(defaultState);
            dispatch(ToDoAddedAction.create({
                description: state.description,
                personId: state.person!.id
            }))
        }
    }


    return (
        <>
            <BField>
                <BControl
                    leftIcon='fa-user'
                    rightIcon={state.errors.hasError('person') && 'fa-exclamation-triangle'}
                    errors={state.errors.getErrors('person')}
                >
                    <div className="select">
                        <select
                            value={state.person ? state.person.id : ''}
                            onChange={onPersonChange}>
                            <option value=''>Person</option>
                            {
                                persons.map(p =>
                                    <option key={p.id} value={p.id}>{p.name}</option>
                                )
                            }
                        </select>
                    </div>
                </BControl>
            </BField>

            <BField>
                <BControl
                    leftIcon='fa-edit'
                    rightIcon={state.errors.hasError('description') && 'fa-exclamation-triangle'}
                    errors={state.errors.getErrors('description')}
                >
                    <textarea className="input is-primary textarea"
                              placeholder='description'
                              rows={10}
                              value={state.description}
                              onChange={onDescriptionChange}/>
                </BControl>
            </BField>

            <BField>
                <BControl>
                    <button className="button is-primary" onClick={onSubmit}>add</button>
                </BControl>
            </BField>
        </>
    );
};