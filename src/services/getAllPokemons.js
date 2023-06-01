import axiosInstance from "../api/axiosInstance";

const getAllPokemons = async () => {
  try {
    const res = await axiosInstance.get("pokemon", {
      //los query--params es lo que va despues de signo de interrogación --> ?
      params: { limit: 10000 },
    });

    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getAllPokemons;
