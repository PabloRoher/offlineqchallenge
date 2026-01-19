export interface Player {
    name: string;
    image_url: string | "";
    accounts: Account[];
}

export interface Account {
    name: string;
    url: string;
    region: string;
}

export interface Summoner {
    name: string;
    player_name: string;
    rank: string;
    lp: number;
    wins: number;
    loses: number;
    region: string;
    image_url?: string;
}
