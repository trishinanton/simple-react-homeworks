const SET_LOADING = 'SET_LOADING'
const initState = {
    isLoading: false
}
type InitialStateType = typeof initState

export const loadingReducer = (state:InitialStateType = initState, action: loadingActionType): InitialStateType => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {...state, isLoading:action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): loadingActionType => {
    return {type: SET_LOADING, isLoading}
}
type loadingActionType = {
    type: typeof SET_LOADING
    isLoading: boolean
}