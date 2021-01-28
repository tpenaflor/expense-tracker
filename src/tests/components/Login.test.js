import React from 'react'
import {shallow} from 'enzyme'
import {Login} from '../../components/Login'

test('test Login render', ()=>{
    const wrapper = shallow(<Login login={()=>{}}/>)
    expect(wrapper).toMatchSnapshot()
})


test('test Login Button', ()=>{
    const login = jest.fn()
    const wrapper = shallow(<Login login={login}/>)

    wrapper.find('button').simulate('click')
    expect(wrapper).toMatchSnapshot()
    expect(login).toHaveBeenCalled()
})
