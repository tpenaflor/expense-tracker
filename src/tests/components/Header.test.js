import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../components/Header'

test('test header render', ()=>{
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
})
