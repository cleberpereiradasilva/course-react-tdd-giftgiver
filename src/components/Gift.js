import React, { Component } from 'react'
import { 
    Form, 
    FormGroup, 
    FormControl, 
    ControlLabel,
    Col,
    Row,
    Button 
} from 'react-bootstrap'

class Gift extends Component{

    constructor(props){
        super(props)
        this.state = { person: '', present: ''}
    } 

    render(){
        return (
            <Row className='gift'>
                <Form className='gift__form'>
                    <div className='row'>
                        <Col md={5}>
                            <FormGroup>
                                <ControlLabel>Person</ControlLabel>
                                <FormControl className='input-person'                         
                                    onChange={ e => this.setState({ person: e.target.value }) } />                                       
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                        <FormGroup>
                            <ControlLabel>Present</ControlLabel>
                            <FormControl className='input-gift'                         
                                onChange={ e => this.setState({ present: e.target.value }) } />
                        </FormGroup>
                        </Col>
                        <Col md={2} className='gift__form__row__button'>
                            <Button type='button' className='btn btn-danger button-remove' 
                                onClick={() => {
                                    this.props.handleRemove(this.props.gift)
                                }}>
                                X
                            </Button>
                        </Col>
                    </div>
                </Form>
                
            </Row>
        )
    }
}

export default Gift;