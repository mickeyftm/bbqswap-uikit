import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
const { asFragment } = renderWithTheme(<Breadcrumbs>Link</Breadcrumbs>);


it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <ul
        class="sc-dlfnbm lhEQuh"
      />
    </DocumentFragment>
  `);
});
