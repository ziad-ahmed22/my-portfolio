export type DetailsContextType = {
  isOpen: boolean;
  openModal: (val: string[]) => void;
  closeModal: () => void;
  details: string[];
};

export type VideoContextType = {
  isOpen: boolean;
  openModal: (val: string) => void;
  closeModal: () => void;
  videoSrc: string;
};

export type ContactDataType = {
  name: string;
  email: string;
  phone: string;
  msg: string;
  [key: string]: string;
};

export type WorkCardType = {
  id: string;
  title: string;
  image: any;
  type: "frontend" | "backend" | "mobile";
  skills: string[];
  demo_url?: string;
  repo_url?: string;
  video_url?: string;
  details?: string[];
};

export type ExperienceCardType = {
  from: string;
  to: string;
  title: string;
  location: string;
  description: string;
  reverse?: boolean;
};

export type ReboType = {
  id: number;
  name: string;
  html_url: string;
};
