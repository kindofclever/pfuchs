import { FC, useState } from 'react';
import { Grid, Button } from '@mui/material';
import React from 'react';

// Components for each floor
const Floor: FC<{
  floorNumber: number;
  callElevator: (floor: number) => void;
}> = ({ floorNumber, callElevator }) => {
  return (
    <Button
      variant='contained'
      onClick={() => callElevator(floorNumber)}
    >
      Call Elevator to Floor {floorNumber}
    </Button>
  );
};

// Components for each elevator
const Elevator: FC<{ elevatorNumber: number; currentFloor: number }> = ({
  elevatorNumber,
  currentFloor,
}) => {
  return <div>{currentFloor === elevatorNumber ? 'E' : ''}</div>;
};

const ElevatorSimulation: FC = () => {
  const numOfFloors = 20;
  const numOfElevators = 5;
  const [elevatorPositions, setElevatorPositions] = useState<Array<number>>(
    Array(numOfElevators).fill(1)
  );

  const callElevator = (floor: number) => {
    const newPositions = [...elevatorPositions];
    newPositions[0] = floor; // This simply makes the first elevator go to the called floor. More advanced logic would determine the best elevator to send.
    setElevatorPositions(newPositions);
  };

  return (
    <div>
      <h1>Elevator Simulation</h1>
      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          xs={2}
        >
          Floors
        </Grid>
        {Array.from({ length: numOfElevators }).map((_, i) => (
          <Grid
            key={i}
            item
            xs={2}
          >
            Elevator {i + 1}
          </Grid>
        ))}

        {Array.from({ length: numOfFloors }).map((_, i) => (
          <React.Fragment key={i}>
            <Grid
              item
              xs={2}
            >
              <Floor
                floorNumber={i + 1}
                callElevator={callElevator}
              />
            </Grid>
            {Array.from({ length: numOfElevators }).map((_, j) => (
              <Grid
                key={j}
                item
                xs={2}
              >
                <Elevator
                  elevatorNumber={i + 1}
                  currentFloor={elevatorPositions[j]}
                />
              </Grid>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default ElevatorSimulation;
