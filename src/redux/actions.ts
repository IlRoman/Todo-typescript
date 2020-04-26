import { fetchTasksList, updateTask, deleteTask, createTask } from '../gateWays'
import { tasksListSelector } from '../redux/selectors';

export const TASKS_LIST_RECEIVED = 'GET_TASKSLIST';
export const ADD_TASK = 'ADD_EVENT';
export const DELETE_TASK = 'DELETE_EVENT';
export const UPDATE_TASK = 'UPDATE_TASK';

type ActionType = {
    type: string,
    payload: {
        tasksList: Array<Object>
    }
}

export const tasksListReceived = (tasksList: Array<Object>): ActionType => {
    const action = {
        type: TASKS_LIST_RECEIVED,
        payload: {
            tasksList,
        }
    }
    return action;
}

export const getTasksList = (tasksList: Response) => {
    const thunkAction = function (dispatch: any, getState: any) {
        fetchTasksList()
            .then(tasksList => dispatch(tasksListReceived(tasksList)))
    };
    return thunkAction;
}

export const onCreateTask = (text: string) => {
    const thunkAction = function (dispatch: any, getState: any) {
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

export const onUpdateTask = (taskId: number) => {
    const thunkAction = function (dispatch: any, getState: any) {
        const state = getState();
        const tasksList = tasksListSelector(state)
        const task = tasksList.find(
            (elem: { id: number; }) => elem.id === taskId,
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

export const onDeleteTask = (taskId: number) => {
    const thunkAction = function (dispatch: any, getState: any) {
        deleteTask(taskId)
            .then(tasksList => dispatch(getTasksList(tasksList)))
    };
    return thunkAction;
}