import useCountdown from './useCountdown';

function Countdown() {
  const endTime = new Date().getTime() + 60000 * 1; // 1 minutes
  const [timeLeft, setEndTime] = useCountdown(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;

  return (
    <div className="Countdown">
      <p>{`${minutes}:${seconds}`}</p>
      <button onClick={() => setEndTime(endTime)}>Reset</button>
    </div>
  );
}

export default Countdown;