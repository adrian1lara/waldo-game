"use client"
import { useRouter } from "next/navigation"
import "../styles/global.css"
import { useEffect, useState } from "react"


export default function LeaderBoardForm() {
    const [error, setError] = useState(null)
    const [name, setName] = useState("")
    const [time, setTime] = useState("")
    const router = useRouter()

    useEffect(() => {
        setTime(localStorage.getItem("timeRecord"))
    })

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
                router.push("/")
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
        <div className="h-screen flex items-center justify-center">
            <div>
                <div className="text-center">
                <h1 className="text-3xl font-bold text-blue-500">You Won!</h1>
                <p className="mt-2">Your time was  {time}</p>
                </div>
                
                <form className="mt-4 shadow-lg p-5 rounded-xl">
                    <label>Insert Your Nickname</label>
                    <br />
                    <input 
                    className="mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"
                    placeholder="Annita" type="text" maxLength={10} min={3} value={name} onChange={(e) => setName(e.target.value)}/>
                    {error && <p className="text-red-500 text-xs italic"> {error}</p>}
                    <button 
                    className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" 
                    onClick={(e) => submitToLeaderboard(e)}>Send</button>
                </form>
            </div>
        </div>
    )
}