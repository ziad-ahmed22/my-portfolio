import { WorkCardType } from "@/types/types";

import unimack from "@/assets/images/works/frontend/unimack.png";
import nplanet from "@/assets/images/works/frontend/nplanet.png";
import talmeeh from "@/assets/images/works/frontend/talmeeh.png";
import ecommerceImg from "@/assets/images/works/frontend/ecommerce.png";
import moviesImg from "@/assets/images/works/frontend/movies.png";
import resturantImg from "@/assets/images/works/frontend/resturant.png";
import ziadWorldImg from "@/assets/images/works/frontend/ziadWorld.png";
import dashboardImg from "@/assets/images/works/frontend/dashboard.png";
import quizImg from "@/assets/images/works/frontend/quiz.png";
import galleryImg from "@/assets/images/works/frontend/gallery.png";
import template3Img from "@/assets/images/works/frontend/templateThree.png";
import sliderImg from "@/assets/images/works/frontend/slider.png";
import template2Img from "@/assets/images/works/frontend/templateTwo.png";
import eventImg from "@/assets/images/works/frontend/celebration.png";

const frontend: WorkCardType[] = [
  {
    id: "f15",
    title: "Nplanet Official",
    image: nplanet,
    type: "frontend",
    skills: ["Next", "Bootstrap", "MUI", "Sass", "Swiper"],
    video_url: "https://www.youtube.com/watch?v=2XtpSmDYc5g&t=52s",
    details: [`Developed the Official Website for NPlanet.`],
  },
  {
    id: "f13",
    title: "Talmeeh",
    image: talmeeh,
    type: "frontend",
    skills: [
      "Next",
      "Bootstrap",
      "MUI",
      "Sass",
      "Redux Toolkit",
      "Saga",
      "Formik",
    ],
    video_url: "https://www.youtube.com/watch?v=NvtrAt7jdZ0&t=3s",
    details: [
      `Collaborated with a dynamic team to develop and maintain the frontend of an education website using Next.js.`,
      `Implemented responsive and interactive user interfaces using, Sass, Bootstrap, and Material-UI to ensure a seamless user experience through thoughtful design and styling of components.`,
      `Integrated Redux Toolkit with Redux Saga middleware for state management and asynchronous API requests.`,
      `Gained valuable experience working collaboratively in a team environment`,
    ],
  },
  {
    id: "f12",
    title: "Unimack",
    image: unimack,
    type: "frontend",
    skills: ["Next", "Tailwind", "Email.js", "AOS", "Swiper"],
    demo_url: "https://unimackpharma.vercel.app",
    video_url: "https://www.youtube.com/watch?v=5iVHMC7vqPg&t=4s",
    details: [
      `Developed a Unimackpharma website using Tailwind and Next.js`,
      `Implementing Higher Order Components for enhanced functionality and maintain the scalability.`,
    ],
  },
  {
    id: "f11",
    title: "E-Commerce Website",
    image: ecommerceImg,
    type: "frontend",
    skills: ["React", "Css", "React Bootstrap", "Redux Toolkit", "RTK Query"],
    repo_url: "https://github.com/ziad-ahmed22/E-Commerce-React-App",
    demo_url: "https://ziad-ahmed22.github.io/E-Commerce-React-App/",
    details: [
      `E-Commerce application is built on a tech stack to deliver a seamless and visually appealing user experience. Leveraging React, the single-page architecture ensures a swift and dynamic interface, complemented by reusable components for consistency throughout the app. Redux Toolkit takes charge of state management, guaranteeing a smooth flow of data. RTK Query is employed for intelligent data caching, optimizing performance and minimizing load times. The responsive and user-friendly design is achieved through Bootstrap.`,
    ],
  },
  {
    id: "f10",
    title: "Movies Website",
    image: moviesImg,
    type: "frontend",
    skills: ["React", "Css", "React Bootstrap", "Redux Toolkit", "Redux Thunk"],
    repo_url: "https://github.com/ziad-ahmed22/Movies-React-App",
    demo_url: "https://ziad-ahmed22.github.io/Movies-React-App/",
    details: [
      `Movies App, using React for reusable components and a sophisticated single-page architecture. Redux Toolkit ensures a seamless state management, providing a responsive and dynamic interface for an movie exploration. Bootstrap brings elegance to the UI, ensuring a visually appealing experience on various devices.`,
      `Powering the app's data requests is Thunk middleware with Axios, offering a streamlined approach to handling asynchronous operations. Uniquely, higher-order components are seamlessly integrated – one enhancing the Swiper feature for a captivating movie carousel and another dedicated to managing loading and error states during data fetching.`,
    ],
  },
  {
    id: "f9",
    title: "Resturant Website",
    image: resturantImg,
    type: "frontend",
    skills: ["Html", "Css", "Javascript", "Bootstrap"],
    repo_url: "https://github.com/ziad-ahmed22/Restaurantly",
    demo_url: "https://ziad-ahmed22.github.io/Restaurantly/",
    details: [
      `Javascript based restaurant website including slider, awesome gallery by slider and animations.`,
    ],
  },
  {
    id: "f8",
    title: "Ziad World Website",
    image: ziadWorldImg,
    type: "frontend",
    skills: ["Html", "Css", "Javascript"],
    repo_url: "https://github.com/ziad-ahmed22/Template-Four-Html-Css-JS",
    demo_url: "https://ziad-ahmed22.github.io/Template-Four-Html-Css-JS/",
    details: [
      `Javascript based world website including awesome navbar, scrollbar, progress bar, animations and a countdown timer.
    `,
    ],
  },
  {
    id: "f7",
    title: "Dashboard",
    image: dashboardImg,
    type: "frontend",
    skills: ["Html", "Css"],
    repo_url: "https://github.com/ziad-ahmed22/Dashboard-Html-Css",
    demo_url: "https://ziad-ahmed22.github.io/Dashboard-Html-Css/",
    details: [
      `Responsive Dashboard website containing 8 page with animations.`,
    ],
  },
  {
    id: "f6",
    title: "Js Quiz App",
    image: quizImg,
    type: "frontend",
    skills: ["Html", "Css", "Javascript"],
    repo_url: "https://github.com/ziad-ahmed22/Quiz-App",
    demo_url: "https://ziad-ahmed22.github.io/Quiz-App/",
    details: [
      `JS Quiz App, a dynamic web application skillfully developed using HTML, CSS, and JavaScript. This quiz application provides an immersive experience, fetching diverse questions from an API.
    `,
    ],
  },
  {
    id: "f5",
    title: "Gallery With Slider",
    image: galleryImg,
    type: "frontend",
    skills: ["Html", "Css", "Javascript"],
    repo_url: "https://github.com/ziad-ahmed22/Awsome-Gallery-With-Slider",
    demo_url: "https://ziad-ahmed22.github.io/Awsome-Gallery-With-Slider/",
    details: [`Awesome Gallery with Slider.`],
  },
  {
    id: "f4",
    title: "Template Three",
    image: template3Img,
    type: "frontend",
    skills: ["Html", "Css"],
    repo_url: "https://github.com/ziad-ahmed22/Template-Three-Html-Css",
    demo_url: "https://ziad-ahmed22.github.io/Template-Three-Html-Css/",
  },
  {
    id: "f3",
    title: "Images Slider",
    image: sliderImg,
    type: "frontend",
    skills: ["Html", "Css", "Javascript"],
    repo_url: "https://github.com/ziad-ahmed22/Image-Slider",
    demo_url: "https://ziad-ahmed22.github.io/Image-Slider/",
    details: [`Responsive Image Slider with control buttons.`],
  },
  {
    id: "f2",
    title: "Template Two",
    image: template2Img,
    type: "frontend",
    skills: ["Html", "Css"],
    repo_url: "https://github.com/ziad-ahmed22/Template-Two-Html-Css",
    demo_url: "https://ziad-ahmed22.github.io/Template-Two-Html-Css/",
  },
  {
    id: "f1",
    title: "Event Comming Page",
    image: eventImg,
    type: "frontend",
    skills: ["Html", "Css", "Javascript"],
    repo_url: "https://github.com/ziad-ahmed22/Count-Down-Timer",
    demo_url: "https://ziad-ahmed22.github.io/Count-Down-Timer/",
    details: [`count down timer with an awesome background image.`],
  },
];

const backend: WorkCardType[] = []

const mobile: WorkCardType[] = []

export const myWorks = [...frontend, ...backend, ...mobile]
