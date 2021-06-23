import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Overlay from "../../components/Overlay/Overlay";
const { asFragment } = renderWithTheme(<Overlay show />);


it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ SmJzf"
        role="presentation"
      />
    </DocumentFragment>
  `);
});
