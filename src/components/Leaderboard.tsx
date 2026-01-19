// ../components/Leaderboard.tsx
import type { Summoner } from "../types/players";

interface LeaderboardProps {
    playerList: Summoner[];
}

const Leaderboard = ({ playerList }: LeaderboardProps) => {
    return (
        <div className="leaderboard">
            <table>
                <thead>
                    <tr>
                        <th>Jugador</th>
                        <th>Rango</th>
                        <th>LP</th>
                        <th>Winrate</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList.map((player) => (
                        <tr key={player.name}>
                            <td>{player.player_name}</td>
                            <td>{player.rank}</td>
                            <td>{player.lp}</td>
                            <td>
                                {player.wins}W - {player.loses}L
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
