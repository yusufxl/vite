import React from 'react'
import "./header.scss"
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_box">    
          <h1 className="header_title">PORSCHE</h1>
          <button className="header_btn">MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Header