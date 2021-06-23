import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Flex from "../../components/Flex/Flex";

const { asFragment } = renderWithTheme(<Flex>flex</Flex>);


it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ iUGWfo"
      >
        flex
      </div>
    </DocumentFragment>
  `);
});
