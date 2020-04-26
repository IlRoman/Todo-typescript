import { TASKS_LIST_RECEIVED } from './actions'

type DefaultStateType = {
    tasksList: Array<Object>
}

const defaultState = {
    tasksList: [],
}

const eventReducer = (state: DefaultStateType = defaultState, action: any): DefaultStateType => {
    switch (action.type) {
        case TASKS_LIST_RECEIVED: {
            return {
                ...state,
                tasksList: action.payload.tasksList,
            }
        }
        default:
            return state;
    }
}

export default eventReducer;