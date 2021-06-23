import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Skeleton from "../../components/Skeleton/Skeleton";
const { asFragment } = renderWithTheme(<Skeleton />);


it("renders correctly", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ sc-gsTCUz lnQWmK jeKmSf"
      />
    </DocumentFragment>
  `);
});
const { asFragment } = renderWithTheme(<Skeleton width={50} height={50} variant="circle" />);

it("renders correctly avatar", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ sc-gsTCUz dNWWAj jeKmSf"
        height="50"
        width="50"
      />
    </DocumentFragment>
  `);
});
const { asFragment } = renderWithTheme(<Skeleton width={50} height={50} animation="waves" />);

it("renders correctly waves animation", () => {
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ sc-dlfnbm cIASSD hYUQGT"
        height="50"
        width="50"
      />
    </DocumentFragment>
  `);
});
