import React from 'react'
import { withRouter } from 'react-router-dom'
class MyTarget extends React.Component {
  
    handleClick = () => {
        this.props.history.push("/Login");
    }

  render () {
    return (
       <div>
        
        <button onClick={this.handleClick} type="button">Redirect</button>
       </div>
    )
  }
}

export default withRouter(MyTarget);