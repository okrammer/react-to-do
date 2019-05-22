
export function actionCreator<P extends {}>(type: string): ActionCreator<P> {
    return new ActionCreator<P>(type);
}



export class ActionCreator<P extends {}>{

    constructor(private readonly type: string){

    }

    create(props: P): Action<P>{
        return {
            type: this.type,
            ...props
        }
    }

    is(action: any): action is P {
        return action.type === this.type;
    }

}

export type Action <P> = {type: string} & P