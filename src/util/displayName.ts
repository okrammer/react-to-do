export function displayName(component: any): string | null {
    if(!component){
        return null;
    }
    return component.displayName || component.name || 'Component';
}