import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import * as EmailValidator from 'email-validator';
import RaisedButton from 'material-ui/RaisedButton';
import Register from './Register';
import Values from './Values';
import './Login.css';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      username: '',
      password: '',
      firstname:'',
      lastname:'',
      eamil:'',
      occupation:'',
      country:'',
      gender:'',
      agegroup: '',
      errorText: ''
    }
  
  }

  nextStep = () => {
    const { step , username , password } = this.state;
  
    console.log(EmailValidator.validate(username));
    if (EmailValidator.validate(username) && username == 'sam@qait.com' && password == 'qainfotech') {
      this.setState({
        step: step + 1
      });
    }
    else if (username == '' && password == ''){
      alert("please enter to continue");
    }
    else {
      alert("Invalid credentials")
    }
  }
  //go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
    step: step-1
    });
  }
  handleUsernameChange = (event) => {
   
    this.setState({
      username: event.target.value,
    })
    if(EmailValidator.validate(this.state.username)){
      this.setState({ errorText: '' })
    }
    
    else if(!EmailValidator.validate(this.state.username)){
      this.setState({ errorText: 'Invalid format: abc@mail.com' })
    }
    else if(this.state.username == ''){
      this.setState({ errorText: '' })
    }
  
    }
  

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  
  

  render() {
    const { step } = this.state;
    const { firstname, lastname } = this.state;
    const values = { firstname, lastname};

    switch (step) {
      case 1:
        return (
          <MuiThemeProvider>
            <Fragment>
              <div className = "login">
              <AppBar title="Login" />
              <div>
                <TextField label="Email Address" hintText="yourname@qainfotech.com"  errorText= {this.state.errorText} floatingLabelText="Username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
              </div>
              <div>
                <TextField label="Password" hintText="Enter Password" floatingLabelText="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
              </div>
              <RaisedButton label="Continue" primary={true} type="submit" onClick={this.nextStep} />
              </div>
            </Fragment>
          </MuiThemeProvider>
        );
      case 2:
        return (
          <div className="App">
            <Register
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values = {values}
            />
          </div>
          
        );
      case 3: 
          return(
            <div className ="App">
            <Values 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values = {values}
            />
            </div>
            )
    }
  } 
}