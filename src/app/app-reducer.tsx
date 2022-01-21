export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as string | null
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

type ActionsType = SetAppStatusType
    | setAppErrorActionType

export const setAppStatusAC = (status: RequestStatusType) => {
    return {
        type: 'APP/SET-STATUS',
        status: status
    } as const
}

export type SetAppStatusType = ReturnType<typeof setAppStatusAC>

export const setAppErrorAC = (error: string | null) => {
    return {
        type: 'APP/SET-ERROR',
        error
    } as const
}
export type setAppErrorActionType = ReturnType<typeof setAppErrorAC>