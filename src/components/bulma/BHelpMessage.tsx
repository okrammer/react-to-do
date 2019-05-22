import React from 'react';
import {classNames} from '../../util/classNames';

export function BHelpMessage({message, type}: { message: string, type: 'danger' }): JSX.Element {
    const className = classNames({
        help: true,
        'is-danger': type === 'danger'
    });
    return <p className={className}>{message}</p>
}