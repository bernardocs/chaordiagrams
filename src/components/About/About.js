import './About.css'
import React from 'react';

export default class About extends React.Component {
  render() {
    return (
        <div className='about'>
          <h1>ChaorDiagrams</h1>
          <h2>Simple and Neat chart drawer</h2>
          <p>Try dragging those shapes into the canvas and connecting them by clicking on the little square by the shape's conner.</p>
          <p>And don't worry... We save automatically every change you make! :)</p>
        </div>
    )
  }
}