export type DetailsContext = {
  isOpen: boolean;
  openModal: (val: string[]) => void;
  closeModal: () => void;
  details: string[];
};

export type VideoContext = {
  isOpen: boolean;
  openModal: (val: string) => void;
  closeModal: () => void;
  videoSrc: string;
};

export type ContactData = {
  name: string;
  email: string;
  phone: string;
  msg: string;
  [key: string]: string;
};

export type WorkCard = {
  id: number;
  title: string;
  image: any;
  demo_url?: string;
  repo_url?: string;
  video_url?: string;
  skills: string[];
  type: string;
  details?: string[];
};

export type ExperienceCard = {
  from: string;
  to: string;
  title: string;
  location: string;
  description: string;
  reverse?: boolean;
};

export type Rebo = {
  id: number;
  name: string;
  html_url: string;
};
