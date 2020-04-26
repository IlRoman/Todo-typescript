import React from 'react';
import PropTypes from 'prop-types';

type TasksListProps = {
    text: string
    done: boolean
    id: number
    onDelete: any
    onChange: any
}

export const TasksList = ({ text, done, id, onDelete, onChange }: TasksListProps) => {
    return (
        <li className={`list-item ${done ? 'list-item_done' : ''}`}>
            <input
                className="list-item__checkbox"
                defaultChecked={done}
                type="checkbox"
                onChange={() => onChange(id)}
            />
            <span className="list-item__text">{text}</span>
            <button
                className="list-item__delete-btn"
                onClick={() => onDelete(id)}
            ></button>
        </li>
    );
};

TasksList.propTypes = {
    text: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.string,
    onDelete: PropTypes.func,
    onChange: PropTypes.func
}