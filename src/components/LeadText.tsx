import React from 'react';

const LeadText: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="mt-4">
      <p className="lead">{message}</p>
    </div>
  );
};

export default LeadText;
