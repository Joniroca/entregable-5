import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { pokemonId } = useParams();

  return (
    <div>
      <h1>PokemonDetail</h1>
      <p>
        Aquie debe de ir información ampliada de el POKEMON con el ID
        {pokemonId}
      </p>
    </div>
  );
};

export default PokemonDetail;
