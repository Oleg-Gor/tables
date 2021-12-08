import axios from "axios";

export const getPastLaunches = async () => {
  const response = await axios.get(
    `https://api.spacexdata.com/v4/launches/past`
  );
  return response.data;
};


export const getNextLaunches = async () => {
  const response = await axios.get(
    `https://api.spacexdata.com/v4/launches/next`
  );
  return response.data;
};


export const getAllLandpads = async () => {
  const response = await axios.get(
    `https://api.spacexdata.com/v4/landpads`
  );
  return response.data;
};