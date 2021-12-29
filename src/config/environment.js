/* eslint-disable no-undef */
const env = process.env.NODE_ENV;

const development = {
  api: {
    uri: process.env.BASE_URL,
  },
};

const stage = {
  development,
};

console.log(process.env.BASE_URL);

export const environment = stage[env];
