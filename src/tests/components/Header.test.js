import React from 'react'
import {shallow} from 'enzyme'
import {Header} from '../../components/Header'

test('test header render', ()=>{
    const wrapper = shallow(<Header logOut={()=>{}}/>)
    expect(wrapper).toMatchSnapshot()
})

test('test logout Button', ()=>{
    const logout = jest.fn()
    const wrapper = shallow(<Header logOut={logout}/>)

    wrapper.find('button').simulate('click')
    expect(wrapper).toMatchSnapshot()
    expect(logout).toHaveBeenCalled()
})
