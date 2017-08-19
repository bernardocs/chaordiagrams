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

  serialize(engine, model) {
    // We need this to help the system know what models to create form the JSON
    engine.registerInstanceFactory(new RJD.DefaultNodeInstanceFactory());
    engine.registerInstanceFactory(new RJD.DefaultPortInstanceFactory());
    engine.registerInstanceFactory(new RJD.LinkInstanceFactory());

    localStorage.setItem(storageKey, JSON.stringify(model.serializeDiagram()));
  },

  deserialize(engine) {
    const model = new RJD.DiagramModel();
    model.deSerializeDiagram(JSON.parse(localStorage.getItem(storageKey)), engine);
    engine.setDiagramModel(model);
  }
}