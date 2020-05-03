import React from "react";
import { useForm, useField } from "react-form";

import "./LoginForm.css";

const PasswordField = () => {
  const {
    getInputProps,
    meta: { error }
  } = useField("password", {
    async validate(password) {
      if (!password) {
        return "A password is required";
      }
      return false;
    }
  });

  return (
    <>
      <input type="password" {...getInputProps()} />
      {error ? <em>{error}</em> : ""}
    </>
  );
};

const UsernameField = () => {
  const {
    getInputProps,
    meta: { error }
  } = useField("username", {
    async validate(username) {
      if (!username) {
        return "Username is required";
      }
      return false;
    }
  });

  return (
    <>
      <input {...getInputProps()} />
      {error ? <em>{error}</em> : ""}
    </>
  );
};

export const LoginForm = ({ onSubmit }) => {
  const {
    Form,
    meta: { canSubmit }
  } = useForm({ onSubmit });

  return (
    <Form>
      <div>
        <label htmlFor="username">Username</label>
        <UsernameField />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <PasswordField />
      </div>

      <div>
        <button data-testid="submit" type="submit" disabled={!canSubmit}>
          Login
        </button>
      </div>
    </Form>
  );
};
