import getPokemonById from "../../../services/getPokemonById";
import "./PokemonCard.css";

import { useEffect, useState } from "react";

const pokemonCard = ({ pokemonId }) => {
  const [isPokemonData, setIsPokemonData] = useState(null);

  const statsTarget = ["hp", "attack", "defense", "speed"];
  const statsToUse = isPokemonData?.stats.filter((stat) =>
    statsTarget.includes(stat.name.toLowerCase())
  );

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);
      return setIsPokemonData(pokemonData);
      // console.log(pokemonData);
    };
    loadPokemon();
  }, []);

  return (
    <article className="pokemon-card">
      {!isPokemonData && <p>Ahí no hay pokemones. ¡Ay! Que triste...</p>}
      {isPokemonData && (
        <>
          <section className="pokemon-card__img">
            <img src={isPokemonData.image} alt="" />
          </section>

          <section className="pokemon-card__title">
            <h3>{isPokemonData.name}</h3>
            <ul>
              {isPokemonData.types.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </section>

          <section className="pokemon-card__list">
            <ul className="pokemon-card__ul">
              {statsToUse.map((stat) => (
                <li key={stat.name}>
                  <em> {stat.name.toUpperCase()} </em>
                  <span> {stat.value} </span>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default pokemonCard;
