import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';
import {Provider} from 'react-redux';

describe('Manage Course Page', () => {

  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: {saveCourse: () => { return Promise.resolve(); }},
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const submitButton = wrapper.find('input').last();
    expect(submitButton.prop('type')).toBe('submit');
    submitButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
