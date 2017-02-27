import React from 'react'
import {render} from 'react-dom'

import {
  FirstComponent,
  SecondComponent,
} from '../../src'

let Demo = React.createClass({
  render() {
    return <div>
      <h1>my-component Demo</h1>
      <FirstComponent />
      <SecondComponent />
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
