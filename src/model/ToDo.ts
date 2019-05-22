import {v4} from 'uuid'
import {immerable} from 'immer';

export class ToDo {
    [immerable] = true;

    id: string = v4();

    constructor(public personId: string, public description: string, public done: boolean){
    }
}