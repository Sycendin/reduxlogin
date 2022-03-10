import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  userSignOut,
  routeSignIn,
  routeRegister,
  unLoadUser,
} from "../../actions/actions";
const ProfileIcon = () => {
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
  return (
    <Fragment>
      <div className="pa4 tc">
        <div className="dib ma2 bg-animate hover-bg-light-blue relative-m hide-child relative-l w-100 w-auto-ns">
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="br-100 pa1 ba b--black-10 h3 w3"
            alt="avatar"
          />
          <div class="menu list bg-blue mt1 b-yellow f6 child child-vs o-100-vs absolute-m absolute-l top-100-m w-100 br2 shadow-4">
            <div className="tc ma1 bg-light-blue bg-animate hover-bg-white pointer">
              Profile
            </div>
            <div
              onClick={() => onRouteChange("signout")}
              className="tc ma1 bg-light-blue bg-animate hover-bg-white pointer"
            >
              Signout
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProfileIcon;
