import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  invoice: [],
  modal: false,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const delInvoice = (id) => {
    dispatch({
      type: "REMOVE_INVOICE",
      payload: id,
    });
  };

  const editInvoice = (invoice) => {
    dispatch({
      type: "UPDATE_INVOICE",
      payload: invoice,
    });
  };

  const addInvoice = (invoice) => {
    dispatch({
      type: "ADD_INVOICE",
      payload: invoice,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        invoice: state.invoice,
        delInvoice,
        editInvoice,
        addInvoice,
        modal: state.modal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
