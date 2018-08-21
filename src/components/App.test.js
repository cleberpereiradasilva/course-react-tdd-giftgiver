import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App />)

it('renders correctly', () => {
    expect(app).toMatchSnapshot()
})
it('initializers the `state` with empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
})
it('add new gift to to `state` whein clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click')
    expect(app.state().gifts).toEqual([{id: 1}])
})

it('add two gifts to to `state` whein clicking the `add gift` button', () => {    
    app.find('.btn-add').simulate('click')
    expect(app.state().gifts).toEqual([{id: 1}, {id: 2}])
})
