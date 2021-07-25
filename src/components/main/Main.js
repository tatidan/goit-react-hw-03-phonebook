import React, { Component } from "react";
import ContactsForm from "../contactsForm/ContactsForm";
import ContactsList from "../contacts/ContactsList";
import SearchForm from "../searchForm/SearchForm";
import Section from "../section/Section";
import "../../index.css";

class Main extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onNameCheck = (newName) => {
    return this.state.contacts.filter(
      (contact) => contact.name.toLowerCase() === newName.toLowerCase()
    );
  };

  addNewContact = (contact) => {
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  removeContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  onSearchHandler = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  onFilterRender = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filteredContacts = this.onFilterRender();

    return (
      <>
        <Section title="Phonebook">
          <ContactsForm
            onNameCheck={this.onNameCheck}
            addNewContact={this.addNewContact}
          />
        </Section>
        <Section title="Contacts">
          <SearchForm
            onSearchHandler={this.onSearchHandler}
            filter={this.state.filter}
          />
          <ContactsList
            contacts={filteredContacts}
            onFilterRender={this.onFilterRender}
            removeContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}

export default Main;
