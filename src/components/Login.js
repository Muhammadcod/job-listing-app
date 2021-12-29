import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import useAuth from '../services/useAuth';

const LoginSchema = Yup.object({
  email: Yup.string().trim().lowercase(),
  password: Yup.string(),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();
  const [formData] = useState({
    email: '',
    password: '',
  });

  const submitForm = (values) => {
    login(values).then(() => {
      navigate(state?.path || '/admin');
    });
  };

  return (
    <div className='mt-10 sm:mt-0 bg-base-color min-h-screen'>
      <div className='md:grid md:grid-cols-4 md:gap-6'>
        <div className='md:col-span-2'>
          <div className='px-4 sm:px-0'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Personal Information
            </h3>
            <p className='mt-1 text-sm text-gray-600'>
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>

        <div className='mt-5 md:mt-0 md:col-span-2 h-screen flex items-center p-20 border-2 border-rose-500'>
          <Formik
            enableReinitialize
            initialValues={formData}
            validationSchema={LoginSchema}
            onSubmit={submitForm}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className='border-2 border-rose-500 w-3/4'>
                <div className='grid grid-cols-2 gap-6  '>
                  <section className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email
                    </label>
                    <Field
                      id='email-address'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </section>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Password
                    </label>
                    <Field
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='px-4 py-3 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    disabled={isSubmitting || !isValid || !dirty}
                  >
                    Save
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

export default Login;
