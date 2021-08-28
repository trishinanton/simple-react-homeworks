import {UserType} from "../HW8";

type UpType = {
    type: 'sort'
    payload: 'up'
}
type DownType = {
    type: 'sort'
    payload: 'down'
}
type CheckType = {
    type: 'check'
    payload: 18
}
type ActionsType = UpType | DownType | CheckType;

export const homeWorkReducer = (state: UserType, action: ActionsType): UserType => {
    switch (action.type) {
        case 'sort': {
            return action.payload==='up' ?
                [...state.sort((a,b)=>a.age <= b.age?-1:1)]:
                [...state.sort((a,b)=>a.age > b.age?-1:1)]
        }
        case 'check': {
            return [...state.filter(el=>el.age>=action.payload)]
        }
        default: return state
    }
}