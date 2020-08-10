import React from 'react';
import UserTable from './UserTable.js';
import AddNewUserGroup from './AddNewUserGroup';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';

class bootstrapex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      contacts: this.props.contacts,
      countryList: []
    }

  }

  render() {
    // New button and List of user details
    const listPage = (<div>
      <div><UserTable contacts={this.props.contacts} editObject={this.props.editObject}
        cancelObject={this.props.cancelObject} deleteObject={this.props.deleteObject} />
      </div>
    </div>);

    const regForm = (<div>
      <AddNewUserGroup countryList={this.state.countryList} cancelObject={this.props.cancelObject} />
    </div>)

    return (
      this.state.visible ? regForm : listPage
    );
  }
}

export default bootstrapex;