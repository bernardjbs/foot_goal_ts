import FootMatch from '@database/models/FootMatch.js';
import { FootMatchInterface } from '@ts/interfaces.js';

const matchData: FootMatchInterface[] = [
  {
    matchId: 'Aa001',
    competitionId: 1,
    round: 10,
    matchStartsAt: new Date('2024-03-10T12:00:00Z'),
    homeTeam: 'Manchester United',
    awayTeam: 'Liverpool'
  },
  {
    matchId: 'Bb002',
    competitionId: 1,
    round: 10,
    matchStartsAt: new Date('2024-03-10T12:00:00Z'),
    homeTeam: 'Newcastle',
    awayTeam: 'Manchester City'
  },
  {
    matchId: 'Cc003',
    competitionId: 1,
    round: 10,
    matchStartsAt: new Date('2024-03-10T12:00:00Z'),
    homeTeam: 'West Ham',
    awayTeam: 'Aston Villa'
  },
  {
    matchId: 'Dd004',
    competitionId: 1,
    round: 10,
    matchStartsAt: new Date('2024-03-10T12:00:00Z'),
    homeTeam: 'Fullham',
    awayTeam: 'Tottenham'
  },
  {
    matchId: 'Ee005',
    competitionId: 1,
    round: 10,
    matchStartsAt: new Date('2024-03-10T12:00:00Z'),
    homeTeam: 'Burnley',
    awayTeam: 'Brentford'
  }
];

export const seedMatches = () => FootMatch.bulkCreate(matchData);
