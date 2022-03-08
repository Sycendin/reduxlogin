import React, { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  routeOther,
  updateEmail,
  updateName,
  updatePassword,
  load,
} from "../../actions/actions";
const temp = {
  id: "1",
  name: "jack",
  password: "pass",
  email: "apple@gmail.com",
  joined: "march 2",
};
const Register = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const emailChange = (event) => {
    dispatch(updateEmail(event.target.value));
  };
  const nameChange = (event) => {
    dispatch(updateName(event.target.value));
  };
  const passwordhange = (event) => {
    // dispatch(updatePassword(event.target.value));
    dispatch(load(temp));
  };
  const onRouteChange = () => {
    dispatch(routeOther("other"));
  };
  const loadUser = (data) => {};
  const onSubmitSignIn = () => {
    // fetch('https://obscure-forest-18294.herokuapp.com/register', {
    fetch("http://localhost:3002/register", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        name: user.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        // if we get user back go to home
        if (user.id) {
          // build loadUser in app component since entire app will need it
          loadUser(user);
          onRouteChange("other");
        }
      });
  };
  return (
    <Fragment>
      {" "}
      <article className="br3 ba mv4 w-100 w-50-m w-25-l mw6 shadow-5 center relative">
        <main className="pa4 ">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Name
                </label>
                <input
                  onChange={nameChange}
                  className="pa2 input-reset  bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={emailChange}
                  className="pa2 input-reset  bg-transparent hover-bg-black hover-white w-100"
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
                  onChange={passwordhange}
                  className="b pa2 input-reset  bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    </Fragment>
  );
};
export default Register;
