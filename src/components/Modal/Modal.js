import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Modal.css";
import { changeModal } from "../../actions/actions";
const Modal = () => {
  const isOpen = useSelector((state) => state.toggleModal);
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
            <h1>Name</h1>
            <p>Member since: March</p>
            <p>Favorite Color: Blue</p>
            <p>Age: 50</p>
            <hr></hr>
            <label className="mt2 fw6 mb4" htmlFor="user-name">
              Name:
            </label>
            <input
              className="pa2 ba w-100 mb2"
              placeholder="John"
              type="text"
              name="user-name"
              id="name"
            ></input>
            <label className="mt2 fw6 mb4" htmlFor="age">
              Age:
            </label>
            <input
              className="pa2 ba w-100 mb2"
              placeholder="50"
              type="text"
              name="age"
              id="age"
            ></input>
            <label className="mt2 fw6 mb4" htmlFor="color">
              Favorite Color:
            </label>
            <input
              className="pa2 ba w-100"
              placeholder="Blue"
              type="text"
              name="color"
              id="color"
            ></input>
            <div className="mt4 flex justify-center">
              <button className="b pa2 grow pointer hover-white w-40 bg-light-green mr2">
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
