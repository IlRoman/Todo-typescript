import React from 'react';
import { TextArea } from './TextArea';
import { TasksList } from './TasksList';
import { connect } from 'react-redux';
import * as actions from '../redux/actions'
import { tasksListSelector } from '../redux/selectors'
import PropTypes from 'prop-types';

class TodoList extends React.Component {
    componentDidMount() {
        this.props.getTasksList();
    }

    render() {
        const sortedList = this.props.tasks
            .slice()
            .sort((a, b) => a.done - b.done);

        return (
            <>
                <h1 className="title">Todo list</h1>
                <main className="todo-list">
                    <TextArea onCreateTask={this.props.onCreateTask} />
                    <ul className="list">
                        {sortedList.map(task =>
                            <TasksList
                                key={task.id}
                                id={task.id}
                                text={task.text}
                                done={task.done}
                                onDelete={this.props.onDeleteTask}
                                onChange={this.props.onUpdateTask}
                            />
                        )}
                    </ul>
                </main>
            </>
        )
    }
}

TodoList.propTypes = {
    text: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.string,
}

const mapState = state => {
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