import React, {Component} from 'react';
import './App.css';
import {NameList} from './NameList';
import {NameInput} from './NameInput';
import {boundClass} from 'autobind-decorator';

@boundClass
export class App extends Component<{}, { names: string[] }, {}> {


    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {names: []}
    }

    onNameAdded(name: string) {
        this.setState(old => ({names: [...old.names, name]}));
    }

    onRemoveName(index: number) {
        this.setState(old => ({names: old.names.filter((name, idx) => idx !== index)}));
    }

    render(): React.ReactNode {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">Name List</h1>
                    <div className="columns">
                        <div className="column is-one-third">
                            <NameInput onNameAdded={this.onNameAdded}/>
                        </div>
                        <div className="column  is-one-third">
                            {
                                this.state.names.length > 0
                                    ? <NameList names={this.state.names} onRemoveName={this.onRemoveName}/>
                                    : <span>No names so far ...</span>

                            }
                        </div>
                    </div>


                </div>
            </section>
        )
    };
}

export default App;
