import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

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
        const max_id = max_ids.length == 0 ? 0 : Math.max(...max_ids)
        gifts.push({ id: max_id + 1 })
        this.setState({
            gifts
        })
    }
    
    render() {
        return (
            <div>
                <h1><Button className='btn-add' onClick={this.addGift}>Add Gifit</Button></h1>
            </div>
        )
    }
}

export default App
