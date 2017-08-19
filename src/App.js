import React, { Component } from 'react';
import * as RJD from 'react-js-diagrams';
import DiagramHelper from './helpers/diagram.helper.js';
import './RJD.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.engine = new RJD.DiagramEngine();
    this.engine.registerNodeFactory(new RJD.DefaultNodeFactory());
    this.engine.registerLinkFactory(new RJD.DefaultLinkFactory());

    this.model = new RJD.DiagramModel();
  }

  render() {
    // Create first node and port
    const node1 = DiagramHelper.createNode({
      name: 'Node 1',
      color: 'rgb(0, 192, 255)',
      x: 100,
      y: 100
    });

    const port1 = DiagramHelper.createPort(node1, {
      isInput: false,
      id: 'out-1',
      name: 'Out'
    });

    // Create second node and port
    const node2 = DiagramHelper.createNode({
      name: 'Node 2',
      color: 'rgb(192, 255, 0)',
      x: 400,
      y: 100
    });

    const port2 = DiagramHelper.createPort(node2, {
      isInput: true,
      id: 'in-1',
      name: 'In'
    });

    // Add the nodes and link to the model
    this.model.addNode(node1);
    this.model.addNode(node2);
    this.model.addLink(DiagramHelper.linkNodes(port1, port2));

    // Load the model into the diagram engine
    this.engine.setDiagramModel(this.model);

    return (<RJD.DiagramWidget diagramEngine={this.engine}/>);
  }
}

export default App;
