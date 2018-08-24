import React from 'react'
import { shallow } from 'enzyme'
import App from './App'



describe("App", () => {
    const app = shallow(<App />)
    it('renders correctly', () => {
        expect(app).toMatchSnapshot()
    })
    it('initializers the `state` with empty list of gifts', () => {
        expect(app.state().gifts).toEqual([])
    })

    describe('Click `add gift`', () =>{
        const id = 1
        beforeEach(() => {
            app.find('.btn-add').simulate('click')
        })

        afterEach(() => {
            app.setState({ gifts: []})
        })

        it('add new gift to to `state`', () => {        
            expect(app.state().gifts).toEqual([{id}])
        }) 
        it('add a new gifts to the render list', () => {            
            expect(app.find('.gift-list').children().length).toEqual(1)
        })
        it('create a `Gift` component', () => {            
            expect(app.find('Gift').exists()).toBe(true)
        })       

        describe('when user remove a `Gift`', () =>{
            beforeEach(() => {
                app.instance().removeGift(id)
            })
            it('check if `Gift` be removed from state', () =>{
                expect(app.state().gifts).toEqual([])
            })
        })
        
    })   

   
    
})

