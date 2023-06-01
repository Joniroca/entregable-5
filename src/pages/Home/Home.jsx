import "./Home.css";
import { useContext } from "react";
import { UserNameContext } from "../../context/UserNameContext";
import UserNameForm from "../../components/home/UserNameForm";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { saveUserName } = useContext(UserNameContext);

  // Ruta original donde queria entrar el usuario sino a Pokedex
  const from = location.state?.from ?? "/pokedex";

  const handleSendName = (userNameValue) => {
    saveUserName(userNameValue);
    // antes la redireccion me la hacia siempre siempre a pokedex sin recordar el "Link que me pasó mi amigo"
    // navigate("/pokedex");
    // Ahora me hace la redireccion a la URL que estoy extrayendo de location.state?.from y esta constrida y enviada al mismo tiempo en la propiedad ""||<Navigate to="/" state={{ from: location.pathname + location.search }} />||"" de el componente <ProtectedRoute/>
    navigate(from);
  };

  return (
    <section>
      <div className="home__logo-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1685923200&Signature=nMY1KszWu1~qq7kxGEJRphghbXXvBvk33QotdeoaHfrIMQ8SeDK~5lLdVz-3ujOHlZooSwxX8YPNCciZ3nX8lvIU4WCSLeeZj-h-KAYc~Ne33A3-rjiyRaMfRDzeLJ0XRN6YrkgNiiPHMb-Yu-p0d0h7nr1X7dBwUJKgy943Z~LUuGWS4tV7OkNz4Cf7BrIt2SVqPH00e8rTh44igGTaalgTSgKZU9XFe~DprWjxWc7owZcOYhJO9l88xicwoCjlAz4RytbcQhgBzrAUsBce0VkmAsH3q0XRDTjWCA5t7ed95QJUh0kw9QmQEogeQilFaiUxqVJtfk9VJC4cNYzJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Pokedex en camino!"
        />
      </div>

      <div className="home__container">
        <h1 className="home__title">¡Hola entrenador!</h1>
        <p className="home__description">Para poder comenzar dame tu nombre</p>
      </div>

      <div className="home__form-container">
        <UserNameForm onSendName={handleSendName} />
      </div>
    </section>
  );
};

export default Home;
