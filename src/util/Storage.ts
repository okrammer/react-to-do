import {State} from '../model/State';

const LOCAL_STORAGE_NAME = 'TodoList-State';

export class Storage {
    static save(state: State): void {
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
    }

    static load(): State | null {
        const stateJson = localStorage.getItem(LOCAL_STORAGE_NAME);
        if (stateJson) {
            try {
                return JSON.parse(stateJson);
            } catch (e) {
                return null;
            }
        }
        return null;
    }
}