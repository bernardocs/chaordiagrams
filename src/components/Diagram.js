import React from 'react';
import * as RJD from 'react-js-diagrams';
import _ from 'lodash';
import { DropTarget } from 'react-dnd';
import { OutputNodeModel } from '../nodes/output/OutputNodeModel';
import { InputNodeModel } from '../nodes/input/InputNodeModel';
import { ConnectionNodeModel } from '../nodes/connection/ConnectionNodeModel';
import { ProcessNodeModel } from '../nodes/process/ProcessNodeModel';
import { TerminatorNodeModel } from '../nodes/terminator/TerminatorNodeModel';

class Diagram extends React.Component {
  componentDidMount() {
    this.selectedNode = null;
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.model, nextProps.model)) {
      this.props.updateModel(nextProps.model);
    }
  }

  onChange(model, action) {
    // Ignore some events
    const ignoredEvents = [
      'items-copied',
      'canvas-click',
      'canvas-drag',
      'items-selected',
      'items-drag-selected',
      'node-selected',
      'node-deselected',
      'link-deselected'];
    if (ignoredEvents.indexOf(action.type) !== -1) {
      return;
    }

    this.props.updateModel(model);
  }

  render() {
    const { engine, connectDropTarget } = this.props;

    // Render the canvas
    return connectDropTarget (
      <div className='diagram-drop-container'>
        <RJD.DiagramWidget diagramEngine={engine} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

const nodesTarget = {
  drop(props, monitor, component) {
    const { x: pageX, y: pageY } = monitor.getSourceClientOffset();
    const { left = 0, top = 0 } = props.engine.canvas.getBoundingClientRect();
    const { offsetX, offsetY } = props.engine.diagramModel;
    const x = pageX - left - offsetX;
    const y = pageY - top - offsetY;
    const item = monitor.getItem();

    let node;
    if (item.type === 'output') {
      node = new OutputNodeModel('Output Node');
    }
    if (item.type === 'input') {
      node = new InputNodeModel('Input Node');
    }
    if (item.type === 'connection') {
      node = new ConnectionNodeModel('Connection Node', item.color);
    }
    if (item.type === 'process') {
      node = new ProcessNodeModel('Process', item.color);
    }
    if (item.type === 'terminator') {
      node = new TerminatorNodeModel('Terminator', item.color);
    }

    node.x = x;
    node.y = y;
    props.model.addNode(node);    
    
    // update model
    props.updateModel(props.model.serializeDiagram());
  },
};

export default DropTarget('node-source', nodesTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(Diagram);
