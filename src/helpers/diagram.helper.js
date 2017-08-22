import * as RJD from 'react-js-diagrams';
import EngineHelper from './engine.helper';

const storageKey = 'diagramModel';

export default {
  createNode(options) {
    const { name, color, x, y } = options;
    var node = new RJD.DefaultNodeModel(name, color);
    node.x = x;
    node.y = y;
    return node;
  },

  createPort(node, options) {
    const { isInput, id, name } = options;
    return node.addPort(new RJD.DefaultPortModel(isInput, id, name));
  },

  linkNodes(port1, port2) {
    const link = new RJD.LinkModel();
    link.setSourcePort(port1);
    link.setTargetPort(port2);
    return link;
  },

  serializeModel(model) {
    localStorage.setItem(storageKey, JSON.stringify(model.serializeDiagram()));
  },

  deserializeModel() {
    const model = new RJD.DiagramModel();
    const engine = EngineHelper.getNew();
    const storagedModel = localStorage.getItem(storageKey);
    if (storagedModel) {
      const modelJSON = JSON.parse(storagedModel);
      model.deSerializeDiagram(modelJSON, engine);
    }
    return model;
  }
}