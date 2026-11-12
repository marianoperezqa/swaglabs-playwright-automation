export const users = {
  standard: {
    username: process.env.STANDARD_USER || 'standard_user',
    password: process.env.STANDARD_PASSWORD || 'secret_sauce'
  },

  locked: {
    username: process.env.LOCKED_USER || 'locked_out_user',
    password: process.env.STANDARD_PASSWORD || 'secret_sauce'
  },

  invalid: {
    username: 'invalid_user',
    password: 'invalid_password'
  }
};