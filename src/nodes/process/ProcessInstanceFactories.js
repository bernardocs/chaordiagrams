import * as RJD from 'react-js-diagrams';
import { ProcessNodeModel } from './ProcessNodeModel';

export class ProcessNodeFactory extends RJD.AbstractInstanceFactory {
  constructor() {
    super('ProcessNodeModel');
  }

  getInstance() {
    return new ProcessNodeModel();
  }
}
