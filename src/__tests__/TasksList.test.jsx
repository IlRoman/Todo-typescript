import React from 'react';
import { shallow } from 'enzyme';
import { TasksList } from '../components/TasksList'

describe('<TasksList />', () => {
    it('should display done task', () => {
        const props = {
            text: 'task 1',
            done: true,
        }
        const wrappedComponent = shallow(<TasksList {...props} />)
        expect(wrappedComponent).toMatchSnapshot()
    })

    it('should display undone task', () => {
        const props = {
            text: 'task 1',
            done: false,
        }
        const wrappedComponent = shallow(<TasksList {...props} />)
        expect(wrappedComponent).toMatchSnapshot()
    })

    it('should update task on checkbox checked', () => {
        const props = {
            id: '1',
            onChange: jest.fn(),
            text: 'task 1',
            done: false,
        }
        const wrappedComponent = shallow(<TasksList {...props} />)
        wrappedComponent.find('.list-item__checkbox').simulate('change')
        expect(props.onChange).toBeCalledWith('1')
    })

    it('should delete task', () => {
        const props = {
            id: '1',
            onChange: jest.fn(),
            text: 'task 1',
            done: false,
            onDelete: jest.fn()
        }
        const wrappedComponent = shallow(<TasksList {...props} />)
        wrappedComponent.find('.list-item__delete-btn').simulate('click')
        expect(props.onDelete).toBeCalledWith('1')
    })
})