import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Modal.css";
import { changeModal, load } from "../../actions/actions";
const Modal = () => {
  const isOpen = useSelector((state) => state.toggleModal);
  const user = useSelector((state) => state.user);
  const [temp, settemp] = useState({ name: "", age: "", color: "" });
  const onFormChange = (event) => {
    switch (event.target.name) {
      case "user-name":
        settemp({ name: event.target.value });
        break;
      case "age":
        settemp({ age: event.target.value });
        break;
      case "color":
        settemp({ color: event.target.value });
        break;
      default:
        break;
    }
  };

  const onProfileUpdate = (data) => {
    fetch(`http://localhost:3002/profile/${user.id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        'Authorization': window.sessionStorage.getItem("token"),
      },
      body: JSON.stringify({ formInput: data }),
    })
      .then((response) => {
        dispatch(changeModal(false));
        dispatch(load({ ...user, ...data }));
      })
      .catch(console.log);
  };

  const dispatch = useDispatch();
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Fragment>
      {/* <div className="overlay_styles"></div> */}
      <div className="modal_styles">
        <article className="br3 ba mv4 w-100 w-50-m w-25-l mw6 shadow-5 center relative bg-white">
          <div
            className="modal-close tr mr3"
            onClick={() => dispatch(changeModal(false))}
          >
            x
          </div>
          <main className="pa4 black-80">
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="h3 w3 dib"
              alt="avatar"
            />
            <h1>{user.name}</h1>
            <p>{`Member since: ${new Date(
              user.joined
            ).toLocaleDateString()}`}</p>
            <p>Favorite Color: {user.color}</p>
            <p>Age: {user.age}</p>
            <hr></hr>
            <label className="mt2 fw6 mb4" htmlFor="user-name">
              Update Name:
            </label>
            <input
              onChange={(e) => onFormChange(e)}
              className="pa2 ba w-100 mb2"
              placeholder="John"
              type="text"
              name="user-name"
              id="name"
            ></input>
            <label className="mt2 fw6 mb4" htmlFor="age">
              Update Age:
            </label>
            <input
              onChange={(e) => onFormChange(e)}
              className="pa2 ba w-100 mb2"
              placeholder="50"
              type="text"
              name="age"
              id="age"
            ></input>
            <label className="mt2 fw6 mb4" htmlFor="color">
              Update Favorite Color:
            </label>
            <input
              onChange={(e) => onFormChange(e)}
              className="pa2 ba w-100"
              placeholder="Blue"
              type="text"
              name="color"
              id="color"
            ></input>
            <div className="mt4 flex justify-center">
              <button
                onClick={() => onProfileUpdate(temp)}
                className="b pa2 grow pointer hover-white w-40 bg-light-green mr2"
              >
                Save
              </button>
              <button
                onClick={() => dispatch(changeModal(false))}
                className="b pa2 grow pointer hover-white w-40 bg-light-red"
              >
                Exit
              </button>
            </div>
          </main>
        </article>
      </div>
    </Fragment>,
    document.getElementById("modal")
  );
};
export default Modal;
