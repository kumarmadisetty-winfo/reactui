import React, { Component } from 'react';
import Contacts from './bootstrapex';

const API_URL = process.env.REACT_APP_API_URL;

class GetApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.deleteObject = this.deleteObject.bind(this);
    this.cancelObject = this.cancelObject.bind(this);
  }
  render() {
    return (
      <Contacts contacts={this.state.contacts} deleteObject={this.deleteObject}
        cancelObject={this.cancelObject} />
    )
  }
  // Delete record from database
  deleteObject(row) {
    alert(row.id);
    const requestOptions = {
      method: 'DELETE'
    };
    fetch(API_URL + "/api/users/" + row.id, requestOptions).then((response) => {
      return response.json();
    }).then((result) => {
      console.log(result);
      console.log(row.id);
      this.setState({ contacts: this.state.contacts.filter(c => row.id !== c.id) });
    });
  }

  // Cancel function
  cancelObject() {
    alert("canceled object");
    window.location.reload();
    //this.setState({ contacts: this.state.contacts });
  }

  // Get API call
  componentDidMount() {

    fetch(API_URL + '/api/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }
}

export default GetApi;