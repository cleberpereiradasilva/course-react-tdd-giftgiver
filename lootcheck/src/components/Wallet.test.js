import React from 'react'
import { shallow } from 'enzyme'
import  { Wallet } from './Wallet'

describe('Wallet', () => {
    const mockDeposit = jest.fn()
    const mockWithdraw = jest.fn()
    const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw }
    const wallet = shallow(<Wallet {...props}/>)
    
    it('check if `Wallet` exist', () => {
        expect(wallet).toMatchSnapshot()
        
    })

    it('check if `balance` is visible', () => {        
        expect(wallet.find('.span-balance').text()).toEqual(`Wallet balance: ${ props.balance }`)
    })

    it('create input to deposit into or withdraw from balance', () => {        
        expect(wallet.find('.input-wallet').exists()).toBe(true)
    })
    
    describe('when the user type into input', () => {
        const userBalance = '25'
        beforeEach(() => {
            wallet.find('.input-wallet').simulate('change', {
                target: { value: userBalance }
            })            
        })
        it('update local wallet balance', () => {                               
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
        })
        describe('and user wants to make a deposit', () => {
            beforeEach(() => wallet.find('.btn-deposit').simulate('click'))
            it('dispatches `deposit`', () => {        
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance,10))
            })
        })


        describe('and user wants to witdhdraw', () => {
            beforeEach(() => wallet.find('.btn-withdraw').simulate('click'))
            it('dispatches `withdraw`', () => {        
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance,10))
            })
        })



    })
})
