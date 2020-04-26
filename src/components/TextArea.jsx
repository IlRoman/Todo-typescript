import React from 'react';
import PropTypes from 'prop-types';

export class TextArea extends React.Component {
    state = {
        content: ''
    }

    handleChange = (element) => {
        const { name, value } = element.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="create-task">
                <input
                    name="content"
                    className="create-task__input"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button
                    className="btn create-task-btn"
                    onClick={() => this.props.onCreateTask(this.state.content)}
                >Create</button>
            </div>
        );
    }
}

TextArea.propTypes = {
    onCreateTask: PropTypes.func,
}