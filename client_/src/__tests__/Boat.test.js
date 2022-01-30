import React from "react";
import renderer from "react-test-renderer";
import Boat from "../common/Boat";
import SwimLaneProvider from "../context/SwimLaneContext";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <SwimLaneProvider>
        <Boat />
      </SwimLaneProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
