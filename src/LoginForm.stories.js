import React from "react";
import { action } from "@storybook/addon-actions";
import { LoginForm } from "./LoginForm";

export default {
  title: "Login Form",
  component: LoginForm,
};

const formSubmitAction = action("submit");

export const Blank = () => <LoginForm onSubmit={formSubmitAction} />;
