import React from 'react'
import { Link } from 'react-router-dom'

function Success(props) {
  return (
    <main className="result" id="success">
      <h1>{ props.message }</h1>
      <h2>Successfully authenticated, The user may now proceed</h2>
      <Link to="/profile"> <button>Go to Profile</button> </Link>
    </main>
  )
}

export default Success
