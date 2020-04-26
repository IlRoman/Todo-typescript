import React from 'react';
import { shallow } from 'enzyme';
import { TextArea } from '../components/TextArea'

describe('<TextArea />', () => {
    it('should create task on submit', () => {
        const mocOnCreateTask = jest.fn();
        const props = { content: 'task 1', onCreateTask: mocOnCreateTask, }
        const wrappedComponent = shallow(<TextArea {...props} />)
        const fakeEvent = { target: { value: 'task 1' } }
        wrappedComponent.find('.create-task__input').simulate('change', fakeEvent)
        wrappedComponent.find('.create-task-btn').simulate('click')
        expect(mocOnCreateTask).toBeCalledWith('task 1')
    })
})