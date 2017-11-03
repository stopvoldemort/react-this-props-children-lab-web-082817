// Code ThemedDecoration Component Here
import React, { Component } from 'react'

class ThemedDecoration extends Component {
  render() {
    const DecorationsWithClasses = React.Children.map(this.props.children, child => {
      return (
        React.cloneElement(child, {className: this.props.theme})
      )
    })

    return (
      <div>
        {DecorationsWithClasses}
      </div>
    )
  }
}

export default ThemedDecoration
