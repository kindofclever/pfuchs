import React, { useState } from 'react';

type InitializationFormProps = {
  onInitialize: (floors: number, elevators: number) => void;
};

const InitializationForm = ({ onInitialize }: InitializationFormProps) => {
  const [floors, setFloors] = useState('');
  const [elevators, setElevators] = useState('');

  const handleSubmit = () => {
    onInitialize(Number(floors), Number(elevators));
  };

  return (
    <div>
      <input
        value={floors}
        onChange={(e) => setFloors(e.target.value)}
        placeholder='Number of floors'
      />
      <input
        value={elevators}
        onChange={(e) => setElevators(e.target.value)}
        placeholder='Number of elevators'
      />
      <button onClick={handleSubmit}>Initialize</button>
    </div>
  );
};

export default InitializationForm;
