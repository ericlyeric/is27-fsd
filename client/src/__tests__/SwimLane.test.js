import React from "react";
import renderer from "react-test-renderer";
import SwimLane from "../common/SwimLane";
import SwimLaneProvider from "../context/SwimLaneContext";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <SwimLaneProvider>
        <SwimLane />
      </SwimLaneProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
