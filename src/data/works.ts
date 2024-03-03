import unimack from "@/assets/images/works/unimack.png";
import nplanet from "@/assets/images/works/nplanet.png";
import talmeeh from "@/assets/images/works/talmeeh.png";
import fakebookImg from "@/assets/images/works/fakebook.png";
import ecommerceImg from "@/assets/images/works/ecommerce.png";
import moviesImg from "@/assets/images/works/movies.png";
import crudImg from "@/assets/images/works/crud.png";
import resturantImg from "@/assets/images/works/resturant.png";
import ziadWorldImg from "@/assets/images/works/ziadWorld.png";
import dashboardImg from "@/assets/images/works/dashboard.png";
import reactTodoImg from "@/assets/images/works/todoReact.png";
import quizImg from "@/assets/images/works/quiz.png";
import galleryImg from "@/assets/images/works/gallery.png";
import jsTodoImg from "@/assets/images/works/todoJs.png";
import template3Img from "@/assets/images/works/templateThree.png";
import randomKeyImg from "@/assets/images/works/randomKeyGen.png";
import sliderImg from "@/assets/images/works/slider.png";
import template2Img from "@/assets/images/works/templateTwo.png";
import eventImg from "@/assets/images/works/celebration.png";
import flexGalleryImg from "@/assets/images/works/flexGallery.png";
import currencyConverterImg from "@/assets/images/works/currencyConverter.png";
import pallateColorImg from "@/assets/images/works/pallateColor.png";

export const myWorks = [
  {
    id: 1,
    title: "Nplanet Official",
    image: nplanet,
    video_url: "https://www.youtube.com/watch?v=2XtpSmDYc5g&t=52s",
    skills: ["Next", "Bootstrap", "MUI", "Sass", "Swiper"],
    type: "next",
    details: [`Developed the Official Website for NPlanet.`],
  },
  {
    id: 2,
    title: "Talmeeh",
    image: talmeeh,
    demo_url: "https://talmee7.nplanet.org",
    video_url: "https://www.youtube.com/watch?v=NvtrAt7jdZ0&t=3s",
    skills: [
      "Next",
      "Bootstrap",
      "MUI",
      "Sass",
      "Redux Toolkit",
      "Saga",
      "Formik",
    ],
    type: "next",
    details: [
      `Collaborated with a dynamic team to develop and maintain the frontend of an education website using Next.js.`,
      `Implemented responsive and interactive user interfaces using, Sass, Bootstrap, and Material-UI to ensure a seamless user experience through thoughtful design and styling of components.`,
      `Integrated Redux Toolkit with Redux Saga middleware for state management and asynchronous API requests.`,
      `Gained valuable experience working collaboratively in a team environment`,
    ],
  },
  {
    id: 3,
    title: "Unimack",
    image: unimack,
    demo_url: "https://unimackpharma.vercel.app",
    video_url: "https://www.youtube.com/watch?v=5iVHMC7vqPg&t=4s",
    skills: ["Next", "Tailwind", "Email.js", "AOS", "Swiper"],
    type: "next",
    details: [
      `Developed a Unimackpharma website using Tailwind and Next.js`,
      `Implementing Higher Order Components for enhanced functionality and maintain the scalability.`,
    ],
  },
  {
    id: 4,
    title: "Fakebook Website",
    image: fakebookImg,
    repo_url: "https://github.com/ziad-ahmed22/Fakebook",
    demo_url: "https://ziad-ahmed22.github.io/Fakebook/",
    skills: [
      "React",
      "Sass",
      "Bootstrap",
      "MUI",
      "Redux Toolkit",
      "Redux Saga",
    ],
    type: "react",
    details: [`This project is still under development`],
  },
  {
    id: 5,
    title: "E-Commerce Website",
    image: ecommerceImg,
    repo_url: "https://github.com/ziad-ahmed22/E-Commerce-React-App",
    demo_url: "https://ziad-ahmed22.github.io/E-Commerce-React-App/",
    skills: ["React", "Css", "React Bootstrap", "Redux Toolkit", "RTK Query"],
    type: "react",
    details: [
      `E-Commerce application is built on a tech stack to deliver a seamless and visually appealing user experience. Leveraging React, the single-page architecture ensures a swift and dynamic interface, complemented by reusable components for consistency throughout the app. Redux Toolkit takes charge of state management, guaranteeing a smooth flow of data. RTK Query is employed for intelligent data caching, optimizing performance and minimizing load times. The responsive and user-friendly design is achieved through Bootstrap.`,
    ],
  },
  {
    id: 6,
    title: "Movies Website",
    image: moviesImg,
    repo_url: "https://github.com/ziad-ahmed22/Movies-React-App",
    demo_url: "https://ziad-ahmed22.github.io/Movies-React-App/",
    skills: ["React", "Css", "React Bootstrap", "Redux Toolkit", "Redux Thunk"],
    type: "react",
    details: [
      `Movies App, using React for reusable components and a sophisticated single-page architecture. Redux Toolkit ensures a seamless state management, providing a responsive and dynamic interface for an movie exploration. Bootstrap brings elegance to the UI, ensuring a visually appealing experience on various devices.`,
      `Powering the app's data requests is Thunk middleware with Axios, offering a streamlined approach to handling asynchronous operations. Uniquely, higher-order components are seamlessly integrated – one enhancing the Swiper feature for a captivating movie carousel and another dedicated to managing loading and error states during data fetching.`,
    ],
  },
  {
    id: 7,
    title: "Resturant Website",
    image: resturantImg,
    repo_url: "https://github.com/ziad-ahmed22/Restaurantly",
    demo_url: "https://ziad-ahmed22.github.io/Restaurantly/",
    skills: ["Html", "Css", "Javascript", "Bootstrap"],
    type: "js",
    details: [
      `Javascript based restaurant website including slider, awesome gallery by slider and animations.`,
    ],
  },
  {
    id: 8,
    title: "Ziad World Website",
    image: ziadWorldImg,
    repo_url: "https://github.com/ziad-ahmed22/Template-Four-Html-Css-JS",
    demo_url: "https://ziad-ahmed22.github.io/Template-Four-Html-Css-JS/",
    skills: ["Html", "Css", "Javascript"],
    type: "js",
    details: [
      `Javascript based world website including awesome navbar, scrollbar, progress bar, animations and a countdown timer.
    `,
    ],
  },
  {
    id: 9,
    title: "CURD React App",
    image: crudImg,
    repo_url: "https://github.com/ziad-ahmed22/Products-React-App",
    demo_url:
      "https://www.linkedin.com/posts/ziad-ahmed22_reactjs-activity-7068935273115451395-r4Mj/?utm_source=share&utm_medium=member_desktop",
    skills: ["React", "Css", "Bootstrap"],
    type: "react",
    details: [
      `Implements basic CURD operations by adding, editing and deleting products from API and displaying them on a page.`,
    ],
  },
  {
    id: 10,
    title: "Dashboard",
    image: dashboardImg,
    repo_url: "https://github.com/ziad-ahmed22/Dashboard-Html-Css",
    demo_url: "https://ziad-ahmed22.github.io/Dashboard-Html-Css/",
    skills: ["Html", "Css"],
    type: "html",
    details: [
      `Responsive Dashboard website containing 8 page with animations.`,
    ],
  },
  {
    id: 11,
    title: "React Todo App",
    image: reactTodoImg,
    repo_url: "https://github.com/ziad-ahmed22/Todo-React-App",
    demo_url: "https://ziad-ahmed22.github.io/Todo-React-App/",
    skills: ["React", "Css"],
    type: "react",
    details: [
      `Allow users to add tasks with data and time information.`,
      `Filtering them by status (active or finished).`,
      `Save tasks to local storage to display them when the user open the app.`,
    ],
  },
  {
    id: 12,
    title: "Js Quiz App",
    image: quizImg,
    repo_url: "https://github.com/ziad-ahmed22/Quiz-App",
    demo_url: "https://ziad-ahmed22.github.io/Quiz-App/",
    skills: ["Html", "Css", "Javascript"],
    type: "js",
    details: [
      `JS Quiz App, a dynamic web application skillfully developed using HTML, CSS, and JavaScript. This quiz application provides an immersive experience, fetching diverse questions from an API.
    `,
    ],
  },
  {
    id: 13,
    title: "Gallery With Slider",
    image: galleryImg,
    repo_url: "https://github.com/ziad-ahmed22/Awsome-Gallery-With-Slider",
    demo_url: "https://ziad-ahmed22.github.io/Awsome-Gallery-With-Slider/",
    skills: ["Html", "Css", "Javascript"],
    type: "js",
    details: [`Awesome Gallery with Slider.`],
  },
  {
    id: 14,
    title: "Js Todo App",
    image: jsTodoImg,
    repo_url: "https://github.com/ziad-ahmed22/To-Do-Task-Js",
    demo_url: "https://ziad-ahmed22.github.io/To-Do-Task-Js/",
    skills: ["Html", "Css", "Javascript"],
    type: "js",
  },
  {
    id: 15,
    title: "Template Three",
    image: template3Img,
    repo_url: "https://github.com/ziad-ahmed22/Template-Three-Html-Css",
    demo_url: "https://ziad-ahmed22.github.io/Template-Three-Html-Css/",
    skills: ["Html", "Css"],
    type: "html",
  },
  {
    id: 16,
    title: "Random Key Generator",
    image: randomKeyImg,
    repo_url: "https://github.com/ziad-ahmed22/Random-Key-Generator",
    demo_url: "https://ziad-ahmed22.github.io/Random-Key-Generator/",
    skills: ["Html", "Css", "Javascript"],
    type: "js",
    details: [
      `Generate a random key in range of 6 to 22 char.`,
      `Including Numbers, Symbols, Capital and Small Letters or some of them.`,
      `Copy the random key generated by click on the div.`,
      `If no chosen checkbox? Will generate capital letters.`,
    ],
  },
  {
    id: 17,
    title: "Images Slider",
    image: sliderImg,
    repo_url: "https://github.com/ziad-ahmed22/Image-Slider",
    demo_url: "https://ziad-ahmed22.github.io/Image-Slider/",
    skills: ["Html", "Css", "Javascript"],
    type: "js",
    details: [`Responsive Image Slider with control buttons.`],
  },
  {
    id: 18,
    title: "Template Two",
    image: template2Img,
    repo_url: "https://github.com/ziad-ahmed22/Template-Two-Html-Css",
    demo_url: "https://ziad-ahmed22.github.io/Template-Two-Html-Css/",
    skills: ["Html", "Css"],
    type: "html",
  },
  {
    id: 19,
    title: "Event Comming Page",
    image: eventImg,
    repo_url: "https://github.com/ziad-ahmed22/Count-Down-Timer",
    demo_url: "https://ziad-ahmed22.github.io/Count-Down-Timer/",
    skills: ["Html", "Css", "Javascript"],
    type: "js",
    details: [`count down timer with an awesome background image.`],
  },
  {
    id: 20,
    title: "Flex Gallery",
    image: flexGalleryImg,
    repo_url: "https://github.com/ziad-ahmed22/Flex-Gallery",
    demo_url: "https://ziad-ahmed22.github.io/Flex-Gallery/",
    skills: ["Html", "Css", "Javascript"],
    type: "js",
  },
  {
    id: 21,
    title: "Currency Converter",
    image: currencyConverterImg,
    repo_url: "https://github.com/ziad-ahmed22/Currency-Converter",
    demo_url: "https://ziad-ahmed22.github.io/Currency-Converter/",
    skills: ["Html", "Css", "Javascript", "API"],
    type: "js",
  },
  {
    id: 22,
    title: "Random Pallate Color",
    image: pallateColorImg,
    repo_url: "https://github.com/ziad-ahmed22/Random-Pallate-Color",
    demo_url: "https://ziad-ahmed22.github.io/Random-Pallate-Color/",
    skills: ["Html", "Css", "Javascript"],
    type: "js",
  },
];
