import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Мінімум 3 символи').required("Обов'язкове поле"),
    email: Yup.string()
      .email('Невірний формат email')
      .required("Обов'язкове поле"),
    password: Yup.string()
      .min(6, 'Мінімум 6 символів')
      .required("Обов'язкове поле"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
          <Field className={css.input} name="name" type="text" />
          <ErrorMessage
            className={`${css.error} ${css.firstError}`}
            name="name"
            component="div"
          />
        </label>

        <label htmlFor="email" className={css.label}>
          Email
          <Field className={css.input} name="email" type="email" />
          <ErrorMessage
            className={`${css.error} ${css.secondError}`}
            name="email"
            component="div"
          />
        </label>

        <label htmlFor="password" className={css.label}>
          Password
          <Field className={css.input} name="password" type="password" />
          <ErrorMessage className={css.error} name="password" component="div" />
        </label>

        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
