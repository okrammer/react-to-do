import React, {ChangeEvent, Component} from 'react';
import {boundClass} from 'autobind-decorator';
import {BField} from './bulma/BField';
import {BControl} from './bulma/BControl';
import {Person} from '../model/Person';
import {Errors} from '../util/Errors';

interface Props {
    onToDoAdded: (description: string, personId: string) => void
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

@boundClass
export class ToDoForm extends Component<Props, State, {}> {

    constructor(props: Readonly<Props>) {
        super(props);
        this.state = defaultState;
    }

    onDescriptionChange(e: ChangeEvent<HTMLTextAreaElement>): void {
        this.setState({description: e.target.value})
    }

    onPersonChange(e: ChangeEvent<HTMLSelectElement>): void {
        const person = this.props.persons.find(p => p.id === e.target.value);
        this.setState({person: person})
    }

    onSubmit() {
        const errors = new Errors<'description' | 'person'>();
        if (!this.state.person) {
            errors.addError('person', 'A Person must be selected');
        }
        if (!this.state.description) {
            errors.addError('description', 'A description must be provided');
        }
        this.setState({errors});

        if (!errors.hasError()) {
            this.setState(defaultState);
            this.props.onToDoAdded(this.state.description, this.state.person!.id);
        }
    }

    render(): React.ReactNode {
        return (
            <>
                <BField>
                    <BControl
                        leftIcon='fa-user'
                        rightIcon={this.state.errors.hasError('person') && 'fa-exclamation-triangle'}
                        errors={this.state.errors.getErrors('person')}
                    >
                        <div className="select">
                            <select
                                value={this.state.person ? this.state.person.id : ''}
                                onChange={this.onPersonChange}>
                                <option value=''>Person</option>
                                {
                                    this.props.persons.map(p =>
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
                        rightIcon={this.state.errors.hasError('description') && 'fa-exclamation-triangle'}
                        errors={this.state.errors.getErrors('description')}
                    >
                    <textarea className="input is-primary textarea"
                              placeholder='description'
                              rows={10}
                              value={this.state.description}
                              onChange={this.onDescriptionChange}/>
                    </BControl>
                </BField>

                <BField>
                    <BControl>
                        <button className="button is-primary" onClick={this.onSubmit}>add</button>
                    </BControl>
                </BField>
            </>
        );
    }
}