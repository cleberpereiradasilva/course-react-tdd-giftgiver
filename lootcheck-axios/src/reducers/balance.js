import * as constants from '../actions/constants'
import cookie from 'react-cookies'


const BALANCE_COOKIE = 'BALANCE_COOKIE'

const balanceReducer = (state = 0, action) => {
    let balance = undefined    
    switch(action.type){
        case(constants.SET_BALANCE):
            balance = action.balance
            break;
        case(constants.DEPOSIT):
            balance = state = state + action.deposit
            break;
        case(constants.WITHDRAW):            
            balance = state = state - action.withdraw
            break;
        default:          
            balance = parseInt(cookie.load(BALANCE_COOKIE), 10) || state            
    }
    
    cookie.save(BALANCE_COOKIE, balance)
    return balance
}

export default balanceReducer
    
