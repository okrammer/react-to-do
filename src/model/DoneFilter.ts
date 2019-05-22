export const defaultDoneFilterName = 'UNFILTERED';

export const doneFilterValues = [
    {name: defaultDoneFilterName, label: 'Filter by', value: undefined},
    {name: 'FILTER_DONE', label: 'Done', value: true},
    {name: 'FILTER_NOT_DONE', label: 'Not Done', value: false},
]
export type DoneFilterValue = {name: string, label: string, value: boolean | undefined }

