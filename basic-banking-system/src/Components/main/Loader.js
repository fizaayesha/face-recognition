import React from 'react'
import './style/style.css'
import './style/style.css.map'
import './style/style.scss'

function Loader() {
  return (
    <main id="loader">
      <h1>Processing your request <span></span></h1>
      <h2>This may take a while to ensure all security checks </h2>
      <div className="loader-wheel"></div>
    </main>
  )
}

export default Loader