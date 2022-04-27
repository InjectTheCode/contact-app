import { createContext, useReducer } from "react";

const ContactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    default:
      return state;
  }
};

const initialState = {
  contacts: [],
};

export const ContactContext = createContext();

export const ContactProvider = (props) => {
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        dispatch,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
