import React from 'react'
import { shallow } from 'enzyme'
import Gift from './Gift'


describe("Gift", () => {
    const mockRemove = jest.fn()
    const id = 1
    const props = { gift: id, handleRemove: mockRemove}
    const gift = shallow(<Gift {...props} />)
    it('renders correctly', () => {
        expect(gift).toMatchSnapshot()
    })
    it('initialize `person`', () =>{
        expect(gift.state()).toEqual({person: '', present: ''})
    })
    describe("when typing into person input", () => {
        const person = 'Uncle'
        beforeEach(() => {
            gift.find('.input-person').simulate('change', {
                target : { value: person} 
            })
        })
        it('update `person` in state', () =>{
            expect(gift.state().person).toEqual(person)
        })
    })

    describe("when typing into gift input", () => {
        const present = 'Golf Club'
        beforeEach(() => {
            gift.find('.input-gift').simulate('change', {
                target : { value: present} 
            })
        })
        it('update `present` in state', () =>{
            expect(gift.state().present).toEqual(present)
        })
    })

    describe('when user click in remove a `Remove Gift` button', () =>{
        beforeEach(() => {
            gift.find('.button-remove').simulate('click')
        })
        it('call remove `Gift`', () =>{
            expect(mockRemove).toHaveBeenCalledWith(id)            
        })
    })
})