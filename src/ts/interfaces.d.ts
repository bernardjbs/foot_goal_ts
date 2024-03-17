export interface UserInterface {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    phone: string;
}

export interface CompetitionInterface {
    country: string;
    name: string;
}

export interface FootMatchInterface {
    matchId: string; 
    competitionId: number;
    round: number;
    matchStartsAt: Date;
    homeTeam: string;
    awayTeam: string;
}