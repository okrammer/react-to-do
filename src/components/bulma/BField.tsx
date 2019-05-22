import React from 'react';
import {ReactNodeLike} from 'prop-types';
import {classNames} from '../../util/classNames';


export function BField({children, hasAddons = false}: { children: ReactNodeLike, hasAddons?: boolean }) {

    return <div className={classNames({field: true, 'has-addons': hasAddons})}>{children}</div>

}