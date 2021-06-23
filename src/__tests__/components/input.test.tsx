import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Input from "../../components/Input/Input";

const handleChange = jest.fn();
const { asFragment } = renderWithTheme(<Input type="text" value="input" onChange={handleChange} />);


it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <input
        class="sc-bdfBwQ dtjLGO"
        scale="md"
        type="text"
        value="input"
      />
    </DocumentFragment>
  `);
});
