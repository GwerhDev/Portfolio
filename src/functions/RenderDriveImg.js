import axios from "axios";

export async function RenderDriveImg (id) { 
  const response = await axios.get(`https://drive.google.com/uc?export=view&id=${id}`) 
  return response;
}