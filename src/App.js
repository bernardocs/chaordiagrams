import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import * as RJD from 'react-js-diagrams';
import DiagramHelper from './helpers/diagram.helper';
import EngineHelper from './helpers/engine.helper';
import Diagram from './components/Diagram';
import NodesPanel from './components/NodesPanel';
import './RJD.css';
import './App.css';

const diagramEngine = EngineHelper.getNew();
let diagramModel;

class App extends Component {
  updateModel(model) {
    if (model) {
      diagramModel = diagramModel || new RJD.DiagramModel();
      diagramModel.deSerializeDiagram(model, diagramEngine);
    } else {
      diagramModel = DiagramHelper.deserializeModel(diagramEngine);
    }
    diagramEngine.setDiagramModel(diagramModel);
    DiagramHelper.serializeModel(diagramEngine, diagramModel);
  }

  render() {
    this.updateModel();

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className='app'>
          <NodesPanel />
          <Diagram engine={diagramEngine} model={diagramModel} updateModel={this.updateModel} />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
