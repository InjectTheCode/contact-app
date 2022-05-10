import { createContext, useReducer } from "react";

const ContactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { contacts: [...state.contacts, action.payload] };
    case "DELETE_CONTACT":
      return { contacts: action.payload };
    default:
      return state;
  }
};

const initialState = {
  contacts: [],
  deleteCon: (id) => {},
};

export const ContactContext = createContext();

export const ContactProvider = (props) => {
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const deleteHandler = (id) => {
    const deleteContact = state.contacts.filter((contact) => contact.id !== id);
    dispatch({ type: "DELETE_CONTACT", payload: deleteContact });
    localStorage.setItem("contacts", JSON.stringify(deleteContact));
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        deleteCon: deleteHandler,
        dispatch,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
