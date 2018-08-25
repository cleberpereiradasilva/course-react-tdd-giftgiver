//https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { FETCH_BITCOIN } from './constants'
import { fetchBitcoin } from './bitcoin'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const createMockStore = configureMockStore([thunk])
const store = createMockStore({ bitcoin: {} })
const mockResponse = { body: {bpi: 'bitcoin price index' }}
const mock = new MockAdapter(axios)    
mock.onGet('https://api.coindesk.com/v1/bpi/currentprice.json').reply(200, mockResponse)

it('create a async action to fetchBitcoin', () => {    
        const expectedActions = [{ bitcoin: mockResponse, type: FETCH_BITCOIN }]

        return store.dispatch(fetchBitcoin()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

})