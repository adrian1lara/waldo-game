'use client'
import { useEffect, useState } from "react"
import "../styles/global.css"

export default function LeaderBoard() {

    const [ leaderboard, setLeaderboard ] = useState(null)

    const handleLeaderboard = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/leaderboard")
            const dataRes = await res.json()

            if(res.ok) {
                setLeaderboard(dataRes.leaderboard)
            } else {
                throw new Error(dataRes.message)
            }
            
        } catch (error) {
            console.log(error)
            setLeaderboard([])
        }
    }

    function convertTimeStringToSeconds(timeString) {
        const [minutes, seconds] = timeString.split(":").map(Number);
        return minutes * 60 + seconds;
    }
   
    useEffect(()=> {
        handleLeaderboard()
    }, [])



    return(
        <div>
            <h2>Leaderboard</h2>
        <table className="min-w-full text-left text-sm font-light">
            
            <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
                <th scope="col" className="px-6 py-4">Position</th>
                <th scope="col" className="px-6 py-4">Name</th>
                <th scope="col" className="px-6 py-4">Clicks</th>
                <th scope="col" className="px-6 py-4">Timer</th>
            </tr>
            </thead>

                <tbody >

                    {leaderboard?.sort((a, b) => { return convertTimeStringToSeconds(a.timer)  - convertTimeStringToSeconds(b.timer) }).map((leader, index) => (
                        <tr key={leader._id} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                        <td className="whitespace-nowrap px-6 py-4">{leader.name}</td>
                        <td className="whitespace-nowrap px-6 py-4">{leader.clicks}</td>
                        <td className="whitespace-nowrap px-6 py-4">{leader.timer}</td>
                    </tr>
                    ))}
                </tbody>
        </table>
        
    </div>
  );
}