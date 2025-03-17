// queries/getTimeline.ts
import { TimelineItem } from '../types';

export const getTimeline = async (): Promise<TimelineItem[]> => {
  const timelineData: TimelineItem[] = [
    {
      timelineType: 'work',
      name: 'Incursor Technology',
      title: 'Mobile Development Specialist',
      techStack: 'Flutter, Dart, React Native, REST APIs, Firebase',
      summaryPoints: [
        'Leading the development of a comprehensive health tourism mobile application using Flutter',
        'Implemented real-time chat features and appointment scheduling system using Firebase',
        'Optimized app performance resulting in 40% faster load times and improved user engagement',
        'Collaborated with UI/UX team to deliver intuitive and responsive user interfaces'
      ],
      dateRange: 'March 2023 - Present'
    },
    {
      timelineType: 'work',
      name: 'Başarsoft',
      title: 'Mobile Application Developer Intern',
      techStack: 'Flutter, Dart, Google Maps API, Real-time Location Services',
      summaryPoints: [
        'Developed a real-time bus tracking system using Flutter and Google Maps integration',
        'Implemented location-based services and route optimization algorithms',
        'Reduced user complaints by 60% through improved tracking accuracy',
        'Contributed to the development of core features used by thousands of daily users'
      ],
      dateRange: 'July 2021 - September 2021'
    },
    {
      timelineType: 'education',
      name: 'Amadeus C++ Bootcamp',
      title: 'Advanced Software Development Program',
      techStack: 'C++, Design Patterns, SOLID Principles, Unit Testing',
      summaryPoints: [
        'Mastered advanced C++ programming concepts and modern development practices',
        'Developed robust applications using design patterns and SOLID principles',
        'Created efficient algorithms and optimized code performance',
        'Completed multiple real-world projects with clean architecture implementation'
      ],
      dateRange: 'July 2023 - September 2023'
    },
    {
      timelineType: 'education',
      name: 'Kırıkkale University',
      title: 'Bachelor of Science in Computer Engineering',
      techStack: 'Software Engineering, Data Structures, Algorithms, Mobile Development',
      summaryPoints: [
        'Graduated with high academic achievement',
        'Specialized in mobile application development and software engineering',
        'Completed multiple team projects focusing on innovative solutions',
        'Developed strong problem-solving and analytical skills'
      ],
      dateRange: 'October 2018 - February 2023'
    },
    {
      timelineType: 'education',
      name: 'Yıldırım Beyazıt Anatolian High School',
      title: 'High School',
      techStack: '',
      summaryPoints: ['High School Education'],
      dateRange: 'September 2013 - June 2017'
    }
  ];

  return timelineData;
};
