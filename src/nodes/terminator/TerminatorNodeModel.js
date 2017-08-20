import _ from 'lodash';
import * as RJD from 'react-js-diagrams';

export class TerminatorNodeModel extends RJD.NodeModel {
  constructor(name = 'Untitled', color = 'rgb(224, 98, 20)') {
    super('terminator');
    const isInput = true;
    this.addPort(new RJD.DefaultPortModel(isInput, 'top'));
    this.addPort(new RJD.DefaultPortModel(!isInput, 'right'));
    this.addPort(new RJD.DefaultPortModel(!isInput, 'bottom'));
    this.addPort(new RJD.DefaultPortModel(!isInput, 'left'));
    this.name = name;
    this.color = color;
  }

  deSerialize(object) {
    super.deSerialize(object);
    this.name = object.name;
    this.color = object.color;
  }

  serialize() {
    return _.merge(super.serialize(), {
      name: this.name,
      color: this.color,
    });
  }

  getTopPort() {
    return this.ports.top;
  }

  getRightPort() {
    return this.ports.top;
  }

  getBottomPort() {
    return this.ports.bottom;
  }

  getLeftPort() {
    return this.ports.left;
  }
}
