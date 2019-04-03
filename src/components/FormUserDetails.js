import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    state = {
        step : 1
    }
  nextStep = e => {
    const { step , email , password } = this.state;
    this.props.nextStep();
  
    if ( email == 'sam@qait.com' && password == 'qainfotech') {
      this.setState({
        step: step + 1
      });
     
}
    else if (email == '' && password == ''){
      alert("please enter to continue");
    }
    else {
      alert("Invalid credentials")
    }
  }
  
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
    
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          /> 
            <br />
          <TextField
            hintText="Enter Your Password"
            floatingLabelText="Password"
            type = "password"
            onChange={handleChange('password')}
            defaultValue={values.password}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.nextStep}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;