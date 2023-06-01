import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import ProtectedRoute from "../components/common/ProtectedRoute/ProtectedRoute";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import pokedexLoader from "./loaders/pokedexLoader";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";

//  El router de tipo Browser siempre necesita que se configure correctamente la plataforma de despliegue (netlyfy...)
//vamos a public y creamos: _redirects y le ponemos--> /* /index.html 200
//  Esto es para que cuando le pasen algun path raro nos redirecciona
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  //   {
  //     path: "/pokedex",
  //     element: <p>Acá se listan los POKEMóN</p>,
  //   },
  //   {
  //     path: "/pokedex/:pokedexId",
  //     element: <p>Mas detalles del pokemon con la id = /:pokemonId</p>,
  //   },
  {
    path: "/pokedex",
    element: (
      <ProtectedRoute>
        <Layout />,
      </ProtectedRoute>
    ),
    children: [
      //   {
      //     index: true,
      //     element: <p>Acá se listan los POKEMóN</p>,
      //   },
      {
        path: "",
        element: <Pokedex />,
        // una función que se ejecuta cada que se lee la ruta
        loader: pokedexLoader,
      },
      {
        path: ":pokemonId",
        element: <PokemonDetail />,
      },
    ],
  },
]);

export default router;
