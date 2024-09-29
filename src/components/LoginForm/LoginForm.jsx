import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Невірний формат email')
      .required("Обов'язкове поле"),
    password: Yup.string()
      .min(6, 'Мінімум 6 символів')
      .required("Обов'язкове поле"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="email" className={css.label}>
          Email
          <Field className={css.input} name="email" type="email" />
          <ErrorMessage
            className={`${css.error} ${css.firstError}`}
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
          Log in
        </button>
      </Form>
    </Formik>
  );
};
