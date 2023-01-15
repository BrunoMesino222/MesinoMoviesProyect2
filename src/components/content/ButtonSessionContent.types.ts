export type ButtonSessionContentT = {
    isLoading: boolean,
    status?: 'success' | 'failure',
    onClick: ()=> void
}