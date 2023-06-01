import { useEffect, useState } from "react";
import getAllTypes from "../../../services/getAllTypes";

const FiltersForm = ({ nameInicial, typeInicial }) => {
  // const {} = useLoaderData()
  const [types, setTypes] = useState([]);
  const [nameValue, setNameValue] = useState(nameInicial);
  const [typeValue, setTypeValue] = useState(typeInicial);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNameValue(newValue);
  };

  const handleOption = (e) => {
    const newTypeValue = e.target.value;
    setTypeValue(newTypeValue);
  };

  useEffect(() => {
    const loadTypes = async () => {
      const typeList = await getAllTypes();
      setTypes(typeList);
    };
    loadTypes();
  }, []);

  useEffect(() => {
    setNameValue(nameInicial);
    setTypeValue(typeInicial);
  }, [nameInicial, typeInicial]);

  // Si el valor sigue siendo el mismo, react no renderiza de nuevo esa cosa, así que el tener 1 solo renderiza uno--- o dos efectos por separado da completamente lo mismo YA QUE no renderiza nbuevamente el mismo elemento por falta de cambios
  // useEffect(() => {
  //   setNameValue(typeInicial);
  // }, [typeInicial]);

  return (
    <form className="form" action="">
      <h2>Filtros para tu busqueda</h2>
      <div className="form__input-container">
        <input
          value={nameValue}
          onChange={handleChange}
          type="text"
          placeholder="escribe el nombre de tu pokémon"
          name="pokemonName"
          className="form__input-name"
        />
        <select
          name="pokemonType"
          className="form__input-type"
          value={typeValue}
          onChange={handleOption}
        >
          <option value="">All-Types</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <button className="form__btn">Buscar</button>
    </form>
  );
};

export default FiltersForm;
