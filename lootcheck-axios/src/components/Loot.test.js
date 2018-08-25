import React from 'react'
import { mount, shallow } from 'enzyme'
import { Loot } from './Loot'

describe('Loot', () => {
    const mockFetchBitcoin = jest.fn()
    let props = { balance: 10, bitcoin: {} }
    let loot = shallow( <Loot {...props} />  )

    it('render Loot', () => {
       expect(loot).toMatchSnapshot()
    })
 
    describe('when mounted', () => {
        beforeEach(() => {
          props.fetchBitcoin = mockFetchBitcoin
          loot = mount(<Loot {...props} />)
        })
        it('dispatches the `fetchBitcoin()` method it receives from props', () => {
          expect(mockFetchBitcoin).toHaveBeenCalled()
        })


        describe('when there are valid bitcoin props', () => {
            beforeEach(() => {
                props.balance=10
                props.bitcoin = { bpi: { USD: { rate: '1,000' }}}
                
                loot = mount(<Loot {...props} />)
            })

            it('display correct bitcoin value', () => {
                expect(loot.find('h3').text()).toEqual('Loot Balance: 0.01')
            })
        })

        
    
    })

})