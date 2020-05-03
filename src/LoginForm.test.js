import React from "react";
import { act, render, fireEvent } from "@testing-library/react";
import { Blank } from "./LoginForm.stories";

describe("<LoginForm />", () => {
  test("should validate username is required", async () => {
    const { findByText, getByTestId } = render(<Blank />);

    act(() => {
      fireEvent.click(getByTestId("submit"));
    });

    expect(await findByText("Username is required")).toBeDefined();
  });
});
