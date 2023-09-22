import React, { useState } from 'react';

function Practice() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);

  const handleNext = () => {
    if (showDiv1) {
      setShowDiv1(false);
      setShowDiv2(true);
    } else if (showDiv2) {
      setShowDiv2(false);
      setShowDiv3(true);
    }
  };

  const handlePrev = () => {
    if (showDiv2) {
      setShowDiv2(false);
      setShowDiv1(true);
    } else if (showDiv3) {
      setShowDiv3(false);
      setShowDiv2(true);
    }
  };

  return (
    <div>
      <button onClick={handlePrev} disabled={showDiv1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={showDiv3}>
        Next
      </button>

      {showDiv1 && <div>Div 1</div>}
      {showDiv2 && <div>Div 2</div>}
      {showDiv3 && <div>Div 3</div>}
    </div>
  );
}

export default Practice;
