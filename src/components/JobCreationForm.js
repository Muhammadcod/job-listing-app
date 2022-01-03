import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import Label from './Label';
import Axios from '../services/Axios';
// import * as Yup from 'yup';

const employmentType = [
  { id: 'full Time', name: 'Full Time' },
  { id: 'volunteer', name: 'Volunteer' },
  { id: 'contract', name: 'Contract' },
  { id: 'permanent', name: 'Permanent' },
  { id: 'internship', name: 'Internship' },
  { id: 'temporary', name: 'Temporary' },
];

const sectorOption = [
  { id: 'marketing', name: 'Marketing' },
  { id: 'health care', name: 'Health care' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'customer service', name: 'Customer Service' },
  { id: 'tech', name: 'Tech' },
];

const workConditions = [
  { id: 'remote', name: 'Remote' },
  { id: 'part remote', name: 'Part Remote' },
  { id: 'on-premise', name: 'On-Premise' },
];

// const jobSchema = Yup.object({
//   title: Yup.string().min(5, 'Too Short'),
//   company: Yup.string().min(5, 'Too Short'),
//   location: Yup.string().min(5, 'Too Short'),
//   deadline: Yup.string().min(5, 'Too Short'),
//   category: Yup.string().min(5, 'Too Short'),
//   salary: Yup.string,
// });

const JobCreationForm = () => {
  const [formData] = useState({
    title: '',
    salary: '',
    company: '',
    location: '',
    type: '',
    deadline: '',
    category: '',
    description: '',
    work_condition: '',
    benefits: '',
  });

  const submitForm = async (values) => {
    try {
      const { status } = await Axios.post(`/my/jobs`, values);
      if (status) {
        console.log('kk');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-white px-4 pt-5 pb-4 sm:px-6 sm:py-14 font-poppins'>
      <div className='mb-5'>
        <h2 className='text-2xl text-dark-cyan-blue '>New Job</h2>
        <p className='text-sm font-light'>
          Kindly provide the required information to get matched with suitable
          candidates
        </p>
      </div>
      <Formik enableReinitialize initialValues={formData} onSubmit={submitForm}>
        {({ isSubmitting, isValid, dirty }) => (
          <Form className=''>
            <section className='mb-7'>
              <Label htmlFor='title'>Job Title</Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <Field
                  type='text'
                  name='title'
                  id='title'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder=''
                  required
                />
              </div>
            </section>

            <section className='mb-7'>
              <Label htmlFor='company'>Company Name</Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <Field
                  type='text'
                  name='company'
                  id='company'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder=''
                  required
                />
              </div>
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
              <Label htmlFor='type'>What type of employment is it?</Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <Field
                  type='text'
                  name='type'
                  id='type'
                  as='select'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder='Select option'
                  required
                >
                  <option value='' disabled>
                    Choose category
                  </option>
                  {employmentType.map((ec) => (
                    <option value={ec.id} key={ec.id}>
                      {ec.name}
                    </option>
                  ))}
                </Field>
              </div>
            </section>

            <section className='mb-7'>
              <Label htmlFor='salary'>Salary range</Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <Field
                  type='text'
                  name='salary'
                  id='salary'
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

            <section className='mb-7'>
              <Label htmlFor='salary'>Work Condition</Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <Field
                  type='text'
                  name='work_condition'
                  id='work_condition'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder=''
                  as='select'
                  required
                >
                  <option value='' disabled>
                    Choose category
                  </option>
                  {workConditions.map((ec) => (
                    <option value={ec.id} key={ec.id}>
                      {ec.name}
                    </option>
                  ))}
                </Field>
              </div>
            </section>

            <section className='mb-7'>
              <Label htmlFor='salary'>Benefits</Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <Field
                  type='text'
                  name='benefits'
                  id='benefits'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder=''
                />
              </div>
            </section>

            <section className='mb-7'>
              <Label htmlFor='deadline'>Submission deadline</Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <input
                  type='text'
                  name='deadline'
                  id='deadline'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder=''
                />
              </div>
            </section>

            <section className='mb-7'>
              <Label htmlFor='category'>
                What Sector is this job categorized under?
              </Label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <Field
                  type='text'
                  name='category'
                  id='category'
                  as='select'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                >
                  <option value='' disabled>
                    Select Option
                  </option>
                  {sectorOption.map((ec) => (
                    <option value={ec.id} key={ec.id}>
                      {ec.name}
                    </option>
                  ))}
                </Field>
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

// JobCreationForm.propTypes = {};

export default JobCreationForm;
