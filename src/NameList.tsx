import React, {Component} from 'react';

export interface NameListProp {
    names: string[];
    onRemoveName: (index: number) => void

}

export class NameList extends Component<NameListProp, {}, {}> {
    render(): React.ReactNode {
        return (
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th colSpan={2} >Names</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.names.map((name, idx) =>
                        (
                            <tr key={idx}>
                                <td>{name}</td>
                                <td style={{'width': '20%'}}>
                                    <button onClick={() => this.props.onRemoveName(idx)}>remove</button>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        );
    }
}