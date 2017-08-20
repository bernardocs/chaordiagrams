import * as RJD from 'react-js-diagrams';
import { ProcessNodeWidgetFactory } from './ProcessNodeWidget';

export class ProcessWidgetFactory extends RJD.NodeWidgetFactory{
  constructor() {
    super('process');
  }

  generateReactWidget(diagramEngine, node) {
    return ProcessNodeWidgetFactory({ node });
  }
}
