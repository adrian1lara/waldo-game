"use client"
import { useEffect, useState } from "react"

export default function LeaderBoardForm() {
    const [error, setError] = useState(null)
    const [name, setName] = useState("")


    const submitToLeaderboard = async(e) => {
        e.preventDefault()

        try {

            const response = await fetch("http://localhost:3000/api/leaderboard/submit", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({
                    name: name,
                    timer: localStorage.getItem("timeRecord"),
                    clicks: localStorage.getItem('nClicks')
                })
            })

            if(response.ok) {

            } else {
                const errorRes = await response.json()
                setError(errorRes.message || "An error occurred")
            }
            
        } catch (error) {
            console.error(error)
            setError("An error Ocurred")
        }
    }


    return (
        <div>
            <h1>You Won!</h1>
            <h1>Leaderboard Form</h1>
            <form >
                <label>Insert Your Name</label>
                <br />
                <input placeholder="Your name" type="text" maxLength={10} min={3} value={name} onChange={(e) => setName(e.target.value)}/>
                <button type="submit" onClick={(e) => submitToLeaderboard(e)}>Send</button>
                {error && <p> {error}</p>}
            </form>
        </div>
    )
}