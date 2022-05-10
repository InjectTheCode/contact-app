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

  const editHandler = (e, contact) => {
    e.preventDefault();

    const formValues = {
      id: contact.id,
      name: contact.name.charAt(0).toUpperCase() + contact.name.slice(1),
      lastName:
        contact.lastName.charAt(0).toUpperCase() + contact.lastName.slice(1),
      phoneNumber: contact.number,
      telephone: contact.telephone,
      email: contact.email,
      description: contact.desc,
    };
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
