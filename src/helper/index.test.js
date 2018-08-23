import { max_number } from './index'

describe('check  `max_number`', () =>{  
    it('check if `max_number` is 0', () => {        
        expect(max_number([])).toEqual(0)
    }) 
    it('check if `max_number` is 4', () => {        
        expect(max_number([1,2,3,4])).toEqual(4)
    }) 
})
