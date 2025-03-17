// queries/getContactMe.ts
import { ContactMe } from '../types';

export const getContactMe = async (): Promise<ContactMe> => {
  const contactData: ContactMe = {
    profilePicture: { url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=enes&backgroundColor=b6e3f4&accessories=kurt&clothingGraphic=skull&eyes=happy&eyebrows=defaultNatural&mouth=smile&skinColor=light&hair=short&hairColor=black' },
    name: 'Enes Ceylan',
    title: 'Computer Engineer',
    summary: 'Software engineer with experience in mobile and web development, focusing on creating innovative solutions.',
    companyUniversity: 'Incursor Technology',
    linkedinLink: 'https://linkedin.com/in/enes-ceylan-5845b0147/',
    email: 'enesceylan.6699@gmail.com',
    phoneNumber: ''
  };

  return contactData;
};
