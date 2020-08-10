import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import './user.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
const API_URL = process.env.REACT_APP_API_URL;

class AddNewUserGroup extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            status: '',
            name: this.props.editcontacts && this.props.editcontacts.name,
            country: this.props.editcontacts && this.props.editcontacts.country && this.props.editcontacts.country.id,
            state: '',
            addressType: '',
            countryList: this.props.countryList,
            editcontacts: this.props.editcontacts,
            stateList: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handlePutSubmit = this.handlePutSubmit.bind(this);
        this.handlePOSTSubmit = this.handlePOSTSubmit.bind(this);
    }

    componentDidMount() {
        console.log("did mount", this.props)
        if (this.state.country) {
            this.getStates(this.state.country)
        }
    }

    handleChange(event) {

        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })
    }

    handleCountryChange(event) {
        // console.log(event.target.value)
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })

        this.getStates(event.target.value)

    }

    getStates = (value) => {
        fetch(API_URL + '/api/states?countryId=' + value)
            .then(res => res.json())
            .then((data) => {
                this.setState({ stateList: data });
                // console.log(this.state.stateList[1].name);
            })
    }

    handleSubmit(event) {
        //alert(this.props.userId)
        if (this.props.userId === '') {
            this.handlePOSTSubmit(event);
        } else {
            this.handlePutSubmit(event);
        }
    }

    // POST API call
    handlePOSTSubmit(event) {
        //alert(this.state.name)
        // console.log(this.state.addressType);
        // console.log(this.state.country);
        // console.log(this.state.state);
        //event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name, country: {
                    "id": this.state.country
                }
            })
        };
        fetch(API_URL + '/api/users', requestOptions)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch((err) => {
                console.log("Error :", err)
            });
    }

    // PUT API call
    handlePutSubmit(event) {
        // console.log(this.state.addressType);
        //alert("put" + this.state.name)
        //console.log(this.state.country);
        // console.log(this.state.state);
        //event.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name, country: {
                    "id": this.state.country
                }
            })
        };
        fetch(API_URL + '/api/users/' + this.props.userId, requestOptions)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch((err) => {
                console.log("Error :", err)
            });
    }


    render() {

        return (
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="container" style={{ width: '50%' }}>
                    <center><h1>New User</h1></center>
                    <div>
                        <InputText id="name" type="text" value={this.state.name}
                            size={30} required={true} onChange={this.handleChange} style={{ marginRight: '6px' }} />
                        <label htmlFor="float-input">Name<span>*</span></label>
                    </div>
                    <div className="content-section">
                        <Dropdown id="country" autoWidth={true}
                            value={this.state.country}
                            options={this.state.countryList}
                            optionLabel="name"
                            optionValue="id"
                            onChange={this.handleCountryChange}
                            placeholder='Select a Country'
                            required={true}>
                            {/* {console.log(this.props.countryList)} */}
                        </Dropdown>
                    </div>
                    <div className="content-section">
                        <Dropdown id="state" autoWidth={true}
                            value={this.state.state}
                            options={this.state.stateList}
                            optionLabel="name"
                            optionValue="id"
                            placeholder='Select a State'
                            onChange={this.handleChange}
                            required={true}>
                            {/* {console.log(this.state.stateList)} */}
                        </Dropdown>
                    </div>
                    <div className="p-grid" id="addressType">
                        <div className="p-col-12">
                            <RadioButton inputId="rb1" name="addressType" value="Permanent"
                                onChange={(e) => this.setState({ addressType: e.value })}
                                checked={this.state.addressType === 'Permanent'} />
                            <label htmlFor="rb1" className="p-radiobutton-label">Permanent</label>

                            <RadioButton inputId="rb2" name="addressType" value="Current" style={{ marginLeft: '20px' }}
                                onChange={(e) => this.setState({ addressType: e.value })}
                                checked={this.state.addressType === 'Current'} />
                            <label htmlFor="rb2" className="p-radiobutton-label">Current</label>
                        </div>
                    </div>

                    <div>
                        <Button label="Submit" style={{ marginRight: '20px' }} value={this.props.userId}
                            icon="pi pi-check" className="p-button-raised p-button-rounded" />
                        <Button label="Cancel" type="reset" icon="pi pi-check"
                            onClick={() => this.props.cancelObject()} className="p-button-raised p-button-rounded" />

                    </div>
                </div>
            </form>
        );
    }
}
export default AddNewUserGroup;