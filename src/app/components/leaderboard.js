'use client'
import { useEffect, useState } from "react"

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
          {leaderboard.map((leader) => (
            <div key={leader._id}>
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