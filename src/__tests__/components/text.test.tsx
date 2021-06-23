import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Text from "../../components/Text/Text";
const { asFragment } = renderWithTheme(<Text>pancake</Text>);


it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ jodyWs"
        color="text"
      >
        pancake
      </div>
    </DocumentFragment>
  `);
});
