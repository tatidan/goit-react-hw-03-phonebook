import React from "react";

const ContactsListItem = ({ name, number, id, removeContact }) => {
  return (
    <li className="contactsListItem" id={id} key={id}>
      <b className="contactName">{name}:</b>
      {number}
      <button
        className="deleteBtn"
        type="button"
        onClick={() => {
          removeContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsListItem;
