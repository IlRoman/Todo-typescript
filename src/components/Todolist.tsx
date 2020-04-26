import React, { useState, useEffect } from 'react';
import { TextArea } from './TextArea';
import { TasksList } from './TasksList';
import { connect } from 'react-redux';
import * as actions from '../redux/actions'
import { tasksListSelector } from '../redux/selectors'

type TaskType = {
    id: number
    text: string
    done: any
}

type TodoListProps = {
    onCreateTask: any
    onDeleteTask: any
    onUpdateTask: any
    getTasksList: any
    tasks: Array<TaskType>
}

const TodoList: React.FC<TodoListProps> = ({ onCreateTask, onDeleteTask, onUpdateTask, getTasksList, tasks }) => {

    useEffect(() => {
        getTasksList();
    }, [])

    const sortedList = tasks
        .sort((a, b) => a.done - b.done);

    return (
        <>
            <h1 className="title">Todo list</h1>
            <main className="todo-list">
                <TextArea onCreateTask={onCreateTask} />
                <ul className="list">
                    {sortedList.map(task =>
                        <TasksList
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            done={task.done}
                            onDelete={onDeleteTask}
                            onChange={onUpdateTask}
                        />
                    )}
                </ul>
            </main>
        </>
    )
}

const mapState = (state: any) => {
    return {
        tasks: tasksListSelector(state)
    }
}

const mapDispatch = {
    getTasksList: actions.getTasksList,
    onUpdateTask: actions.onUpdateTask,
    onDeleteTask: actions.onDeleteTask,
    onCreateTask: actions.onCreateTask,
}

export default connect(mapState, mapDispatch)(TodoList)