import * as React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Node as NodeType } from "sitebuilder.client";
import RenderNode from "./RenderNode";
import styled from "styled-components";

interface IProps {
  node: NodeType;
  current: number;
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  userSelect: "none",
  ...draggableStyle
});

const EditModeRowWrapper: React.SFC<{ value: string; edit: boolean }> = ({
  children,
  value,
  edit
}) => {
  if (!edit) return <>{children}</>;
  return (
    <Droppable
      key={value}
      droppableId={value}
      direction="horizontal"
      type="ROW"
    >
      {(provided: any, snapshot: any) => (
        <RowContainer
          className="row-container"
          innerRef={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          {children}
        </RowContainer>
      )}
    </Droppable>
  );
};

const EditModeColumnWrapper: React.SFC<{
  value: string;
  index: number;
  edit: boolean;
}> = ({ children, value, index, edit }) => {
  if (!edit) return <>{children}</>;
  return (
    <Draggable key={value} draggableId={value} index={index}>
      {(provided: any, snapshot: any) => {
        const childrenWithProps = React.Children.map(children, (child: any) =>
          React.cloneElement(child, { dragControl: provided.dragHandleProps })
        );
        return (
          <ColumnContainer
            className="column-container"
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            {childrenWithProps}
          </ColumnContainer>
        );
      }}
    </Draggable>
  );
};

export default class RecurseNode extends React.Component<IProps> {
  render() {
    const { node, current } = this.props;
    return (
      <>
        {node.children.map((node: NodeType, index: number) => {
          if (!node) return;
          if (node.type === "Section" && node.attributes.type === "row") {
            return (
              <EditModeRowWrapper
                key={index}
                value={node.id}
                edit={window.__EDIT_MODE__}
              >
                <RenderNode node={node} current={current} />
              </EditModeRowWrapper>
            );
          }
          if (node.type === "Section" && node.attributes.type === "column") {
            return (
              <EditModeColumnWrapper
                key={index}
                value={node.id}
                index={index}
                edit={window.__EDIT_MODE__}
              >
                <RenderNode node={node} current={current} />
              </EditModeColumnWrapper>
            );
          }
          return (
            <React.Fragment key={node.id}>
              <RenderNode node={node} current={current} />
            </React.Fragment>
          );
        })}
      </>
    );
  }
}

const ColumnContainer = styled.div<any>`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  &:active,
  &:hover {
    .column-controls {
      div {
        opacity: 1;
      }
    }
  }
`;

const RowContainer = styled.div<any>`
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  overflow: auto;
`;
