import { TASKS_LIST_RECEIVED } from './actions'

const defaultState = {
    tasksList: [],
}

const eventReducer = (state = defaultState, action) => {
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