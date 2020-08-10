import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import './user.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
//const API_URL = process.env.REACT_APP_API_URL;

class EditUserGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: '',
            name: null,
            country: ''
        };
        this.citySelectItems = [
            { label: 'New York', value: 'New York' },
            { label: 'Rome', value: 'Rome' },
            { label: 'London', value: 'London' },
            { label: 'Istanbul', value: 'Istanbul' },
            { label: 'Paris', value: 'Paris' },
            { label: 'India', value: 'India' },
            { label: 'China', value: 'China' },
            { label: 'Canada', value: 'Canada' }
        ];


    }



    render() {

        return (
            <form autoComplete="off" >
                <div className="container" style={{ width: '50%' }}>
                    <center><h1>New User</h1></center>
                    <div>
                        <InputText id="name" type="text" value={this.state.name}
                            size={30} required={true} style={{ marginRight: '6px' }} />
                        <label htmlFor="float-input">Name<span>*</span></label>
                    </div>
                    <div className="content-section">
                        <Dropdown id="country" autoWidth={true}
                            value={this.state.country}
                            options={this.citySelectItems}
                            placeholder='Select a Country'
                        />
                    </div>
                    <div>
                        <Button label="Submit" style={{ marginRight: '16px' }} icon="pi pi-check" className="p-button-raised p-button-rounded" />
                        <Button label="Cancel" type="reset" icon="pi pi-check" className="p-button-raised p-button-rounded" />

                    </div>
                </div>
            </form>
        );
    }
}
export default EditUserGroup;