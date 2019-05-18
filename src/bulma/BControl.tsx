import {ReactNodeLike} from 'prop-types';
import React from 'react';
import {BIcon} from './BIcon';
import {classNames} from '../util/classNames';
import {BHelpMessage} from './BHelpMessage';

export interface BControlProps {
    children: ReactNodeLike,
    isExpanded?: boolean
    leftIcon?: string | false
    rightIcon?: string | false
    errors?: string[]
}

export function BControl({children, isExpanded = false, leftIcon, rightIcon, errors = []}: BControlProps) {

    const className = classNames({
        control: true,
        'has-icons-left': leftIcon,
        'has-icons-right': rightIcon,
        'is-expanded': isExpanded
    });


    return <div className={className}>
        {children}
        {leftIcon && <BIcon align='left' icon={leftIcon}/>}
        {rightIcon && <BIcon align='right' icon={rightIcon}/>}
        {errors.map((message, idx) => <BHelpMessage key={idx} message={message} type='danger'/>)}
    </div>
}