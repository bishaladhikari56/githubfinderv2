import React, { useReducer } from "react";

import axios from "axios";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //setAlert
  const setAlert = (msg, type) => {
    //setAlert({ msg, type });
    //set the time so alert goes away.
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    //setTimeout(() => setAlert(null), 5000);
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
