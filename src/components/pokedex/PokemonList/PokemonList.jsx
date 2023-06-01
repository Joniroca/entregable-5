import "./PokemonList.css";
import { useState } from "react";
import { usePagination } from "../../../hook/usePagination";
import PagesComponent from "../PagesComponent/PagesComponent";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemones }) => {
  const [pokemonesPerPage, setPokemonsPerPage] = useState(12);
  const [currentPage, totalPages, pokemonsSlice, changePageTo] = usePagination(
    pokemones,
    pokemonesPerPage
  );
  return (
    <section className="pokemon-list__main-container">
      <PagesComponent
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onBackPage={() => changePageTo(currentPage - 1)}
      />

      <ul className="pokemon-card__list">
        {pokemonsSlice.map((pokemon) => (
          <li className="pokemon-card__listed" key={pokemon.url}>
            {/* <Link to= > */}
            <Link
              className="link__envolve"
              to={`/pokedex/${pokemon.url.split("/").at(-2)}`}
            >
              <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} />
            </Link>
          </li>
        ))}
      </ul>

      <PagesComponent
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onBackPage={() => changePageTo(currentPage - 1)}
      />
    </section>
  );
};

export default PokemonList;
