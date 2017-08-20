import * as RJD from 'react-js-diagrams';
import { OutputNodeModel } from './OutputNodeModel';

export class OutputNodeFactory extends RJD.AbstractInstanceFactory {
  constructor() {
    super('OutputNodeModel');
  }

  getInstance() {
    return new OutputNodeModel();
  }
}
