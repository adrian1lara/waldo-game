
import FirstLevel from "./components/firstGame";
import LeaderBoard from "./components/leaderboard";
import "./styles/global.css"

export default function Home() {
  return (
    <div className="bg-blue-800 text-white">
      <main className="h-screen flex flex-col items-center justify-center space-x-10 text-center" >
        <section>
          <h1 className=" mb-10 text-xl text-bold">
            Games
          </h1>
          <FirstLevel />
        </section>
        <section className="mt-10">
          <h2 className="text-xl text-bold">Leaderboard</h2>
          <LeaderBoard />
        </section>
      </main>
    </div>
  );
}
