import Competition from '@database/models/Competition.js';
import { CompetitionInterface } from '@ts/interfaces.js'

const competitionData: CompetitionInterface[] = [
  {
    country: 'England', 
    name: 'Premier League', 
  },
  {
    country: 'England', 
    name: 'Championship', 
  },
  {
    country: 'England', 
    name: 'League One', 
  },

];

export const seedCompetitions = () => Competition.bulkCreate(competitionData);
