import * as RJD from 'react-js-diagrams';

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

  serializeModel(engine, model) {
    // EngineHelper.setup(engine);
    localStorage.setItem(storageKey, JSON.stringify(model.serializeDiagram()));
  },

  deserializeModel(engine) {
    const model = new RJD.DiagramModel();
    const storagedModel = localStorage.getItem(storageKey);
    if (storagedModel) {
      model.deSerializeDiagram(JSON.parse(storagedModel), engine);
    }
    return model;
  }
}