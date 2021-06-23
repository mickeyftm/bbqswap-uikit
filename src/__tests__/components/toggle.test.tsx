import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

const handleChange = jest.fn();
const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} />);


it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dlfnbm bFnLMa"
      >
        <input
          checked=""
          class="sc-gsTCUz geJjSd"
          type="checkbox"
        />
        <div
          class="sc-bdfBwQ iwlTPv"
        />
      </div>
    </DocumentFragment>
  `);
});
