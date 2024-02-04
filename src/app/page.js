
import LeaderBoard from "./components/leaderboard";
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
          <LeaderBoard />
        </section>
      </main>
    </div>
  );
}
