"use client"
import Image from "next/image";
import wallpaper from "../assets/WaldoBanner.jpg"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function GameBoard() {
    const [waldoClicked, setWaldoClicked] = useState(false)
    const [gameResult, setGameResult ] = useState(false)
    const router = useRouter()

    const handleClickWaldo = () => {
        setWaldoClicked(true)
        setGameResult(true)
        console.log("found")
    }

    const handleClickAnyWhere = () => {
        setWaldoClicked(false)
        setGameResult(false)
        console.log("try again")
    }

    useEffect(() => {
        if(gameResult) {
            router.push("/submit")
        }
    })



    return (
        <div>
            <div id="waldoPos" style={{ position: "relative",left: "1169px",
        top: "370px", width: "34px", height:"40px",  border: "1px solid black"}}
        onClick={handleClickWaldo}
        >
            
            </div>
            <Image
            src={wallpaper}
            alt="waldo gameboard"
            onClick={handleClickAnyWhere}/>
            
        </div>
    )
}