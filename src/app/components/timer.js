"use client"

import { useEffect, useState } from "react"
import "../styles/global.css"

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
        <div >
            <div className=" bg-yellow-500 mt-2 p-2 border-2 rounded-xl fixed">
            <h3 className="text-lg">Timer:</h3>
            <p className="text-lg">{formatTime(seconds)}</p>
            </div>
        </div>
    )
}