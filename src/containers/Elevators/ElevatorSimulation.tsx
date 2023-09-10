import { FC, useState } from 'react';
import { Grid, Button } from '@mui/material';
import React from 'react';

type ElevatorState = {
  currentFloor: number;
  direction: 'up' | 'down' | 'stationary';
};

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

const Elevator: FC<{ currentFloor: number; elevatorNumber: number }> = ({
  currentFloor,
  elevatorNumber,
}) => {
  return (
    <div>
      Elevator {elevatorNumber}: {currentFloor}
    </div>
  );
};

const distributeElevatorsAcrossFloors = (
  numOfElevators: number,
  numOfFloors: number
): ElevatorState[] => {
  const interval = Math.ceil(numOfFloors / numOfElevators);
  return Array.from({ length: numOfElevators }, (_, index) => {
    return {
      currentFloor: Math.min(index * interval + 1, numOfFloors),
      direction: 'stationary',
    } as ElevatorState;
  });
};

const ElevatorSimulation: FC = () => {
  const numOfFloors = 20;
  const numOfElevators = 5;

  const [elevators, setElevators] = useState<ElevatorState[]>(
    distributeElevatorsAcrossFloors(numOfElevators, numOfFloors)
  );

  const getClosestElevator = (floor: number): number => {
    let minDistance = numOfFloors + 1;
    let bestElevatorIndex = -1;

    elevators.forEach((elevator, index) => {
      const distance = Math.abs(elevator.currentFloor - floor);
      if (
        distance < minDistance &&
        (elevator.direction === 'stationary' ||
          (elevator.direction === 'up' && elevator.currentFloor < floor) ||
          (elevator.direction === 'down' && elevator.currentFloor > floor))
      ) {
        bestElevatorIndex = index;
        minDistance = distance;
      }
    });

    return bestElevatorIndex;
  };

  const callElevator = (floor: number) => {
    const closestElevatorIndex = getClosestElevator(floor);
    const newElevators = [...elevators];
    newElevators[closestElevatorIndex] = {
      ...newElevators[closestElevatorIndex],
      direction:
        floor > newElevators[closestElevatorIndex].currentFloor ? 'up' : 'down',
      currentFloor: floor, 
    };
    setElevators(newElevators);
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
                  elevatorNumber={j + 1}
                  currentFloor={elevators[j].currentFloor}
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
