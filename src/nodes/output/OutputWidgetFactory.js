import * as RJD from 'react-js-diagrams';
import { OutputNodeWidgetFactory } from './OutputNodeWidget';

export class OutputWidgetFactory extends RJD.NodeWidgetFactory{
  constructor() {
    super('output');
  }

  generateReactWidget(diagramEngine, node) {
    return OutputNodeWidgetFactory({ node });
  }
}
