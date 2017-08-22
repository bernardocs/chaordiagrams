import React from 'react';
import * as RJD from 'react-js-diagrams';
import _ from 'lodash';
import { DropTarget } from 'react-dnd';
import { ProcessNodeModel } from '../../nodes/process/ProcessNodeModel';
import { TerminatorNodeModel } from '../../nodes/terminator/TerminatorNodeModel';
import DiagramHelper from '../../helpers/diagram.helper';
import EngineHelper from '../../helpers/engine.helper';

const diagramEngine = EngineHelper.getNew();
let diagramModel = DiagramHelper.deserializeModel(diagramEngine);

class Diagram extends React.Component {
  componentDidMount() {
    const { model } = this.props;
    this.updateModel(model);
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.model, nextProps.model)) {
      this.updateModel(nextProps.model);
    }
  }

  updateModel(model) {
    if (model) {
      diagramModel.deSerializeDiagram(model, diagramEngine);
    }
    diagramEngine.setDiagramModel(diagramModel);
    DiagramHelper.serializeModel(diagramModel);
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
    const { connectDropTarget } = this.props;

    // Render the canvas
    return connectDropTarget (
      <div className='diagram-drop-container'>
        <RJD.DiagramWidget diagramEngine={diagramEngine} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

const nodesTarget = {
  drop(props, monitor, component) {
    const { x: pageX, y: pageY } = monitor.getSourceClientOffset();
    const { left = 0, top = 0 } = diagramEngine.canvas.getBoundingClientRect();
    const { offsetX, offsetY } = diagramEngine.diagramModel;
    const x = pageX - left - offsetX;
    const y = pageY - top - offsetY;
    const item = monitor.getItem();

    let node;
    if (item.type === 'process') {
      node = new ProcessNodeModel('Process', item.color);
    }
    if (item.type === 'terminator') {
      node = new TerminatorNodeModel('Terminator', item.color);
    }

    node.x = x;
    node.y = y;
    diagramModel.addNode(node);

    props.updateModel(diagramModel.serializeDiagram());
  },
};

export default DropTarget('node-source', nodesTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(Diagram);
