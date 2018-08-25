import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions/balance'


import { 
    Form, 
    FormGroup, 
    FormControl,     
    Col,
    Row,
    Button 
} from 'react-bootstrap'

export class Wallet extends Component{
    constructor(){
        super()
        this.state = {
            balance: undefined
        }
    }
    
    updateWallet = event => {
        this.setState({
            balance: parseInt(event.target.value, 10)
        })
    }
    deposit = () => this.props.deposit(this.state.balance)
    withdraw = () => this.props.withdraw(this.state.balance)
    
    render() {
        return (            
                <Row className='gift'>
                    <Form className='gift__form'>
                        <div className='row'>
                            <Col md={12}>
                                <h3 className='span-balance'>Wallet balance: {this.props.balance}</h3>
                            </Col>
                            <Col md={12}>
                            <FormGroup>                                
                                <FormControl className='input-wallet'                         
                                    onChange={this.updateWallet}  />
                            </FormGroup>
                            </Col>
                            <Col md={6} className='gift__form__row__button'>
                                <Button type='button' className='btn btn-success btn-deposit' 
                                onClick={this.deposit} >
                                    +
                                </Button>
                            </Col>
                            <Col md={6} className='gift__form__row__button'>
                                <Button type='button' className='btn btn-danger btn-withdraw' 
                                onClick={this.withdraw} >
                                    -
                                </Button>
                            </Col>
                            
                        </div>

                    </Form>
            </Row>
        )
    }
}

export default connect(state => { return { balance: state.balance }}, { deposit, withdraw })(Wallet)
