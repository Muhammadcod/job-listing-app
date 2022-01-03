import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import useAuth from '../services/useAuth';
import Hero from '../assets/hero-image.png';
import { ReactComponent as Logo } from '../assets/logo.svg';

const LoginSchema = Yup.object({
  email: Yup.string().trim().lowercase(),
  password: Yup.string(),
});

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();
  const [formData] = useState({
    email: '',
    password: '',
  });

  let from = state?.path || '/admin';

  const submitForm = (values) => {
    login(values, setToken, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className='mt-10 sm:mt-0 bg-base-color min-h-screen'>
      <div className='md:grid md:grid-cols-4 md:gap-6  bg-hero'>
        <div className='md:col-span-2 flex items-center justify-center  '>
          <div className='px-4 sm:px-0  text-white'>
            <div className='absolute top-5'>
              <Logo />
            </div>
            <h3 className='text-5xl pl-6 font-medium leading-snug font-poppins '>
              Find the best <br /> candidates for your <br /> organisation.
            </h3>
            <div>
              <img src={Hero} alt='' />
            </div>
          </div>
        </div>

        <div className='mt-5 md:mt-0 md:col-span-2 h-screen flex items-center p-20'>
          <Formik
            enableReinitialize
            initialValues={formData}
            validationSchema={LoginSchema}
            onSubmit={submitForm}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className='w-3/4 font-poppins'>
                <div className='mb-5 text-4xl text-dark-cyan-blue'>
                  <h5>Login</h5>
                </div>
                <div className='grid grid-cols-2 gap-6  '>
                  <section className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='first-name'
                      className='block font-medium text-lg  text-dark-cyan-blue text-extralight'
                    >
                      Email
                    </label>
                    <Field
                      id='email-address'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-sky-900 rounded-md'
                    />
                  </section>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block font-medium text-lg text-sky-900 text-extralight'
                    >
                      Password
                    </label>
                    <Field
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-sky-900 rounded-md'
                    />
                  </div>
                </div>
                <div className='py-3 mt-4'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-7 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-900 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
                    disabled={isSubmitting || !isValid || !dirty}
                  >
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func,
};
export default Login;
