import { useState, useEffect } from 'react';
import type { Summoner } from '../types/players';
import { getSummonerData } from '../services/usePlayer';
import { PLAYER_DATA_LINK } from '../config/globals';

export function useSummoners() {
  const [summoners, setSummoners] = useState<Summoner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarTodos() {
      try {
        setLoading(true);
        const res = await fetch(PLAYER_DATA_LINK);
        const dataJson = await res.json();

        const promesas = dataJson.flatMap((player: any) => 
          player.accounts.map(async (acc: any) => {
            
            const [nombreLimpio, tagLimpio] = acc.name.split("#").map((s: string) => s.trim());

            const datosRiot = await getSummonerData(nombreLimpio, tagLimpio, acc.region);

            if (datosRiot) {
              return {
                ...datosRiot,
                image_url: player.image_url,
                player_name: player.name,
                region: acc.region
              };
            }
            return null;
          })
        );

        const resultados = await Promise.all(promesas);
        const validos = resultados.filter((s): s is Summoner => s !== null);

        setSummoners(validos);
      } catch (error) {
        console.error("Error cargando jugadores:", error);
      } finally {
        setLoading(false);
      }
    }

    cargarTodos();
  }, []);

  return { summoners, loading };
}