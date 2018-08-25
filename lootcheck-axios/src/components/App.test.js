import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Wallet from './Wallet'

describe('App', ()=> {
    const app = shallow(<App />)
    

    it('app exist', ()=> {
        expect(app).toMatchSnapshot()
    })

    it('Wallet exist', ()=> {        
        expect(app.find('Connect(Wallet)').exists()).toBe(true)
    })
})
