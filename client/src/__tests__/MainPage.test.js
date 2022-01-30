import React from "react";
import renderer from "react-test-renderer";
import MainPage from "../components/MainPage";
import SwimLaneProvider from "../context/SwimLaneContext";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <SwimLaneProvider>
        <MainPage />
      </SwimLaneProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
