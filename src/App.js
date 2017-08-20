import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import * as RJD from 'react-js-diagrams';
import EngineHelper from './helpers/engine.helper';
import Diagram from './components/Diagram';
import NodesPanel from './components/NodesPanel';
import './RJD.css';
import './App.css';

const diagramEngine = EngineHelper.getNew();
let diagramModel;

class App extends Component {
  setModel(model) {
    diagramModel = new RJD.DiagramModel();
    if (model) {
      diagramModel.deSerializeDiagram(model, diagramEngine);
    }
    diagramEngine.setDiagramModel(diagramModel);
  }

  render() {
    this.setModel();

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className='app'>
          <NodesPanel />
          <Diagram engine={diagramEngine} model={diagramModel} setModel={this.setModel} />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
