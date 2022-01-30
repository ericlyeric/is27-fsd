import React from "react";
import { Button } from "react-bootstrap";
import { useSwimLaneContext } from "../context/SwimLaneContext";
import { deleteBoat } from "../api/boatApi";

export default function Boat({ provided, snapshot, item }) {
  const [swimLanes, setSwimLanes] = useSwimLaneContext();

  return (
    <div
      className="d-flex flex-column justify-content-between"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        userSelect: "none",
        padding: 4,
        height: "6rem",
        minHeight: "6rem",
        width: "6rem",
        minWidth: "6rem",
        backgroundColor: snapshot.isDragging ? "darkGray" : "gray",
        color: "white",
        border: "1px solid black",
        ...provided.draggableProps.style,
      }}
    >
      <div className="d-flex justify-content-center">
        <span>{item.name}</span>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          id={item._id}
          name={item.name}
          className="py-0 px-3"
          variant="danger"
          size="sm"
          onClick={(boat) =>
            handleOnClickDeleteBoat(boat.target.id, swimLanes, setSwimLanes)
          }
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

const handleOnClickDeleteBoat = async (id, swimLanes, setSwimLanes) => {
  const response = await deleteBoat(id);
  // update local data, delete boat on server
  if (response.id) {
    const newSwimLane = swimLanes[response.swimLane].list.filter(
      (e) => e._id !== response.id
    );
    setSwimLanes({
      ...swimLanes,
      [response.swimLane]: {
        ...swimLanes[response.swimLane],
        list: newSwimLane,
      },
    });
  }
};
