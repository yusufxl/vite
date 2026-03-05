import React from 'react'
import "./section.scss"
const Section = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="section_box">
          <div className="section_text-box">
            <h2 className="section_title">PORSCHE 911 GT3 R5</h2>
            <p className="section_text">The Porsche 911 GT3 R (or 911 GT3 R5) is a specialized race car designed
              for participation in various racing seriess, including GT championships and other
              international competitions.
            </p>
            <p className="section_text">It represents an enhanced version of the legendary Porsche 911,
              with a reinforced structure, improved aerodynamic characteristics, and a powerful engine to
              ensure maximum performance on the track.
            </p>
          </div>
          <img src="/public/1.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section