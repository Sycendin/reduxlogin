import "./App.css";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import SignIn from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import { Fragment } from "react";

import Background from "./background/Background";
import Navigation from "./components/Navigation/Navigation";
import Modal from "./components/Modal/Modal";
function App() {
  const route = useSelector((state) => state.routeSelect);

  // const dispatch = useDispatch();
  // dispatch(routeSignIn());

  // const loggedIn = useSelector((state) => state.isLogged);
  return (
    <Fragment>
      <Background></Background>
      <Navigation></Navigation>
      {route === "register" ? (
        <Register></Register>
      ) : route === "signin" ? (
        <SignIn></SignIn>
      ) : route === "other" ? (
        <Counter></Counter>
      ) : null}
      <div className="App"></div>
      <Modal></Modal>
    </Fragment>
  );
}

export default App;
