// src/services/usePlayer.ts
import type { Summoner } from "../types/players";

export async function getSummonerData(nombre: string, tag: string, region: string): Promise<Summoner | null> {
    try {
        const response = await fetch(`http://localhost:3000/jugador/${region}/${nombre}/${tag}`);
        const data = await response.json();

        if (data && data.length > 0) {
            const league = data[0];
            return {
                name: `${nombre}#${tag}`,
                player_name: nombre,
                rank: `${league.tier} ${league.rank}`,
                lp: league.leaguePoints,
                wins: league.wins,
                loses: league.losses,
                region: region,
            };
        }
        return null;
    } catch (error) {
        console.error("Error obteniendo el Summoner:", error);
        return null;
    }
}