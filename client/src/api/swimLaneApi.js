import axios from "axios";

export async function getAllSwimLanes() {
  try {
    const response = await axios.get("/api/swimlane");
    return swimLanesTranformations(response.data);
  } catch (error) {
    console.log(error);
    return {
      message: "Error getting swimlane",
    };
  }
}

export async function updateSwimLanes(payload) {
  const response = await axios.put(`/api/swimlane`, payload);
  try {
    console.log(response);
  } catch (error) {
    console.log(error);
    return {
      message: "Error updating swimlane",
    };
  }
}

export async function updateSwimLane(id, payload) {
  const response = await axios.put(`/api/swimlane/${id}`, payload);
  try {
    console.log(response);
  } catch (error) {
    console.log(error);
    return {
      message: "Error sorting swimlane",
    };
  }
}

function swimLanesTranformations(data) {
  let map = {};
  for (let i = 0; i < data.length; i++) {
    if (!map[data[i]._id]) {
      map[data[i]._id] = data[i];
    }
  }
  return map;
}
