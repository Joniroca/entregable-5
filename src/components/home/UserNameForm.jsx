import "./UserNameForm";
import { useRef, useState } from "react";

const UserNameForm = ({ onSendName }) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const hasInputAlreadyTouched = useRef(false);

  const handleOnChange = (e) => {
    const nameValue = e.target.value;

    // Preguntar nuevamente esta linea ya que no entiendo exactamente como funciona esta variable de useRef().
    if (!hasInputAlreadyTouched.current) hasInputAlreadyTouched.current = true;

    // if (!nameValue) setNameError("Escribe acá tu nombre, entrenador!");
    if (!nameValue) setNameError("");
    else if (/[^a-z ]/i.test(nameValue))
      setNameError("Solo se permiten letras y espacios");
    else if (!/^[a-z ]{2,} ?$/i.test(nameValue))
      setNameError("El nombre debe tener minímo 2 letras");
    else setNameError("");

    setUserNameValue(nameValue);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!nameError && hasInputAlreadyTouched.current) onSendName(userNameValue);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {Boolean(nameError) && <p> {nameError} </p>}
      <input
        type="text"
        placeholder="Pon tu nombre acá"
        //  value={}: Es la manera de pasarle un valor al input.
        value={userNameValue}
        onChange={handleOnChange}
      ></input>
      <button type="submit">!Comenzar!</button>
    </form>
  );
};

export default UserNameForm;
