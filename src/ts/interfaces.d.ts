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

export interface StatsInterface {
  matchId: string;
  statsFor: string;
  score: number;
  xg: number | null;
  possession: number | null;
  shots: number | null;
  shotsOnTarget: number | null;
  shotsOffTarget: number | null;
  saves: number | null;
  corners: number | null;
  offsides: number | null;
  throwIns: number | null;
  freeKicks: number | null;
  tackles: number | null;
  fouls: number | null;
  yellowCards: number | null;
  redCards: number | null;
  passes: number | null;
  passesComplete: number | null;
  attacks: number | null;
  dangerousAttacks: number | null;
  clearance: number | null;
  crossesComplete: number | null;
  interceptions: number | null;
}

export interface LoginSessionInterface {
  loggedIn?: boolean;
  username?: string;
  userId?: number;
  sessionType?: string;
}
