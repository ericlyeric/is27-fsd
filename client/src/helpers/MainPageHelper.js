import { updateSwimLanes, updateSwimLane } from "../api/swimLaneApi";

export const onDragEnd = async (result, rows, setRows) => {
  if (!result.destination) return;
  const { source, destination, draggableId } = result;

  // handles edits on other lists
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = rows[source.droppableId];
    const destColumn = rows[destination.droppableId];
    const sourceItems = [...sourceColumn.list];
    const destItems = [...destColumn.list];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    setRows({
      ...rows,
      [source.droppableId]: {
        ...sourceColumn,
        list: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        list: destItems,
      },
    });

    // after this we need to persist to the database
    // update the moved from list, then update the moved to list
    // moved from list will mean that the sourceColumn id will need to be removed from the boat model
    // moved to the destColumn id will be need to be overwritten in the boat model
    await updateSwimLanes({
      sourceId: source.droppableId,
      sourceItems: sourceItems,
      destId: destination.droppableId,
      destItems: destItems,
      boatId: draggableId,
    });
  } else {
    // handles edits on current list order
    const column = rows[source.droppableId];
    const copiedItems = [...column.list];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setRows({
      ...rows,
      [source.droppableId]: {
        ...column,
        list: copiedItems,
      },
    });
    // execute async after to update list
    await updateSwimLane(source.droppableId, {
      list: copiedItems,
    });
  }
};
