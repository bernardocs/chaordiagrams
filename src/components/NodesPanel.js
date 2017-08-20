import React from 'react';
import Node from './Node';

export default class NodesPanel extends React.Component {
  render() {
    return (
      <div className='nodes-panel'>
        <div className='node-wrapper'>
          <Node type='output' />
        </div>
        <div className='node-wrapper'>
          <Node type='connection' color='rgb(224, 98, 20)' />
        </div>
        <div className='node-wrapper'>
          <Node type='connection' color='rgb(157, 13, 193)' />
        </div>
        <div className='node-wrapper'>
          <Node type='connection' color='rgb(12, 193, 180)' />
        </div>
        <div className='node-wrapper'>
          <Node type='process' color='rgb(12, 193, 180)' />
        </div>
        <div className='node-wrapper'>
          <Node type='input' />
        </div>
      </div>
    );
  }
}
