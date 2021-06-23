import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Tag from "../../components/Tag/Tag";
const { asFragment } = renderWithTheme(<Tag>Core</Tag>);

it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ cVEdKv"
      >
        Core
      </div>
    </DocumentFragment>
  `);
});
