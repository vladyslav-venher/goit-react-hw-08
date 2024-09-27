import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short, min 3 letters!')
    .max(50, 'Too long, max 50 letters!')
    .required('This field is required!'),
  number: Yup.string()
    .min(3, 'Too short, min 3 letters!')
    .max(50, 'Too long, max 50 letters!')
    .required('This field is required!'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          name: values.name,
          number: values.number,
        };
        dispatch(addContact(newContact));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.label}>
          Number
          <Field type="text" name="number" className={css.input} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
