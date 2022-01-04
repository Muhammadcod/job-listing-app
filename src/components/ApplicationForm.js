import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import Label from './Label';
// import axios from 'axios';
import Axios from '../services/Axios';
// import * as Yup from 'yup';
//
// const jobSchema = Yup.object({
//   title: Yup.string().min(5, 'Too Short'),
//   company: Yup.string().min(5, 'Too Short'),
//   location: Yup.string().min(5, 'Too Short'),
//   deadline: Yup.string().min(5, 'Too Short'),
//   category: Yup.string().min(5, 'Too Short'),
//   salary: Yup.string,
// });

const ApplicationForm = ({ entity }) => {
  const [formData] = useState({
    first_name: '',
    last_name: '',
    location: '',
    email: '',
    phone: '',
    image: '',
  });
  const { title, location, id } = entity;

  const submitForm = async (values) => {
    try {
      const { message, status } = await Axios.post(`/jobs/${id}/apply`, values);
      if (status === 'success') {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-white px-4 pt-5 pb-4 sm:px-6 sm:py-14 font-poppins'>
      <div className='mb-5'>
        <h2 className='text-2xl text-dark-cyan-blue '>{title}</h2>
        <span className='text-sm font-light'>{location}</span>
      </div>
      <Formik enableReinitialize initialValues={formData} onSubmit={submitForm}>
        {({ isSubmitting, isValid, dirty }) => (
          <Form className=''>
            <section className='mb-7'>
              <Label htmlFor='first_name'>First Name</Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <Field
                  type='text'
                  name='first_name'
                  id='first_name'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder=''
                  required
                />
              </div>
            </section>

            <section className='mb-7'>
              <Label htmlFor='last_name'>Last Name</Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <Field
                  type='text'
                  name='last_name'
                  id='last_name'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder=''
                  required
                />
              </div>
            </section>

            <section className='mb-7'>
              <Label htmlFor='first-name'>Email</Label>
              <Field
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              />
            </section>

            <section className='mb-7'>
              <Label htmlFor='location'>Location</Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <Field
                  type='text'
                  name='location'
                  id='location'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder=''
                  required
                />
              </div>
            </section>

            <section className='mb-7'>
              <Label htmlFor='phone'>Phone No</Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <Field
                  type='text'
                  name='phone'
                  id='phone'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder=''
                />
              </div>
            </section>

            <section className='mb-7'>
              <Label htmlFor='salary'>Description</Label>
              <div className='mt-1 '>
                <Field
                  type='text'
                  name='description'
                  id='description'
                  as='textarea'
                  className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                  placeholder=''
                  required
                />
              </div>
            </section>
            <div>
              <button
                type='submit'
                className='inline-flex justify-center w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-dark-cyan-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                disabled={isSubmitting || !isValid || !dirty}
              >
                Submit Application
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ApplicationForm.propTypes = {
  entity: PropTypes.object,
};

export default ApplicationForm;
