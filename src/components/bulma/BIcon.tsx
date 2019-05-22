import * as React from 'react';
import {classNames} from '../../util/classNames';

export class BIcon extends React.Component<{ align: 'left' | 'right'; icon: string; }, {}, {}> {

    static readonly displayName = 'BIcon';

    get isLeft(): boolean {
        return this.props.align === 'left'
    }

    get isRight(): boolean {
        return this.props.align === 'right'
    }


    render(): React.ReactNode {

        const className = classNames({
            icon: true,
            'is-left': this.isLeft,
            'is-right': this.isRight
        });

        return (
            <span className={className}>
                <i className={`fas ${this.props.icon}`}/>
            </span>
        )
    }
}