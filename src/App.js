import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import * as RJD from 'react-js-diagrams';
import DiagramHelper from './helpers/diagram.helper';
import EngineHelper from './helpers/engine.helper';
import Diagram from './components/Diagram/Diagram';
import NodesPanel from './components/NodesPanel/NodesPanel';
import Info from './components/Info/Info';
import About from './components/About/About';
import './RJD.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.diagramEngine = EngineHelper.getNew();
    this.diagramModel = undefined;
  }

  updateModel(model) {
    this.diagramEngine = EngineHelper.getNew();
    if (model) {
      this.diagramModel = this.diagramModel || new RJD.DiagramModel();
      this.diagramModel.deSerializeDiagram(model, this.diagramEngine);
    } else {
      this.diagramModel = DiagramHelper.deserializeModel(this.diagramEngine);
    }
    this.diagramEngine.setDiagramModel(this.diagramModel);
    DiagramHelper.serializeModel(this.diagramEngine, this.diagramModel);
  }

  render() {
    this.updateModel();

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className='app'>
          <NodesPanel />
          <Diagram engine={this.diagramEngine} model={this.diagramModel} updateModel={this.updateModel.bind(this)} />
          <Info />
          <About />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
