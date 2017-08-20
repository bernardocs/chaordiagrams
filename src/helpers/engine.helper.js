import * as RJD from 'react-js-diagrams';
import { OutputWidgetFactory } from '../nodes/output/OutputWidgetFactory';
import { OutputNodeFactory } from '../nodes/output/OutputInstanceFactories';
import { InputWidgetFactory } from '../nodes/input/InputWidgetFactory';
import { InputNodeFactory } from '../nodes/input/InputInstanceFactories';
import { ConnectionWidgetFactory } from '../nodes/connection/ConnectionWidgetFactory';
import { ConnectionNodeFactory } from '../nodes/connection/ConnectionInstanceFactories';
import { ProcessWidgetFactory } from '../nodes/process/ProcessWidgetFactory';
import { ProcessNodeFactory } from '../nodes/process/ProcessInstanceFactories';
import { TerminatorWidgetFactory } from '../nodes/terminator/TerminatorWidgetFactory';
import { TerminatorNodeFactory } from '../nodes/terminator/TerminatorInstanceFactories';

export default {
  getNew() {
    const engine = new RJD.DiagramEngine();
    this.setup(engine);
    return engine;
  },

  setup(engine) {
    engine.registerNodeFactory(new RJD.DefaultNodeFactory());
    engine.registerLinkFactory(new RJD.DefaultLinkFactory());
    engine.registerNodeFactory(new OutputWidgetFactory());
    engine.registerNodeFactory(new InputWidgetFactory());
    engine.registerNodeFactory(new ConnectionWidgetFactory());
    engine.registerNodeFactory(new ProcessWidgetFactory());
    engine.registerNodeFactory(new TerminatorWidgetFactory());

    // Register instance factories
    engine.registerInstanceFactory(new RJD.DefaultNodeInstanceFactory());
    engine.registerInstanceFactory(new RJD.DefaultPortInstanceFactory());
    engine.registerInstanceFactory(new RJD.LinkInstanceFactory());
    engine.registerInstanceFactory(new OutputNodeFactory());
    engine.registerInstanceFactory(new InputNodeFactory());
    engine.registerInstanceFactory(new ConnectionNodeFactory());
    engine.registerInstanceFactory(new ProcessNodeFactory());
    engine.registerInstanceFactory(new TerminatorNodeFactory());
  }
};