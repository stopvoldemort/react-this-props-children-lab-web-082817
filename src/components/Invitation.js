// Code Invitation Component Here
import React, { Component } from 'react'

class Invitation extends Component {
  render() {
    const childrenDivs = React.Children.map(this.props.children, child => {
      return <div>{child}</div>
    })

    return (
      <div>
        <h1>You've been invited!</h1>
        {childrenDivs}
      </div>
    )
  }
}

export default Invitation
