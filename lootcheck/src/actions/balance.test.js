import * as actions from './balance'
import * as constants from './constants'

it('create balance', ()=>{
    const balance = 0
    const expectedAction = { type: constants.SET_BALANCE, balance }
    expect(actions.setBalance(balance)).toEqual(expectedAction)
})


it('create deposit', ()=>{
    const deposit = 0
    const expectedAction = { type: constants.DEPOSIT, deposit }
    expect(actions.deposit(deposit)).toEqual(expectedAction)
})

it('create withdraw', ()=>{
    const withdraw = 0
    const expectedAction = { type: constants.WITHDRAW, withdraw }
    expect(actions.withdraw(withdraw)).toEqual(expectedAction)
})


