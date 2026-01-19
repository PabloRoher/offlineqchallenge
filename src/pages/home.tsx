import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import PlayersAccounts from "../components/PlayersAccounts";
import { useSummoners } from "../hooks/usePlayersHook";

function Home() {
    const { summoners: playerList, loading } = useSummoners();

    if (loading) return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Logo />
            <p>Sincronizando con GitHub y Rajot Games</p>
        </div>
    );

    return (
        <>
            <Logo />
            <div className="container pt-3">
                <PlayersAccounts playerList={playerList} />
            </div>
            <Link to="/leaderboard" className="nav-link">
                Ver Leaderboard
            </Link>
        </>
    );
}

export default Home;