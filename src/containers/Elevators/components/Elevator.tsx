import React from 'react';

type ElevatorProps = {
  elevator: {
    id: number;
    status: string;
  };
};

const Elevator: React.FC<ElevatorProps> = ({ elevator }) => {
  return (
    <>
      Elevator {elevator.id}: {elevator.status}
    </>
  );
};

export default Elevator;
