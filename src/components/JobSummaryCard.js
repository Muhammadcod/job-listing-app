import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Location } from '../assets/location.svg';

const JobSummaryCard = ({ jobsList, displayJobDetails }) => {
  const printAmount = (amount) => {
    const number = Number(amount);
    const refinedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount / 100);
    if (isNaN(number)) {
      return amount;
    }
    return refinedAmount;
  };

  return (
    <>
      {jobsList.length > 0 ? (
        jobsList.map((job) => (
          <div
            className='group p-5 md:p-10 bg-white rounded-lg active:bg-dark-cyan-blue hover:bg-dark-cyan-blue hover:text-white'
            key={job.id}
            onClick={() => displayJobDetails(job)}
          >
            <div className='flex justify-between text-2xl mb-1 font-poppins font-medium group-hover:text-white text-dark-cyan-blue'>
              <span className=''>{job.title}</span>
              <span>{printAmount(job.salary)}</span>
            </div>
            <span className='mb-4 inline-block font-extralight flex'>
              <Location className='mr-3' /> {job.location}
            </span>
            <p className='font-normal mb-3'>
              We seek an experienced Javascript web application developer who is
              proficient with React.js and has excellent communication skills.
            </p>
            <div className='flex justify-end'>
              <button className='rounded-lg bg-bright-red px-4 py-1 text-white group-hover:text-bright-red group-hover:bg-white'>
                See more
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No Jobs At The Moment</p>
      )}
    </>
  );
};

JobSummaryCard.propTypes = {
  jobsList: PropTypes.array,
  displayJobDetails: PropTypes.func,
};

export default JobSummaryCard;
