import "./Pokedex.css";
import { UserNameContext } from "../../context/UserNameContext";
import { useContext } from "react";
import FiltersForm from "../../components/pokedex/FiltersForm/FiltersForm";
import PokemonList from "../../components/pokedex/PokemonList/PokemonList";
import { useLoaderData } from "react-router-dom";

const Pokedex = () => {
  const { userName } = useContext(UserNameContext);
  const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();

  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   const loadPokemons = async () => {
  //     const pokemonsData = await getAllPokemons();
  //     setPokemons(pokemonsData);
  //   };
  //   loadPokemons();
  // }, []);

  return (
    <section className="pokedex__message-container">
      <p className="pokedex__message">
        <em className="pokedex__message__username">¡Bienvenido {userName}!</em>
        ¡Aquí podrás encontrar a tu pokemon favorito!
      </p>

      <FiltersForm nameInicial={pokemonName} typeInicial={pokemonTypeId} />

      {!pokemons.length ? (
        <p>No hay Pokémones</p>
      ) : (
        <PokemonList pokemones={pokemons} />
      )}
    </section>
  );
};

export default Pokedex;
