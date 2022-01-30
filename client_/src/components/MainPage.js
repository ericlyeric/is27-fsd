import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Container } from "react-bootstrap";
import SwimLane from "../common/SwimLane";
import { useSwimLaneContext } from "../context/SwimLaneContext";
import { onDragEnd } from "../helpers/MainPageHelper";

export default function MainPage() {
  const [swimLanes, setSwimLanes] = useSwimLaneContext();

  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, swimLanes, setSwimLanes)}
      >
        <Container fluid>
          {Object.entries(swimLanes).map(([swimLaneId, swimLane]) => {
            return (
              <div
                className="d-flex-column justify-content-start"
                key={swimLaneId}
              >
                <div>
                  <Droppable
                    droppableId={swimLaneId}
                    key={swimLaneId}
                    direction="horizontal"
                    justifyContent="center"
                    alignContent="center"
                  >
                    {(provided, snapshot) => {
                      return (
                        <SwimLane
                          provided={provided}
                          snapshot={snapshot}
                          swimLane={swimLane}
                        />
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </Container>
      </DragDropContext>
    </>
  );
}
