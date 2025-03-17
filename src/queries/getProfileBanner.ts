// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

export const getProfileBanner = async (): Promise<ProfileBanner> => {
  const profileData: ProfileBanner = {
    backgroundImage: {
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80'
    },
    headline: 'Computer Engineer & Mobile Development Specialist',
    resumeLink: {
      url: '/resume.pdf'
    },
    linkedinLink: 'https://linkedin.com/in/enes-ceylan-5845b0147',
    profileSummary: 'Innovative Computer Engineer with expertise in cross-platform mobile development using Flutter and React Native. Proven track record in delivering high-performance, user-centric applications with modern tech stack including Swift, Kotlin, and emerging technologies. Passionate about clean architecture, UI/UX excellence, and implementing cutting-edge solutions. Strong background in agile methodologies and continuous integration/deployment (CI/CD). Committed to creating scalable, maintainable applications that drive business growth and user engagement.'
  };

  return profileData;
};
