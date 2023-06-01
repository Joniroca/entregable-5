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
    <section>
      <PagesComponent
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onBackPage={() => changePageTo(currentPage - 1)}
      />

      <ul>
        {pokemonsSlice.map((pokemon) => (
          <li key={pokemon.url}>
            {/* <Link to= > */}
            <Link to={`/pokedex/${pokemon.url.split("/").at(-2)}`}>
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
