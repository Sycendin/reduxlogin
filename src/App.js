import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./components/Counter";
import SignIn from "./components/Signin/Sigin";
import Register from "./components/Register/Register";
import { Fragment } from "react";
import { routeRegister, routeSignIn } from "./actions/actions";
import Background from "./background/Background";

function App() {
  const route = useSelector((state) => state.routeSelect);
  // const dispatch = useDispatch();
  // dispatch(routeSignIn());

  // const loggedIn = useSelector((state) => state.isLogged);
  return (
    <Fragment>
      <Background></Background>
      {route === "register" ? (
        <Register></Register>
      ) : route === "sigin" ? (
        <SignIn></SignIn>
      ) : route === "other" ? (
        <Counter></Counter>
      ) : null}
      <div className="App"></div>
    </Fragment>
  );
}

export default App;
