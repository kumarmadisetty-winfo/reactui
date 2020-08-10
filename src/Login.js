import React from 'react';
import {Redirect} from 'react-router';
//import {Logout} from './Logout';

class Login extends React.Component {
state = {
    redirect: false
};
  onSubmit = () => {
    alert("Hello! I am an alert box!!");
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
        alert(this.state.redirect);
return <Redirect to="/sample" />;
      }

    return (
      <form>
        <input placeholder="email" type="email" />
        <input placeholder="password" type="password" />
        <button onClick={this.onSubmit}>Login</button>
      </form>
    )
  }
}


export default Login;