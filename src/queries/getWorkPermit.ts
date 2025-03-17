// queries/getWorkPermit.ts
import { WorkPermit } from '../types';

export const getWorkPermit = async (): Promise<WorkPermit> => {
  const workPermitData: WorkPermit = {
    visaStatus: 'Turkish Citizen',
    expiryDate: new Date('2099-12-31'),
    summary: 'I am a Turkish citizen with full working rights in Turkey. I am also open to international opportunities and remote positions.',
    additionalInfo: 'As a Turkish citizen, I have the flexibility to work both in Turkey and explore international opportunities. I am particularly interested in remote positions and opportunities that could lead to relocation. I am open to discussing visa sponsorship for the right opportunity.'
  };

  return workPermitData;
};
