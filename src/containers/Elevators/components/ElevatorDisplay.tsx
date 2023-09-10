import React from 'react';

type ElevatorType = {
  id: number;
  currentFloor: number;
  status: 'idle' | 'doorOpen';
};

type ElevatorDisplayProps = {
  floors: number;
  elevators: ElevatorType[];
};

const Elevator: React.FC<{ elevator: ElevatorType }> = ({ elevator }) => (
  <div>
    Elevator {elevator.id} on floor {elevator.currentFloor}
  </div>
);

const ElevatorDisplay: React.FC<ElevatorDisplayProps> = ({
  floors,
  elevators,
}) => (
  <div>
    {Array.from({ length: floors }).map((_, index) => {
      const floorNumber = floors - index;
      const elevatorsOnFloor = elevators.filter(
        (e) => e.currentFloor === floorNumber
      );

      return (
        <div key={index}>
          Floor {floorNumber}
          {elevatorsOnFloor.map((elevator) => (
            <Elevator
              key={elevator.id}
              elevator={elevator}
            />
          ))}
        </div>
      );
    })}
  </div>
);

export default ElevatorDisplay;
