// form testing
// http://localhost:3000/login

import * as React from 'react'
import * as faker from 'faker'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

const buildLoginForm = () => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password()
  }
}

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn();
  render(<Login onSubmit={handleSubmit} />);

  const {username, password} = buildLoginForm();

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', /submit/i );

  userEvent.type(usernameField, username);
  userEvent.type(passwordField, password);
  userEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({username, password});
  expect(handleSubmit).toHaveBeenCalledTimes(1);

})

/*
eslint
  no-unused-vars: "off",
*/
