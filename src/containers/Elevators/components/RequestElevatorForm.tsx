import React, { useState } from 'react';

type RequestElevatorFormProps = {
  onRequest: (floor: number) => void;
};

const RequestElevatorForm: React.FC<RequestElevatorFormProps> = ({
  onRequest,
}) => {
  const [floor, setFloor] = useState<string>('');

  const handleSubmit = () => {
    onRequest(Number(floor));
  };

  return (
    <div>
      <input
        value={floor}
        onChange={(e) => setFloor(e.target.value)}
        placeholder='Request elevator to floor'
      />
      <button onClick={handleSubmit}>Request Elevator</button>
    </div>
  );
};

export default RequestElevatorForm;
