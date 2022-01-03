import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const JobListRow = ({ job }) => {
  const removeJob = async () => {
    try {
      const { message, status } = await axios.delete(`my/jobs/${job.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
      if (status === 'success') {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className='group  space-y-6 font-poppins '>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='w-4 h-4 rounded-full bg-bright-red' />
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className=''>
            <div className='font-medium text-lg text-ted-gray group-hover:text-ted-black'>
              {job.title}
            </div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-lg text-ted-gray group-hover:text-ted-black'>
          12/7/21
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-lg text-ted-gray group-hover:text-ted-black'>
          50
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        <button className='rounded-sm bg-bright-red text-lg px-8 py-1 text-white'>
          Edit
        </button>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
        <button
          className='rounded-none border border-light-blue px-7 py-1 text-lg text-light-blue'
          onClick={removeJob}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

JobListRow.propTypes = {
  job: PropTypes.object,
};

export default JobListRow;
