import axios from "axios";

export const getPastLaunches = async () => {
  const response = await axios.get(
    `https://api.spacexdata.com/v4/launches/past`
  );
  return response.data;
};