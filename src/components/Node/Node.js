import './Node.css'
import React from 'react';
import DragWrapper from '../DragWrapper/DragWrapper';
import { ProcessNodeWidget } from '../../nodes/process/ProcessNodeWidget';
import { TerminatorNodeWidget } from '../../nodes/terminator/TerminatorNodeWidget';

export default class Node extends React.Component {
  renderNode() {
    const { type, color } = this.props;

    if (type === 'process') {
      return <ProcessNodeWidget node={{ name: 'Process' }} color={color} displayOnly />;
    }
    if (type === 'terminator') {
      return <TerminatorNodeWidget node={{ name: 'Terminator' }} color={color} displayOnly />;
    }
    console.warn('Unknown node type');
    return null;
  }

  render() {
    const { type, color } = this.props;

    return (
      <DragWrapper type={type} color={color} style={{ display: 'inline-block' }}>
        {this.renderNode()}
      </DragWrapper>
    );
  }
}