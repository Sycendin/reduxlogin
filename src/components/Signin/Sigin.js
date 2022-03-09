import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  routeOther,
  updateEmail,
  updatePassword,
  load,
} from "../../actions/actions";
const SignIn = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const emailChange = (event) => {
    dispatch(updateEmail(event.target.value));
  };
  const passwordChange = (event) => {
    dispatch(updatePassword(event.target.value));
  };
  const loadUser = (data) => {
    dispatch(load(data));
  };
  const onRouteChange = (routeCall) => {
    dispatch(routeOther(routeCall));
  };
  const onSubmitSignIn = () => {
    // fetch('https://obscure-forest-18294.herokuapp.com/signin', {
    fetch("http://localhost:3002/signin", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          onRouteChange();
        }
      });
  };

  return (
    <Fragment>
      <article className="br3 ba mv4 w-100 w-50-m w-25-l mw6 shadow-5 center relative">
        <main className="pa4 ">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={emailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={passwordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                // onClick={() => onRouteChange('home')}
                onClick={onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f6 link dim black db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    </Fragment>
  );
};
export default SignIn;
