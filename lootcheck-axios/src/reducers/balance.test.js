import balanceReducer  from './balance'
import balanceReducer2  from './balance'
import * as constants from '../actions/constants'

describe('Test Balance Reducer', () => {
    const balance = 10;
    describe('when initialize', () => {        

        it('sets a balancer', () =>{        
            expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance }))
                .toEqual(balance)
        })

        it('re initialize', () =>{        
            expect(balanceReducer2(undefined, {}))
                .toEqual(balance)
        })

    })
    
    

    

    it('depoit 10 in the `balance`', () => {
        const deposit = 10
        expect(balanceReducer(balance, {type: constants.DEPOSIT, deposit }))
            .toEqual(balance + deposit)        
    })

    it('withDrawl 5 in the `balance`', () => {
        const withdraw = 5
        expect(balanceReducer(balance, {type: constants.WITHDRAW, withdraw }))
            .toEqual(balance - withdraw)        
    })

})