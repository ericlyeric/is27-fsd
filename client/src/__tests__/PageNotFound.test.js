import React from "react";
import renderer from "react-test-renderer";
import PageNotFound from "../PageNotFound";

it("renders correctly", () => {
  const tree = renderer.create(<PageNotFound />).toJSON();
  expect(tree).toMatchSnapshot();
});
