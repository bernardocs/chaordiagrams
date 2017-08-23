import React from 'react';
import * as RJD from 'react-js-diagrams';
import { TerminatorNodeModel } from './TerminatorNodeModel';

export class TerminatorNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
    color: 'rgb(224, 98, 20)'
  };

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getTopPort() {
    const { node, color, displayOnly } = this.props;
    let portNode = node;

    if (displayOnly) {
      portNode = new TerminatorNodeModel(node.name, color);
    }

    return portNode.getTopPort ? <RJD.DefaultPortLabel model={portNode.getTopPort()} className='top' key='in-port' /> : null;
  }

  getRightPort() {
    const { node, color, displayOnly } = this.props;
    let portNode = node;

    if (displayOnly) {
      portNode = new TerminatorNodeModel(node.name, color);
    }

    return portNode.getRightPort ? <RJD.DefaultPortLabel model={portNode.getRightPort()} className='right' key='out-port' /> : null;
  }

  getBottomPort() {
    const { node, color, displayOnly } = this.props;
    let portNode = node;

    if (displayOnly) {
      portNode = new TerminatorNodeModel(node.name, color);
    }

    return portNode.getBottomPort ? <RJD.DefaultPortLabel model={portNode.getBottomPort()} className='bottom' key='out-port' /> : null;
  }

  getLeftPort() {
    const { node, color, displayOnly } = this.props;
    let portNode = node;

    if (displayOnly) {
      portNode = new TerminatorNodeModel(node.name, color);
    }

    return portNode.getLeftPort ? <RJD.DefaultPortLabel model={portNode.getLeftPort()} className='left' key='out-port' /> : null;
  }

  render() {
    const { node, color: displayColor } = this.props;
    const { name, color } = node;
    const style = {};
    if (color || displayColor) {
      style.background = color || displayColor;
    }

    return (
      <div className='fluxogram-node terminator' style={style}>
        <div className='port top'>{this.getTopPort()}</div>
        <div className='port right'>{this.getRightPort()}</div>
        <div className='port bottom'>{this.getBottomPort()}</div>
        <div className='port left'>{this.getLeftPort()}</div>
        <svg viewBox="0 0 350 100">
          <rect x="0.5" y="0.5" width="350" height="100" rx="50" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd"></rect>
        </svg>
        <div className='title'>
          <div className='name'>
            {name}
          </div>
        </div>
      </div>
    );
  }
}

export const TerminatorNodeWidgetFactory = React.createFactory(TerminatorNodeWidget);
