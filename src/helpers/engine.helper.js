import * as RJD from 'react-js-diagrams';
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
    engine.registerNodeFactory(new ProcessWidgetFactory());
    engine.registerNodeFactory(new TerminatorWidgetFactory());

    // Register instance factories
    engine.registerInstanceFactory(new RJD.DefaultNodeInstanceFactory());
    engine.registerInstanceFactory(new RJD.DefaultPortInstanceFactory());
    engine.registerInstanceFactory(new RJD.LinkInstanceFactory());
    engine.registerInstanceFactory(new ProcessNodeFactory());
    engine.registerInstanceFactory(new TerminatorNodeFactory());
  }
};