// ElevatorSimulation.tsx

import React, { useState } from 'react';
import axios from 'axios';
import InitializationForm from './components/InitializationForm';
import ElevatorDisplay from './components/ElevatorDisplay';
import RequestElevatorForm from './components/RequestElevatorForm';

export type ElevatorType = {
  id: number;
  currentFloor: number;
  status: 'idle' | 'doorOpen';
};

const ElevatorSimulation: React.FC = () => {
  const [floors, setFloors] = useState<number>(0);
  const [elevators, setElevators] = useState<ElevatorType[]>([]);

  const handleInitialization = async (
    floors: number,
    numOfElevators: number
  ) => {
    try {
      const response = await axios.post('http://localhost:3005/initialize', {
        floors,
        numOfElevators,
      });
      if (response.status === 200) {
        setFloors(floors);
        const elevatorStatus = await axios.get(
          'http://localhost:3005/elevator-status'
        );
        setElevators(elevatorStatus.data);
      } else {
        console.error('Initialization failed:', response.data);
      }
    } catch (error) {
      console.error('Error initializing elevator system:', error);
    }
  };

  const handleRequest = async (floor: number) => {
    try {
      const response = await axios.post(
        'http://localhost:3005/request-elevator',
        {
          floor,
        }
      );
      if (response.status === 200) {
        const elevatorStatus = await axios.get(
          'http://localhost:3005/elevator-status'
        );
        setElevators(elevatorStatus.data);
      } else {
        console.error('Elevator request failed:', response.data);
      }
    } catch (error) {
      console.error('Error requesting elevator:', error);
    }
  };

  return (
    <div>
      <InitializationForm onInitialize={handleInitialization} />
      <ElevatorDisplay
        floors={floors}
        elevators={elevators}
      />
      <RequestElevatorForm onRequest={handleRequest} />
    </div>
  );
};

export default ElevatorSimulation;
