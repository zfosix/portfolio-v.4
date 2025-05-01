interface CareerCardProps {
    career: {
      id: number;
      company: string;
      position: string;
      location: string;
      startDate: string;
      endDate: string;
      duration: string;
      logo: string;
      gradientColors: string;
    };
    isDarkMode: boolean;
  }
  
  interface CareerSectionProps {
    isDarkMode: boolean;
  }

export type { CareerCardProps, CareerSectionProps };