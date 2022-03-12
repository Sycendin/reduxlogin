import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./components/Counter";
import SignIn from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import { Fragment } from "react";

import Background from "./background/Background";
import Navigation from "./components/Navigation/Navigation";
import Modal from "./components/Modal/Modal";
import Message from "./components/Message/Message";
import {
  routeOther,
  load,
  routeRegister,
  userSignedIn,
} from "./actions/actions";
function App() {
  const route = useSelector((state) => state.routeSelect);
  const dispatch = useDispatch();
  const loadUser = (data) => {
    dispatch(load(data));
  };
  const onRouteChange = (routeCall) => {
    routeCall === "register"
      ? dispatch(routeRegister(routeCall))
      : dispatch(routeOther(routeCall));
  };
  const token = window.sessionStorage.getItem("token");
  if (token) {
    fetch("http://localhost:3002/signin", {
      method: "post",
      headers: {
        "content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data && data.id) {
          fetch(`http://localhost:3002/profile/${data.id}`, {
            method: "get",
            headers: {
              "content-Type": "application/json",
              Authorization: token,
            },
          })
            .then((response) => response.json())
            .then((user) => {
              if (user && user.email) {
                loadUser(user);
                dispatch(userSignedIn());
                onRouteChange("other");
              }
            });
        }
      })
      .catch(console.log);
  }

  return (
    <Fragment>
      <Background></Background>
      <Navigation></Navigation>
      {route === "register" ? (
        <Register></Register>
      ) : route === "signin" ? (
        <SignIn></SignIn>
      ) : route === "other" ? (
        <Message></Message>
      ) : null}
      <div className="App"></div>
      <Modal></Modal>
    </Fragment>
  );
}

export default App;
