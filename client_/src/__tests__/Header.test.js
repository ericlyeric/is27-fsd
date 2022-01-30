import React from "react";
import renderer from "react-test-renderer";
import Header from "../components/Header";
import SwimLaneProvider from "../context/SwimLaneContext";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <SwimLaneProvider>
        <Header />
      </SwimLaneProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
