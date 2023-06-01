import getAllPokemons from "../../services/getAllPokemons";
import getPokemonByTypeId from "../../services/getPokemonByTypeId";

const pokedexLoader = async ({ request }) => {
  const url = new URL(request.url);
  //   console.log(url);
  const pokemonName = url.searchParams.get("pokemonName") ?? "";
  const pokemonTypeId = url.searchParams.get("pokemonType") ?? "";

  let pokemons; // = await getAllPokemons();

  //filtros cruzados: se envia tanto nombre como tipo, solo uno, o ninguno....
  if (pokemonName && pokemonTypeId) {
    // SE ENVÍA TANTO NOMBRE COMO TIPO
    pokemons = await getPokemonByTypeId(pokemonTypeId);
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  } else if (!pokemonName && !pokemonTypeId) {
    // NINGÚN FILTRO, SE PIDEN TODOS LO POKEMON
    pokemons = await getAllPokemons();
  } else if (pokemonName) {
    // FILTRO POR NOMBRE:  Buscar los pokemon cuyo nombre contenga el valor enviado por el usuario
    pokemons = await getAllPokemons();
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  } else if (pokemonTypeId) {
    // FILTRO SOLO POR TIPO DE POKEMON, NO SE ENVIA EL NOMBRE
    pokemons = await getPokemonByTypeId(pokemonTypeId);
  }
  return { pokemons, pokemonName, pokemonTypeId };
};

export default pokedexLoader;
