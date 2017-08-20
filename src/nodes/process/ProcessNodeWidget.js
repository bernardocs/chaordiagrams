import React from 'react';
import * as RJD from 'react-js-diagrams';
import { ProcessNodeModel } from './ProcessNodeModel';

export class ProcessNodeWidget extends React.Component {
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
      portNode = new ProcessNodeModel(node.name, color);
    }

    return portNode.getTopPort ? <RJD.DefaultPortLabel model={portNode.getTopPort()} className='top' key='in-port' /> : null;
  }

  getRightPort() {
    const { node, color, displayOnly } = this.props;
    let portNode = node;

    if (displayOnly) {
      portNode = new ProcessNodeModel(node.name, color);
    }

    return portNode.getRightPort ? <RJD.DefaultPortLabel model={portNode.getRightPort()} className='right' key='out-port' /> : null;
  }

  getBottomPort() {
    const { node, color, displayOnly } = this.props;
    let portNode = node;

    if (displayOnly) {
      portNode = new ProcessNodeModel(node.name, color);
    }

    return portNode.getBottomPort ? <RJD.DefaultPortLabel model={portNode.getBottomPort()} className='bottom' key='out-port' /> : null;
  }

  getLeftPort() {
    const { node, color, displayOnly } = this.props;
    let portNode = node;

    if (displayOnly) {
      portNode = new ProcessNodeModel(node.name, color);
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
      <div className='fluxogram-node process' style={style}>
        <div className='port top'>{this.getTopPort()}</div>
        <div className='port right'>{this.getRightPort()}</div>
        <div className='port bottom'>{this.getBottomPort()}</div>
        <div className='port left'>{this.getLeftPort()}</div>
        <div className='title'>
          <div className='name'>
            {name}
          </div>
        </div>
      </div>
    );
  }
}

export const ProcessNodeWidgetFactory = React.createFactory(ProcessNodeWidget);
