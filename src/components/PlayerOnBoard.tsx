import { DEFAULT_AVATAR } from "../config/globals";
import type { Player } from "../types/players";

function PlayerOnBoard(player: Player) {
    return (
        <div className="player-accounts row">
            <img
                src={player.image_url || DEFAULT_AVATAR}
                className="col icon"
            />
            <div className="col">
                <h5 className="player-name">{player.name}</h5>
                <ul>
                    {player.accounts?.map((account) => (
                        <li key={account.url}>
                            <a
                                href={account.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {account.name}
                            </a>
                            <span className="region"> {account.region}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PlayerOnBoard;
