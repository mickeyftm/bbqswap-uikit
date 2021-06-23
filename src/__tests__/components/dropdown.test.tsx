import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Dropdown from "../../components/Dropdown/Dropdown";
const { asFragment } = renderWithTheme(<Dropdown target={<div>target</div>} />);

it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gsTCUz cXEafq"
      >
        <div>
          target
        </div>
        <div
          class="sc-bdfBwQ iLGqGB"
        />
      </div>
    </DocumentFragment>
  `);
});
