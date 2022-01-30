import React, { createContext, useState, useEffect, useContext } from "react";
import { Container, Spinner } from "react-bootstrap";
import { getAllSwimLanes } from "../api/swimLaneApi";

const SwimLaneContext = createContext();

export default function SwimLaneProvider({ children }) {
  const [swimLanes, setSwimLanes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSwimLanesAll() {
      const response = await getAllSwimLanes();
      setSwimLanes(response);
    }

    if (Object.keys(swimLanes).length === 0) {
      setIsLoading(true);
      getSwimLanesAll();
      setIsLoading(false);
    }
  }, [swimLanes]);

  return (
    <>
      {isLoading ? (
        <Container>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        </Container>
      ) : (
        <SwimLaneContext.Provider
          value={[swimLanes, setSwimLanes, isLoading, setIsLoading]}
        >
          {children}
        </SwimLaneContext.Provider>
      )}
    </>
  );
}

export function useSwimLaneContext() {
  const context = useContext(SwimLaneContext);
  if (context === undefined) {
    throw new Error(
      "useSwimLaneContext must be used within the SwimLaneProvider"
    );
  }
  return context;
}
