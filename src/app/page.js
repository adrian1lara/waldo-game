import GameBoard from "./components/gameBoard";
import ImageNav from "./components/imageNav";
import Timer from "./components/timer";

export default function Home() {
  return (
    <div>
      <ImageNav />
      <h1>Find Waldo</h1>
      <Timer />
      <GameBoard />
    </div>
  );
}
