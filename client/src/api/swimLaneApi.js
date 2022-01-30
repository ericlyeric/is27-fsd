import axios from "axios";

export async function getAllSwimLanes() {
  const response = await axios.get("/api/swimlane");
  try {
    return swimLanesTranformations(response.data);
  } catch (error) {
    return {
      message: "Error getting swimlane",
      data: [],
    };
  }
}

export async function updateSwimLanes(payload) {
  const response = await axios.put(`/api/swimlane`, payload);
  try {
    console.log(response.data);
  } catch (error) {
    return {
      message: "Error updating swimlane",
      data: [],
    };
  }
}

export async function updateSwimLane(id, payload) {
  const response = await axios.put(`/api/swimlane/${id}`, payload);
  try {
    console.log(response.data);
  } catch (error) {
    return {
      message: "Error sorting swimlane",
      data: [],
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
