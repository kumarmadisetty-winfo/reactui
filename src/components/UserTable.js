import React from 'react';
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import './user.css';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewUserGroup from './AddNewUserGroup';

const API_URL = process.env.REACT_APP_API_URL;

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editvisible: false,
      showEditForm: false,
      showNew: false,
      contacts: props.contacts,
      editcontacts: {},
      countryList: [],
      userId: ''
    };
    this.editFormatter = this.editFormatter.bind(this);
    this.retrieveCountryName = this.retrieveCountryName.bind(this);
    this.editObject = this.editObject.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.retrieveCountryList = this.retrieveCountryList.bind(this);
  }


  editFormatter(cell, row) {
    return (
      <div>
        <span>
          <Button label="Edit" style={{ marginLeft: "auto" }}
            className="p-button-raised p-button-rounded" onClick={() => this.editObject(row)} style={{ marginRight: '16px' }} />
          <Button label="Delete" style={{ marginLeft: "auto" }}
            className="p-button-raised p-button-rounded" onClick={() => this.props.deleteObject(row)} style={{ marginRight: '16px' }} />
        </span>
      </div>
    );
  }

  // Edit the user
  editObject(row) {
    // alert(row.id);
    this.setState({ userId: row.id });
    fetch(API_URL + '/api/users/' + row.id)
      .then(res => res.json())
      .then((data) => {
        this.setState({ editcontacts: data })
        // console.log(this.state.editcontacts);
        // console.log(this.state.editcontacts.country.name);
        // console.log(this.state.editcontacts.country.id);
      })
      .catch(console.log)
    this.retrieveCountryList();
    this.setState({ editvisible: true, showEditForm: true })

  }

  retrieveCountryName(cell, row) {
    return row.country.name;
  }


  retrieveCountryList() {

    fetch(API_URL + '/api/countries')
      .then(res => res.json())
      .then((data) => {
        this.setState({ countryList: data });
        // console.log(this.state.countryList[1].name);
      })
  }

  handleClick() {
    this.retrieveCountryList();
    this.setState({ editvisible: true, showNew: true })
  }

  renderEditForm = (_props) => {
    { console.log("==========", _props) }
    return <AddNewUserGroup userId={(_props && _props.userId) || ''} editcontacts={(_props && _props.editcontacts) || {}}
      countryList={(_props && _props.countryList) || []} cancelObject={this.cancelObject} />
  }

  // Cancel function
  cancelObject = () => {
    alert("canceled object");
    window.location.reload();
    //this.setState({ contacts: this.state.contacts });
  }

  render() {

    const userListPage = (
      <div>
        <div style={{ display: "flex" }}>
          <Button label="New" onClick={this.handleClick} style={{ marginLeft: "auto" }}
            className="p-button-raised p-button-rounded" />
        </div>
        <center><h1>Contact List</h1></center>
        <BootstrapTable data={this.props.contacts} className="user_info" pagination hover
          height='220' scrollTop={'Bottom'} trClassName='tr-string-example'
          exportCSV>
          <TableHeaderColumn dataField='id' isKey={true} dataSort={true} filter={{ type: 'TextFilter', delay: 100 }}>User ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort={true} filter={{ type: 'TextFilter', delay: 100 }}>User Name</TableHeaderColumn>
          <TableHeaderColumn dataFormat={this.retrieveCountryName} dataField='country' dataSort={true} filter={{ type: 'TextFilter', delay: 100 }}>Country</TableHeaderColumn>
          <TableHeaderColumn dataFormat={this.editFormatter} dataAlign='center'>Actions</TableHeaderColumn>

        </BootstrapTable>
      </div>
    )

    let { userId, countryList, editcontacts } = this.state;
    return (<> {this.state.editvisible ? '' : userListPage}
      {this.state.showEditForm && Object.keys(editcontacts).length && userId && countryList.length ? this.renderEditForm(this.state) : ''}
      {this.state.showNew && this.state.countryList.length ? this.renderEditForm({ countryList: this.state.countryList }) : ''}
    </>


    );
  }
}

export default UserTable;