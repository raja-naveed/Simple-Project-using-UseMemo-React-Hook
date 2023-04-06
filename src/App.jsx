import React, { useMemo } from 'react';

function Clock() {
  const time = useMemo(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return { hours, minutes, seconds };
  }, []);

  const { hours, minutes, seconds } = time;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-64 h-64 rounded-full bg-pink-500 text-white font-bold text-4xl shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl">{hours}</div>
          <div className="text-xs">HOURS</div>
        </div>
        <div className="mx-2">
          <div className="text-5xl">{minutes < 10 ? '0' : ''}{minutes}</div>
          <div className="text-xs">MINUTES</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl">{seconds < 10 ? '0' : ''}{seconds}</div>
          <div className="text-xs">SECONDS</div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
