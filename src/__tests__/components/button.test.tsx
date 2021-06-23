import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Button from "../../components/Button/Button";
const { asFragment } = renderWithTheme(<Button>Submit</Button>);

it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <button
        class="sc-bdfBwQ fvqUiO"
        type="button"
      >
        Submit
      </button>
    </DocumentFragment>
  `);
});
