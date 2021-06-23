import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Heading from "../../components/Heading/Heading";

const { asFragment } = renderWithTheme(<Heading>Title</Heading>);


it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h2
        class="sc-bdfBwQ sc-gsTCUz iEFWFe djGkFV"
        color="text"
      >
        Title
      </h2>
    </DocumentFragment>
  `);
});
