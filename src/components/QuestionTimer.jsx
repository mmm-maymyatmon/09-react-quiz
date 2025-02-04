import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);
  
  useEffect(()=> {
    console.log('SETTING TIMEOUT')
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout])

  useEffect(()=> {
    console.log('SETTING INTERVAL')
    setInterval(()=> {
        setRemainingTime((prevRemainingTime)=> prevRemainingTime -100)
    }, 100)
  },[])

  return <progress id="question-time" value={remainingTime} max={timeout} />;
};

export default QuestionTimer;
