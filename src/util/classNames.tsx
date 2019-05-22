import {default as originalClassNames} from 'classnames';

interface ClassDictionary {
    [id: string]: any;
}

type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

interface ClassArray extends Array<ClassValue> {
} // tslint:disable-line no-empty-interface

export function classNames(arg: ClassValue): string {
    return originalClassNames(arg);
}