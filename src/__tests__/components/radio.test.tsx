import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Radio from "../../components/Radio/Radio";
const { asFragment } = renderWithTheme(<Radio name="radio" value="1" />);


it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <input
        class="sc-bdfBwQ dsNrbs"
        name="radio"
        scale="md"
        type="radio"
        value="1"
      />
    </DocumentFragment>
  `);
});
