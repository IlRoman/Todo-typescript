import React, { useState } from 'react';

export const TextArea = ({ onCreateTask }: any) => {
    const [text, setText] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(
            event.target.value
        )
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onCreateTask(text)
            setText('')
        }
    }

    return (
        <div className="create-task">
            <input
                name="text"
                className="create-task__input"
                type="text"
                value={text}
                onChange={handleChange}
                onKeyPress={keyPressHandler}
            />
            <button
                className="btn create-task-btn"
                onClick={() => {
                    onCreateTask(text)
                    setText('')
                }}
            >Create</button>
        </div>
    );
}