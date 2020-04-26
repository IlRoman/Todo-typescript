import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import TodoList from './components/Todolist'

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    )
}

export default App;