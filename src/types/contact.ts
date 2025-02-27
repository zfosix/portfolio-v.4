// You can add this file to define shared types across components

export interface SocialCardData {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
    buttonColor: string;
    hoverColor: string;
    ringColor: string;
    bgColor: string;
    darkBgColor: string;
    borderColor: string;
    url: string;
  }
  
  export interface FormData {
    to: string;
    sendername: string;
    replyto: string;
    subject: string;
    message: string;
  }