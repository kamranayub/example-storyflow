import React from "react";
import { render } from "@testing-library/react";
import { Blank } from "./LoginForm.stories";

describe("<LoginForm />", () => {
  test("should validate username is required", () => {
    const { getByText } = render(<Blank />);

    expect(getByText("Username is required")).toBeDefined();
  });
});
