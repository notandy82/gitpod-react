import React from 'react'


//rfce to create and export function
function ES7Snippets() {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets


// rafce same as above but as arrow function
import React from 'react'

const ES7Snippets = () => {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

// rce create and export class component

import React, { Component } from 'react'

export class ES7Snippets extends Component {
  render() {
    return (
      <div>ES7Snippets</div>
    )
  }
}

export default ES7Snippets


// rconst create constructor

constructor(props) {
  super(props)

  this.state = {
     first
  }
}

// clg

console.log(first)

// clo

console.log('first', first)