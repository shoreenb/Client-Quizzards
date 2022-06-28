<<<<<<< HEAD
import { useEffect, useState } from "react";

const calcTimeLeft = (t) => {
=======
import { useEffect, useState } from 'react';

const calcTimeLeft = t => {
>>>>>>> 85d49a512fb33da49f8111c26203827c025f1e78
  if (!t) return 0;

  const left = t - new Date().getTime();

  if (left < 0) return 0;

  return left;
};

export default function useCountdown(endTime) {
  const [end, setEndTime] = useState(endTime);
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(end));

  useEffect(() => {
    setTimeLeft(calcTimeLeft(end));

    const timer = setInterval(() => {
      const targetLeft = calcTimeLeft(end);
      setTimeLeft(targetLeft);

      if (targetLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [end]);

  return [timeLeft, setEndTime];
<<<<<<< HEAD
}
=======
}
>>>>>>> 85d49a512fb33da49f8111c26203827c025f1e78
