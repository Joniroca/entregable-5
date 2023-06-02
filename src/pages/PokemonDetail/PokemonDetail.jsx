import { useParams } from "react-router-dom";
import getPokemonById from "../../services/getPokemonById";
import { useEffect, useId, useState } from "react";

const PokemonDetail = () => {
  // const randomKey = useId();
  // console.log(randomKey);
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const pokemonDatabyId = async () => {
      try {
        const res = await getPokemonById(pokemonId);
        setPokemonData(res);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };
    pokemonDatabyId();
  }, []);

  return (
    <div>
      <h1>PokemonDetail</h1>
      {!pokemonData ? (
        <p>No tenemos el ¡ID del Pokémon!</p>
      ) : (
        <>
          <div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt=""
            />
          </div>
          <h2> {pokemonData.name} </h2>
          <ul>
            {pokemonData.types.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
          <ul>
            {pokemonData.stats.map((stat) => (
              <li key={stat.name + stat.value}>
                {stat.name}: {stat.value}
              </li>
            ))}
          </ul>
          <p>
            Aquie debe de ir información ampliada de el POKEMON con el ID
            {pokemonId}
          </p>
          <p>
            Profe! estoy trabajando en esta vista para actualizarlo en la mayor
            brevedad posible, una disculpa, ando entendiendo toda esta info que
            esta brutal.
          </p>
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
