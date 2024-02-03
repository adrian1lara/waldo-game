import ImageNav from "../components/imageNav"
import GameBoard from "../components/gameBoard"
import Timer from "../components/timer"

export default function FirstGame() {
    return (
        <div>
            <ImageNav />
            <Timer />
            <GameBoard />
        </div>
    )
}