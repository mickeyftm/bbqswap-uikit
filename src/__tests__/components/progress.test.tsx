import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Progress from "../../components/Progress/Progress";
const { asFragment } = renderWithTheme(<Progress primaryStep={50} />);


it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gsTCUz hAeaPg"
      >
        <div
          class="sc-bdfBwQ hyWavk"
          style="width: 50%;"
        />
      </div>
    </DocumentFragment>
  `);
});
