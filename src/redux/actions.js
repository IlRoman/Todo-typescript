import { fetchTasksList, updateTask, deleteTask, createTask } from '../gateWays'
import { tasksListSelector } from '../redux/selectors';

export const TASKS_LIST_RECEIVED = 'GET_TASKSLIST';
export const ADD_TASK = 'ADD_EVENT';
export const DELETE_TASK = 'DELETE_EVENT';
export const UPDATE_TASK = 'UPDATE_TASK';

export const tasksListReceived = (tasksList) => {
    const action = {
        type: TASKS_LIST_RECEIVED,
        payload: {
            tasksList,
        }
    }
    return action;
}

export const getTasksList = () => {
    const thunkAction = function (dispatch) {
        fetchTasksList()
            .then(tasksList => dispatch(tasksListReceived(tasksList)))
    };
    return thunkAction;
}

export const onCreateTask = text => {
    const thunkAction = function (dispatch, getState) {
        const newTask = {
            text,
            done: false,
            createdAt: new Date().toISOString(),
        }
        createTask(newTask)
            .then(() => dispatch(getTasksList(getState())))
    };
    return thunkAction;
}

export const onUpdateTask = (taskId) => {
    const thunkAction = function (dispatch, getState) {
        const state = getState();
        const tasksList = tasksListSelector(state)
        const task = tasksList.find(
            task => task.id === taskId,
        )

        const upDatedTask = {
            ...task,
            done: !task.done
        }

        updateTask(taskId, upDatedTask)
            .then(tasksList => dispatch(getTasksList(tasksList)))
    };
    return thunkAction;
}

export const onDeleteTask = (taskId) => {
    const thunkAction = function (dispatch) {
        deleteTask(taskId)
            .then(tasksList => dispatch(getTasksList(tasksList)))
    };
    return thunkAction;
}