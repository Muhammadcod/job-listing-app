/* eslint-disable no-undef */
const env = process.env.NODE_ENV;

const development = {
  api: {
    uri: process.env.REACT_APP_URL,
  },
};

const stage = {
  development,
};

export const environment = stage[env];
