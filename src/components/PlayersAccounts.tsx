// src/components/PlayersAccounts.tsx
import { DEFAULT_AVATAR } from "../config/globals";
import type { Summoner } from "../types/players"; 

interface PlayersAccountsProps {
    playerList: Summoner[];
}

function PlayersAccounts({ playerList }: PlayersAccountsProps) {
    return (
        <>
            {playerList.map((player, index) => (
                <div key={index} className="player-accounts row">
                    <img
                        src={player.image_url || DEFAULT_AVATAR}
                        className="col icon"
                        alt={player.player_name}
                    />
                    <div className="col">
                        <h5 className="player-name">
                            {player.player_name} 
                            <span className="region" style={{ fontSize: '0.8rem', color: '#ff0000', marginLeft: '8px' }}>
                                {player.region}
                            </span>
                        </h5>
                        
                        <div className="riot-stats">
                            <span className="rank-badge" style={{ fontWeight: 'bold', color: '#d1ad6b' }}>
                                {player.rank}
                            </span>
                            <span className="lp-text" style={{ marginLeft: '10px' }}>
                                {player.lp} LP
                            </span>
                            
                            <div className="winrate-bar" style={{ fontSize: '0.85rem', marginTop: '5px', color: '#666' }}>
                                <span>{player.wins}W - {player.loses}L</span>
                                <span style={{ marginLeft: '10px' }}>
                                    Winrate: {player.wins + player.loses > 0 
                                        ? Math.round((player.wins / (player.wins + player.loses)) * 100) 
                                        : 0}%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PlayersAccounts;