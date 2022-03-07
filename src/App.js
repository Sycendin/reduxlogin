import "./App.css";
import Counter from "./components/Counter";
import SignIn from "./components/Signin/Sigin";
import Register from "./components/Register/Register";
import { Fragment } from "react";
import Background from "./background/background";

function App() {
  // const loggedIn = useSelector((state) => state.isLogged);
  return (
    <Fragment>
      <div className="App">
        <Background></Background>
        <Counter></Counter>
      </div>
    </Fragment>
  );
}

export default App;
