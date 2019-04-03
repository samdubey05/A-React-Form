import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Values from './Values';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
                errorText : '',
                firstname:'',
                lastname:''
        }
    }

    handleFirstnameChange = (event) => {
        this.setState({
           firstname : event.target.value 
          
          })
    }
    handleLastnameChange = (event) => {
        this.setState({
          lastname : event.target.value 
        })
    }
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    }
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    }

render(){
  
  const{ values  } =this.props;
    return(
        
        <div>
            <MuiThemeProvider>

               
              <div>
                <AppBar title="Input Details" />

            
              <div>
                <TextField label="FirstName" 
                hintText="Albert"  
                errorText= {this.state.errorText} 
                floatingLabelText="FirstName" type="text" 
                value={this.state.firstname} 
                onChange={this.handleFirstnameChange} 
                defaultValue={values.firstName} />
              </div>
              <div>
                <TextField label="LastName" hintText="Einstien" floatingLabelText="Lastname" type="text" value={this.state.lastname} onChange={this.handleLastnameChange} />
              </div>
              <div>
              <RaisedButton label="Continue" primary={true} type="submit" onClick={this.continue} />
              </div><br></br>
              <div>
              <RaisedButton label="Back" primary={false} type="submit" onClick={this.back} /></div>
              </div>
            </MuiThemeProvider>
        </div>
    );
}
}