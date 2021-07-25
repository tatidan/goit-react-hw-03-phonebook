import React from "react";
import ContactsListItem from "./contactsListItem/ContactsListItem";

const ContactsList = ({ contacts, removeContact }) => {
  return (
    <ul className="contactsList">
      {contacts.map((contact) => (
        <ContactsListItem
          {...contact}
          removeContact={removeContact}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
