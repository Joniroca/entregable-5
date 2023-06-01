import axiosInstance from "../api/axiosInstance";

const getAllTypes = async () => {
  try {
    const res = await axiosInstance.get("type/");
    return res.data.results.map((type) => ({
      name: type.name,
      id: type.url.split("/").at(-2),
    }));
  } catch (error) {
    console.error(error);
  }
};

export default getAllTypes;
