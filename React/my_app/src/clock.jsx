import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <h2>{time.toLocaleDateString()}</h2>
    </div>
  );
}

export default Clock;
