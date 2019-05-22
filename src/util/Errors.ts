export class Errors<T extends string> {
    private errorsByControl: { [control: string]: string[] } = {};

    addError(control: T, message: string): void {
        let errors = this.errorsByControl[control] || [];
        this.errorsByControl[control] = [...errors, message];
    }

    hasError(control?: T): boolean {
        if (control) {
            return this.getErrors(control).length > 0;
        }
        return Object
            .keys(this.errorsByControl)
            .some(control => this.hasError(control as T))
    }

    getErrors(control: T): string [] {
        return this.errorsByControl[control] || [];
    }
}