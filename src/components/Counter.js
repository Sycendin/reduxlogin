import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementp1 } from "../actions/actions";

const Counter = () => {
  const counterPlayer1 = useSelector((state) => state.counterP1);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementp1(1));
  };
  return (
    <Fragment>
      <div className=" br2 tc center w-50-ns mt7 ba shadow-2 pa3 ph5 relative">
        <h1>{counterPlayer1}</h1>
        <button
          onClick={increment}
          className=" br2 f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-green "
        >
          Increase Counter
        </button>
      </div>
    </Fragment>
  );
};
export default Counter;
