import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ApplicationForm from './ApplicationForm';
import { ReactComponent as Location } from '../assets/location.svg';

const JobDetails = ({ job }) => {
  const {
    title,
    work_condition,
    type,
    // created_at,
    // description,
    location,
    // salary,
    company,
    // benefits,
  } = job;

  const [state, setState] = useState({
    viewModal: false,
  });
  const { viewModal } = state;

  const toggleViewModal = () => setState({ ...state, viewModal: !viewModal });

  return (
    <>
      <Modal
        isOpen={viewModal}
        size='md'
        component={ApplicationForm}
        toggle={toggleViewModal}
        entity={job}
      />
      <div className='bg-white rounded-lg'>
        <div className='px-10 py-9 border-b'>
          <div className='flex justify-between text-2xl mb-1 font-poppins font-medium'>
            <span className='text-dark-cyan-blue'>{title}</span>
          </div>
          <div className=' font-normal'>{company}</div>
          <span className='mb-4 inline-block font-extralight flex'>
            <Location className='mr-3' /> {location} ({work_condition})
          </span>
          <div className=''>
            <button
              className='rounded-lg bg-dark-cyan-blue px-7 py-2 text-white'
              onClick={toggleViewModal}
            >
              Apply Via Find Job
            </button>
          </div>
        </div>

        <div className='p-10 overflow-y-auto h-96'>
          <div>
            <span className='mb-4 inline-block text-lg font-normal'>
              Employment type:
            </span>{' '}
            <span className='mb-4 inline-block text-md  font-extralight'>
              {type}
            </span>
          </div>
          <p className='font-normal mb-3'>
            In this role, you will be responsible for developing and
            implementing user interface components using React.js concepts and
            workflow such as Redux, Flux, and Webpack. You will also be
            responsible for profiling and improving front-end performance and
            documenting our front-end codebase.
          </p>
          <ul className='list-disc list-inside pl-5'>
            <li>Minimum Qualification: Degree</li>
            <li> Experience Level: Senior level</li>
            <li>Experience Length: 5 years</li>
          </ul>
          <h3 className='my-5 font-poppins font-medium'>
            Job Description/Requirements
          </h3>
          <ul className='list-disc list-inside space-y-5'>
            <li className=''>
              5+ years experience of front-end related (HTML5 + JS + CSS3)
              development work experience, familiar with mobile application
              development;
            </li>
            <li>
              Proficient in JavaScript / Typescript, mastering technologies such
              as HTML, CSS, DOM, AJAX, etc., can quickly complete the
              established interactive design functions; At least 4 years
              experience is required.
            </li>
            <li>Thorough understanding of React.js and its core principles</li>
            <li>
              Experience with popular React.js workflows (such as Flux or Redux)
            </li>
            <li>Familiarity with RESTful API’s</li>
            <li>Knowledge of isomorphic react is a plus</li>
            <li>
              Familiarity with mordern front-end build pipelines and tools
            </li>
            <li>
              Experience with common front-end development tools such as Babel,
              Webpack, NPM e.t.c
            </li>
          </ul>
        </div>
        <div className='h-4' />
      </div>
    </>
  );
};

JobDetails.propTypes = {
  job: PropTypes.object,
};

export default JobDetails;
