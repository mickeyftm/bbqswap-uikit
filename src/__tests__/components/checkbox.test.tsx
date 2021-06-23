import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Checkbox from "../../components/Checkbox/Checkbox";

const handleChange = jest.fn();
const { asFragment } = renderWithTheme(<Checkbox checked onChange={handleChange} />);

it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <input
        checked=""
        class="sc-bdfBwQ fSgGwx"
        scale="md"
        type="checkbox"
      />
    </DocumentFragment>
  `);
});
