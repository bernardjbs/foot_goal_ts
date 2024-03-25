import Stats from '@database/models/Stats.js';
import { StatsInterface } from '@ts/interfaces.js';

const statsData: StatsInterface[] = [
  {
    matchId: 'Aa001',
    statsFor: 'home',
    score: 2,
    xg: 3.19,
    possession: 42,
    shots: 28,
    shotsOnTarget: 11,
    shotsOffTarget: 9,
    saves: 8,
    corners: 5,
    offsides: 3,
    throwIns: 27,
    freeKicks: 16,
    tackles: 21,
    fouls: 11,
    yellowCards: 3,
    redCards: 1,
    passes: 512,
    passesComplete: 386,
    attacks: 113,
    dangerousAttacks: 88,
    clearance: 28,
    crossesComplete: 6,
    interceptions: 17
  },
  {
    matchId: 'Aa001',
    statsFor: 'away',
    score: 1,
    xg: 1.87,
    possession: 58,
    shots: 25,
    shotsOnTarget: 11,
    shotsOffTarget: 8,
    saves: 7,
    corners: 8,
    offsides: 4,
    throwIns: 35,
    freeKicks: 14,
    tackles: 20,
    fouls: 12,
    yellowCards: 3,
    redCards: 0,
    passes: 717,
    passesComplete: 610,
    attacks: 150,
    dangerousAttacks: 93,
    clearance: 32,
    crossesComplete: 6,
    interceptions: 10
  }
];

export const seedStats = () => Stats.bulkCreate(statsData);
