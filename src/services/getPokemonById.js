import axiosInstance from "../api/axiosInstance";

const getPokemonImg = (sprites) => {
  // preguntar este front_default
  const firstOption = sprites.other.dream_world.front_default;
  const secondOption = sprites.other["official-artwork"].front_default;
  const thirdOption = sprites.other.home.front_default;

  if (firstOption) return firstOption;
  if (secondOption) return secondOption;
  if (thirdOption) return thirdOption;
  // else return imagen de ¿Quien es ese pokemon?
};

const getPokemonById = async (pokemonId) => {
  try {
    // esto es un path, es lo que va en tre slash y slash, una ruta...
    const res = await axiosInstance.get(`pokemon/${pokemonId}`);
    const pokemonData = res.data;
    const pokemonAdaptedRequiredData = {
      name: pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1),
      types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
      stats: pokemonData.stats.map((statInfo) => ({
        name: statInfo.stat.name,
        value: statInfo.base_stat,
      })),
      image: getPokemonImg(pokemonData.sprites),
    };
    return pokemonAdaptedRequiredData;
  } catch (error) {
    console.error(error);
  }
};

export default getPokemonById;
