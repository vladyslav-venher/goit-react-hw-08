import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
// import { selectNameFilter } from '../../redux/filtersSlice';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
}
