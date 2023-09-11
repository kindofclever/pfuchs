import React from 'react';
import { ElevatorType } from '../ElevatorSimulation';

type ElevatorDisplayProps = {
  floors: number;
  elevators: ElevatorType[];
  onRequestElevator: (floor: number) => void;
};

const ElevatorDisplay: React.FC<ElevatorDisplayProps> = ({
  floors,
  elevators,
  onRequestElevator,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Floor</th>
          {Array.from({ length: elevators.length }).map((_, index) => (
            <th key={index}>Elevator {index + 1}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: floors }).map((_, index) => {
          const floorNumber = floors - index;
          return (
            <tr key={index}>
              <td>Floor {floorNumber}</td>
              {elevators.map((elevator) => (
                <td key={elevator.id}>
                  {elevator.currentFloor === floorNumber
                    ? `Elevator ${elevator.id}: ${elevator.status}`
                    : ''}
                </td>
              ))}
              <td>
                <button onClick={() => onRequestElevator(floorNumber)}>
                  Call Elevator
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ElevatorDisplay;
