import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const nodeSource = {
  beginDrag(props) {
    return props;
  }
};


class DragWrapper extends Component {
  render() {
    const { isDragging, connectDragSource, children, style } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <div style={{ ...style, opacity }}>
          {children}
        </div>
      )
    );
  }
}

export default DragSource('node-source', nodeSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(DragWrapper);
