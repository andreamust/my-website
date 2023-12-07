import React from 'react';

function Spinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-12 h-12 border-4 border-green-600 rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
