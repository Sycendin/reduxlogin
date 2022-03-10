import React, { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  userSignOut,
  routeSignIn,
  routeRegister,
  unLoadUser,
} from "../../actions/actions";
import ProfileIcon from "../Profile/Profileicon";

const Navigation = () => {
  const isSignedIn = useSelector((state) => state.signedIn);

  const dispatch = useDispatch();
  const onRouteChange = (routeCall) => {
    if (routeCall === "register") {
      dispatch(routeRegister(routeCall));
    } else if (routeCall === "signin") {
      dispatch(routeSignIn(routeCall));
    } else if (routeCall === "signout") {
      dispatch(userSignOut());
      dispatch(unLoadUser());
      dispatch(routeSignIn("signin"));
    }
  };

  if (isSignedIn) {
    return (
      <Fragment>
        (
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <ProfileIcon />
        </nav>
        ){" "}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        (
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <button
            onClick={() => onRouteChange("signin")}
            className=" br2 f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-green pointer"
          >
            Sign In
          </button>
          <button
            onClick={() => onRouteChange("register")}
            className=" br2 f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-green pointer"
          >
            Register
          </button>
        </nav>
        )
      </Fragment>
    );
  }
};

export default Navigation;
