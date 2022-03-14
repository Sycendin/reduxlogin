import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  userSignOut,
  routeSignIn,
  routeRegister,
  unLoadUser,
  changeModal,
  hideCode,
  hideMessage,
} from "../../actions/actions";
const ProfileIcon = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const onRouteChange = (routeCall) => {
    if (routeCall === "register") {
      dispatch(routeRegister(routeCall));
    } else if (routeCall === "signin") {
      dispatch(routeSignIn(routeCall));
    } else if (routeCall === "signout") {
      window.sessionStorage.removeItem("token");
      dispatch(userSignOut());
      dispatch(unLoadUser());
      dispatch(routeSignIn("signin"));
      dispatch(hideMessage());
      dispatch(hideCode());
    }
  };
  const modalopen = () => {
    dispatch(changeModal(true));
  };
  return (
    <Fragment>
      <div className="pa4 tc">
        <div className="dib ma2 bg-animate hover-bg-light-blue relative-m hide-child relative-l w-100 w-auto-ns">
          <img
            src={user.picture}
            className="br-100 pa1 ba b--black-10 h3 w3"
            alt="avatar"
          />
          <div className="menu list bg-blue mt1 b-yellow f6 child child-vs o-100-vs absolute-m absolute-l top-100-m w-100 br2 shadow-4">
            <div
              onClick={() => modalopen()}
              className="tc ma1 bg-light-blue bg-animate hover-bg-white pointer"
            >
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
