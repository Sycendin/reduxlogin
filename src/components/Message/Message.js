import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  hiddenMessage,
  getMessageCode,
  recievedMessage,
  hiddenMessageGet,
} from "../../actions/actions";
import { toast } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
const Message = () => {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.toggleHidden);
  const code = useSelector((state) => state.messageCode);
  const hiddenGet = useSelector((state) => state.toggleHiddenGet);
  const message = useSelector((state) => state.messageRecieved);
  const messageStoredToast = () =>
    toast("Code for message created", { autoClose: 2000 });

  let getMessage = "";
  let sendMessage = "";
  const storeMessage = (event) => {
    getMessage = event.target.value;
  };
  const storeCode = (event) => {
    sendMessage = event.target.value;
  };
  const messageToServer = () => {
    // fetch('https://obscure-forest-18294.herokuapp.com/register', {
    fetch("http://localhost:3002/messagesend", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        message: getMessage,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // if we get user back go to home
        dispatch(getMessageCode(data.token));
        dispatch(hiddenMessage(false));
        messageStoredToast();
      });
  };

  const messageFromServer = () => {
    // fetch('https://obscure-forest-18294.herokuapp.com/register', {
    fetch("http://localhost:3002/messageget", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        code: sendMessage,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // if we get user back go to home
        dispatch(recievedMessage(data.data));
        dispatch(hiddenMessageGet(false));
      });
  };
  return (
    <Fragment>
      <div className=" br2 tc center w-50-ns ba shadow-2 pa3 ph5 relative">
        <label className="db fw6 lh-copy f6" htmlFor="message-send">
          Enter Message
        </label>
        <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="text"
          name="message-send"
          id="message-send"
          onChange={(event) => storeMessage(event)}
        />
        <button
          onClick={(event) => messageToServer(event)}
          className=" br2 f6 link grow pointer hover-white br1 ph3 pv2 mb2 mt3 dib white bg-dark-green "
        >
          Send Message
        </button>
        {!hidden ? (
          <div>
            <p>Code:</p>
            <p>{code}</p>
          </div>
        ) : null}
      </div>

      <div className=" br2 tc center w-50-ns mt7 ba shadow-2 pa3 ph5 relative">
        <label className="db fw6 lh-copy f6" htmlFor="message-get">
          Enter Message Code
        </label>
        <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="text"
          name="message-get"
          id="message-get"
          onChange={(event) => storeCode(event)}
        />
        <button
          onClick={(event) => messageFromServer(event)}
          className=" br2 f6 link grow pointer hover-white br1 ph3 pv2 mb2 mt3 dib white bg-dark-green  "
        >
          Get Message
        </button>
        {!hiddenGet ? (
          <div>
            <p>Message:</p>
            <p>{message}</p>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};
export default Message;
