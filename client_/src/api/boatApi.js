import axios from "axios";

export async function createBoat(payload) {
  const response = await axios.post("/api/boat", payload);
  try {
    return response.data;
  } catch (error) {
    return {
      message: "Error creating boat",
    };
  }
}

export async function deleteBoat(id) {
  const response = await axios.delete(`/api/boat/${id}`);
  try {
    return response.data;
  } catch (error) {
    return {
      message: "Error deleting boat",
    };
  }
}
