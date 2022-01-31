import axios from "axios";

export async function createBoat(payload) {
  try {
    const response = await axios.post("/api/boat", payload);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}

export async function deleteBoat(id) {
  try {
    const response = await axios.delete(`/api/boat/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      message: "Error deleting boat",
    };
  }
}
