import './NodesPanel.css';
import React from 'react';
import Node from '../Node/Node';

export default class NodesPanel extends React.Component {
  render() {
    return (
      <div className='nodes-panel'>
        <div className='node-wrapper'>
          <Node type='process' color='rgb(12, 193, 180)' />
        </div>
        <div className='node-wrapper'>
          <Node type='terminator' color='rgb(224, 98, 20)' />
        </div>
      </div>
    );
  }
}
