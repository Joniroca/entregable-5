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
      <p>
        Profe! estoy trabajando en esta vista para actualizarlo en la mayor
        brevedad posible, una disculpa, ando entendiendo toda esta info que esta
        brutal.
      </p>
    </div>
  );
};

export default PokemonDetail;
