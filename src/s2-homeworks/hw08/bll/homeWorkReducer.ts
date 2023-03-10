import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
            return  [...state].sort(function (a,b) {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                 else return 0
            })}
            if (action.payload === 'down') {
                return [...state].sort(function (a,b) {
                    if (a.name > b.name) return -1
                    else if (a.name < b.name) return 1
                    else return 0
                })
            } else return state
            // need to fix
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
            // need to fix
        }
        default:
            return state
    }
}
