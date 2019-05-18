import React, {ChangeEvent, Component} from 'react';
import {boundClass} from 'autobind-decorator';
import {BField} from './bulma/BField';
import {BControl} from './bulma/BControl';
import {BIcon} from './bulma/BIcon';
import {BHelpMessage} from './bulma/BHelpMessage';
import {ReactNodeLike} from 'prop-types';

export interface NameInputProps {
    onNameAdded: (name: string) => void

}

@boundClass
export class NameInput extends Component<NameInputProps, { errorMessages: string[], name: string }, {}> {


    constructor(props: Readonly<NameInputProps>) {
        super(props);
        this.state = {
            errorMessages: [],
            name: ''
        }
    }

    nameChanged(e: ChangeEvent<HTMLInputElement>): void {
        this.setState({name: e.target.value})
    }

    onSubmit() {
        if (this.state.name) {
            this.props.onNameAdded(this.state.name);
            this.setState({errorMessages: []});
        } else {
            this.setState({errorMessages: ['invalid name', 'broken broken!']})
        }
    }

    render(): React.ReactNode {
        return (
            <BField hasAddons={true}>
                <BControl
                    isExpanded
                    leftIcon='fa-user'
                    rightIcon={this.state.errorMessages.length > 0 && 'fa-exclamation-triangle'}
                    errors={this.state.errorMessages}
                >
                    <input className="input is-primary" placeholder='name' type="text" value={this.state.name} onChange={this.nameChanged}/>
                </BControl>
                <BControl>
                    <button className="button is-primary" onClick={this.onSubmit}>add</button>
                </BControl>
            </BField>
        );
    }


}