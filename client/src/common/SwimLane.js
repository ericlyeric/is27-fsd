import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Boat from "./Boat";

export default function SwimLane({ provided, snapshot, swimLane }) {
  return (
    <>
      <div className="border-2 border-primary border">
        <div className="text-center">
          <h5 className="bg-primary mb-0 pb-2 text-light">{swimLane.name}</h5>
        </div>
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="d-flex flex-row justify-content-start"
          style={{
            background: snapshot.isDraggingOver ? "lightblue" : "white",
            overflowX: "auto",
            minHeight: "4rem",
            alignContent: "center",
          }}
        >
          {swimLane.list.map((item, index) => {
            return (
              <Draggable key={item._id} draggableId={item._id} index={index}>
                {(provided, snapshot) => {
                  return (
                    <Boat provided={provided} snapshot={snapshot} item={item} />
                  );
                }}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      </div>
    </>
  );
}
