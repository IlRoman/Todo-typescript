import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TasksList = ({ text, done, id, onDelete, onChange }) => {
    return (
        <li className={classNames('list-item', { 'list-item_done': done })}>
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