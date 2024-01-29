import GameBoard from "./components/gameBoard";
import ImageNav from "./components/imageNav";

export default function Home() {
  return (
    <div>
      <ImageNav />
      <h1>Find Waldo</h1>
      <GameBoard />
    </div>
  );
}
