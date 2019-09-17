import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import './Email.css'
import SweetAlert from 'react-bootstrap-sweetalert';

export default class Email extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: '',
            alert: null,
            name:''
        };
    }

    getValidationState() {
        const str = this.state.value;
        var n = str.includes("@" && ".")
        if (n) return 'success';
        else if (str === '') return null;
        else if (!n) return 'error';
        return null;
    }
    getName(){
        let email = this.state.value
        let result = email.split('@')
        console.log(result[0]);
        this.setState({ name: result});
        
    }

    handleChange(e) {

        this.setState({ value: e.target.value });
    }

    handleEmailEntry = (e) => {
        e.preventDefault();
        this.setState({ value: '' })
        this.getName();
        this.renderSweetAlert();

       
    }
    renderSweetAlert = () => {
        

        if(this.state.value){
            const getAlert = () => (
            <SweetAlert 
              success 
              title="Merci!"
              onConfirm={() => this.hideAlert()}
            >
            {/* {this.state.name[0]}! */}
            </SweetAlert>
          );
      
          this.setState({
            alert: getAlert()
          });
        }
        }
        
      
        hideAlert() {
          console.log('Hiding alert...');
          this.setState({
            alert: null
          });
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel className="email">Enter your email to sign up for our mailing list / Entrée votre address courriel</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter Email Address"
                        onChange={this.handleChange}
                    />
                    <Button onClick={this.handleEmailEntry}>Enter/Entrée</Button>
                    {this.state.alert}
                    <FormControl.Feedback />
                </FormGroup>
            </form>
        );
    }
}