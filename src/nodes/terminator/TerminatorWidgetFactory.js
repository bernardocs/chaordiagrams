import * as RJD from 'react-js-diagrams';
import { TerminatorNodeWidgetFactory } from './TerminatorNodeWidget';

export class TerminatorWidgetFactory extends RJD.NodeWidgetFactory{
  constructor() {
    super('terminator');
  }

  generateReactWidget(diagramEngine, node) {
    return TerminatorNodeWidgetFactory({ node });
  }
}
