import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMan } from 'react-icons/md';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.item}>
      <div className={css.itemWrap}>
        <MdOutlineMan />
        <p>{name}</p>
      </div>
      <div className={css.itemWrap}>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
