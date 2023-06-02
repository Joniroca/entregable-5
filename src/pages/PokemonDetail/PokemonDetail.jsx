import "./PokemonDetail.css";
import { useParams } from "react-router-dom";
import getPokemonById from "../../services/getPokemonById";
import { Fragment, useEffect, useId, useState } from "react";

const PokemonDetail = () => {
  // const randomKey = useId();
  // console.log(randomKey);
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  // const pokeImg = pokemonData?.image;
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
    <div className="pokemon-detail__main-container">
      <div className="pokemon-detail__logo-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1685923200&Signature=nMY1KszWu1~qq7kxGEJRphghbXXvBvk33QotdeoaHfrIMQ8SeDK~5lLdVz-3ujOHlZooSwxX8YPNCciZ3nX8lvIU4WCSLeeZj-h-KAYc~Ne33A3-rjiyRaMfRDzeLJ0XRN6YrkgNiiPHMb-Yu-p0d0h7nr1X7dBwUJKgy943Z~LUuGWS4tV7OkNz4Cf7BrIt2SVqPH00e8rTh44igGTaalgTSgKZU9XFe~DprWjxWc7owZcOYhJO9l88xicwoCjlAz4RytbcQhgBzrAUsBce0VkmAsH3q0XRDTjWCA5t7ed95QJUh0kw9QmQEogeQilFaiUxqVJtfk9VJC4cNYzJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Pokémon en camino!"
        />
      </div>
      {!pokemonData ? (
        <p>No tenemos el ¡ID del Pokémon!</p>
      ) : (
        <article
          className="article"
          style={{ backgroundImage: `url(${pokemonData.image})` }}
        >
          {/* <div>
            <img src={pokemonData.image} alt="" />
          </div> */}
          <section className="pokemon-data__main-container">
            <h2 className="pokemon-data__title"> {pokemonData.name} </h2>
            <section className="pokemon-data__types-list">
              <ul>
                {pokemonData.types.map((type) => (
                  <li key={type}>{type}</li>
                ))}
              </ul>
            </section>
            <section className="pokemon-data__stats-list">
              <ul>
                {pokemonData.stats.map((stat) => (
                  <li key={stat.name + stat.value}>
                    {stat.name}: {stat.value}
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </article>
      )}
    </div>
  );
};

export default PokemonDetail;
