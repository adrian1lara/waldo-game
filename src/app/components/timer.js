"use client"

import { useEffect, useState } from "react"

export default function Timer() {

    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        localStorage.setItem("timeRecord", formatTime(seconds))
    }, [seconds])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
          }, 1000);
      
          return () => clearInterval(intervalId);

    }, [])

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const remainingSeconds = timeInSeconds % 60;
    
        // Pad single-digit seconds with a leading zero
        const displaySeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    
        return `${minutes}:${displaySeconds}`;
      };

    return (
        <div>
            <h3>Timer</h3>
            <p>{formatTime(seconds)}</p>
        </div>
    )
}