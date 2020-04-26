import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../components/Todolist'

describe('<TodoList />', () => {
    it('should display sorted by tasks list "done" status', () => {
        const wrappedComponent = shallow(<TodoList />)
        expect(wrappedComponent).toMatchSnapshot()
    })
})