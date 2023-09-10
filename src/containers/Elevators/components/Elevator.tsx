import React from 'react';

type ElevatorProps = {
  elevator: {
    id: number;
    status: string;
  };
};

const Elevator: React.FC<ElevatorProps> = ({ elevator }) => {
  return (
    <div>
      Elevator {elevator.id}: {elevator.status}
    </div>
  );
};

export default Elevator;
