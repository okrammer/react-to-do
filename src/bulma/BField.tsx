import React from 'react';
import {ReactNodeArray} from 'prop-types';
import {classNames} from '../util/classNames';


export function BField({children, hasAddons}: { children: ReactNodeArray, hasAddons: boolean }) {

    return <div className={classNames({field: true, 'has-addons': hasAddons})}>{children}</div>

}