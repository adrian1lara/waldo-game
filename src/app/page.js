import GameBoard from "./components/gameBoard";
import ImageNav from "./components/imageNav";
import Timer from "./components/timer";
import "./styles/global.css"

export default function Home() {
  return (
    <div>
      <main>
        <aside>
          <h1>
            Games
          </h1>
        </aside>
        <section>
          <h1>leaderboard</h1>
        </section>
      </main>
    </div>
  );
}
