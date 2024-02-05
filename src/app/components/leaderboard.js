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
   
    useEffect(()=> {
        handleLeaderboard()
        console.log(leaderboard)
    }, [])

    return(
        <div>
      <h2>LeaderBoard</h2>
      {leaderboard ? (
        <div>
          {leaderboard.map((leader, index) => (
            <div key={leader._id}>
            <p className="text-3xl">{index + 1}</p>
              <p>{leader.name}</p>
              <p>{leader.timer}</p>
              <p>{leader.clicks}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No leaderboard data available.</p>
      )}
    </div>
  );
}