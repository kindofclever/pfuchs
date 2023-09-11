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
    console.log(
      'Initializing with floors:',
      floors,
      'and elevators:',
      numOfElevators
    );

    try {
      const response = await axios.post('http://localhost:3005/initialize', {
        floors,
        numOfElevators,
      });

      console.log('Initialization response:', response);

      if (response.status === 200) {
        console.log('Initialization successful');

        setFloors(floors);
        const elevatorStatus = await axios.get(
          'http://localhost:3005/elevator-status'
        );

        console.log('Elevator status:', elevatorStatus.data);
        setElevators(elevatorStatus.data);
      } else {
        console.error('Initialization failed:', response.data);
      }
    } catch (error) {
      console.error('Error initializing elevator system:', error);
    }
  };

  const handleRequest = async (floor: number) => {
    console.log('Requesting elevator for floor:', floor);

    try {
      const response = await fetch('http://localhost:3005/request-elevator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ floor }),
      });

      console.log('Elevator request response:', response);

      if (response.ok) {
        const data = await response.json();
        console.log('Updated elevator data after request:', data);
        setElevators(data);
      } else {
        console.error('Failed to request elevator', await response.text());
      }
    } catch (error) {
      console.error('Error occurred while requesting elevator:', error);
    }
  };

  return (
    <div>
      <InitializationForm onInitialize={handleInitialization} />
      <ElevatorDisplay
        floors={floors}
        elevators={elevators}
        onRequestElevator={handleRequest}
      />
      <RequestElevatorForm onRequest={handleRequest} />
    </div>
  );
};

export default ElevatorSimulation;
