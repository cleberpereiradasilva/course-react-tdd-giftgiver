import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift'
import { max_number } from '../helper/index'

class App extends Component {
    constructor(props) {
        super(props)
        this.addGift = this.addGift.bind(this)        
        this.state = {
            gifts: []
        }
    }

   

    addGift() {
        const gifts = this.state.gifts
        const max_ids = gifts.map(gift => gift.id)
        const max_id = max_number(max_ids)
        gifts.push({ id: max_id + 1 })
        this.setState({
            gifts
        })
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id)
        this.setState({
            gifts
        })
    }
    
    
    render() {
        return (
            <div>
                <h1>Gifits</h1>                
                <div className='gift-list'>
                {
                    this.state.gifts.map(item => {
                        return (
                            <Gift key={item.id} 
                            gift={item.id}
                            handleRemove={this.removeGift}
                            />
                        )
                    })
                }
                </div>
                <Button className='btn-add btn btn-success' onClick={this.addGift}>
                    New Gift
                </Button>
            </div>
        )
    }
}

export default App
