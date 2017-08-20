import * as RJD from 'react-js-diagrams';
import { TerminatorNodeModel } from './TerminatorNodeModel';

export class TerminatorNodeFactory extends RJD.AbstractInstanceFactory {
  constructor() {
    super('TerminatorNodeModel');
  }

  getInstance() {
    return new TerminatorNodeModel();
  }
}
