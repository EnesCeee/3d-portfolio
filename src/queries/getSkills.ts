// queries/getTimeline.ts
import { Skill } from '../types';

export const getSkills = async (): Promise<Skill[]> => {
  const skillsData: Skill[] = [
    {
      name: 'Flutter',
      category: 'Mobile Development',
      description: 'Expert in building cross-platform mobile applications with Flutter SDK',
      icon: 'SiFlutter'
    },
    {
      name: 'React Native',
      category: 'Mobile Development',
      description: 'Proficient in developing native mobile apps using React Native',
      icon: 'FaReact'
    },
    {
      name: 'Swift',
      category: 'Mobile Development',
      description: 'Experience in iOS app development with Swift',
      icon: 'SiSwift'
    },
    {
      name: 'Kotlin',
      category: 'Mobile Development',
      description: 'Knowledge of Android development using Kotlin',
      icon: 'SiKotlin'
    },
    {
      name: 'Firebase',
      category: 'Backend & Cloud',
      description: 'Expertise in Firebase services for mobile and web applications',
      icon: 'SiFirebase'
    },
    {
      name: 'REST APIs',
      category: 'Backend & Cloud',
      description: 'Experience in designing and consuming RESTful APIs',
      icon: 'SiPostman'
    },
    {
      name: 'Git',
      category: 'Development Tools',
      description: 'Advanced version control and collaboration using Git',
      icon: 'FaGitAlt'
    },
    {
      name: 'CI/CD',
      category: 'Development Tools',
      description: 'Experience with continuous integration and deployment pipelines',
      icon: 'SiGithubactions'
    },
    {
      name: 'C++',
      category: 'Programming Languages',
      description: 'Strong foundation in C++ and object-oriented programming',
      icon: 'SiCplusplus'
    },
    {
      name: 'TypeScript',
      category: 'Programming Languages',
      description: 'Proficient in TypeScript for type-safe development',
      icon: 'SiTypescript'
    },
    {
      name: 'UI/UX Design',
      category: 'Design & Architecture',
      description: 'Creating intuitive and responsive user interfaces',
      icon: 'SiAdobexd'
    },
    {
      name: 'Clean Architecture',
      category: 'Design & Architecture',
      description: 'Implementing scalable and maintainable software architecture',
      icon: 'SiClean'
    },
    {
      name: 'MongoDB',
      category: 'Backend & Cloud',
      description: 'Experience in NoSQL database management and application development',
      icon: 'SiMongodb'
    },
    {
      name: 'C#',
      category: 'Programming Languages',
      description: 'Proficient in developing applications within the .NET ecosystem',
      icon: 'SiCsharp'
    },
    {
      name: 'Dart',
      category: 'Programming Languages',
      description: 'Strong experience with Dart programming for Flutter applications',
      icon: 'SiDart'
    },
    {
      name: 'Docker',
      category: 'Development Tools',
      description: 'Containerization and deployment using Docker technology',
      icon: 'SiDocker'
    },
    {
      name: 'AWS',
      category: 'Backend & Cloud',
      description: 'Cloud infrastructure management and deployment with AWS services',
      icon: 'SiAws'
    },
    {
      name: 'Next.js',
      category: 'Development Tools',
      description: 'Building performant and SEO-friendly React applications',
      icon: 'SiNextdotjs'
    }
  ];

  return skillsData;
};
