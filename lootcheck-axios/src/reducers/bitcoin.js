import * as constants from '../actions/constants'

const bitcoinReducer = (state = {}, action) => {
    let bitcoin = undefined        
    switch(action.type){
        case(constants.FETCH_BITCOIN):
            bitcoin = action.bitcoin
            break;       
        default:          
            bitcoin = state
    }
    return bitcoin
}

export default bitcoinReducer
    
