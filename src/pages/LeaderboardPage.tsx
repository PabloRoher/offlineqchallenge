import { Link } from "react-router-dom";
import Leaderboard from "../components/Leaderboard";
import { useSummoners } from "../hooks/usePlayersHook"; 

function LeaderboardPage() {
    const { summoners: playerList, loading } = useSummoners();

    if (loading) return <div>Loading players…</div>;

    return (
        <>
            <Leaderboard playerList={playerList} />
            <Link to="/">home</Link>
        </>
    );
}

export default LeaderboardPage;
