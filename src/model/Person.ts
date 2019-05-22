import {v4} from 'uuid';
import {immerable} from 'immer';

export class Person {
    [immerable] = true;

    readonly id: string = v4();

    constructor(public name: string, public color: string) {
    }
}