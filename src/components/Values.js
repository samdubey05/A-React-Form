import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class Values extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      }
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      }

render(){
    const {values : {firstname , lastname }} =this.props;
    return(
        
        <div>
            <MuiThemeProvider>
                <AppBar title="Your Details" />
                <List>
                    <ListItem primaryText="FirstName" secondaryText = {firstname} />
                </List>
                <List>
                    <ListItem primaryText="LastName" secondaryText = {lastname} />
                </List>
            </MuiThemeProvider>
        </div>
    );
}
}