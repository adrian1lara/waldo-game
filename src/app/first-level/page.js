import ImageNav from "../components/imageNav"
import GameBoard from "../components/gameBoard"
import Timer from "../components/timer"
import "../styles/global.css"

export default function FirstGame() {
    return (
        <div>
            <div className="flex  justify-center">
            <ImageNav />
            <div className="w-1/2 flex justify-end">
            <Timer />
            </div>
            
            </div>
            <GameBoard />
        </div>
    )
}