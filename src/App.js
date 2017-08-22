import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import * as actions from './actions';
import Diagram from './components/Diagram/Diagram';
import NodesPanel from './components/NodesPanel/NodesPanel';
import Info from './components/Info/Info';
import About from './components/About/About';
import './RJD.css';
import './App.css';

class Application extends Component {
  render() {
    const { model, updateModel } = this.props;

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className='app'>
          <NodesPanel />
          <Diagram model={model} updateModel={updateModel} />
          <Info />
          <About />
        </div>
      </DragDropContextProvider>
    );
  }
}

const mapStateToProps = state => ({ model: state.model });

const mapDispatchToProps = dispatch => ({
  updateModel: (model, props) => dispatch(actions.updateModel(model, props))
});

export const App = connect(mapStateToProps, mapDispatchToProps)(Application);
