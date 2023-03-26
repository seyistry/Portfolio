import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    twitter,
    mail,
    linkedin,
    githubBlack,
    python,
    photoshop,
    illustrator,
    xd,
} from "../assets";

export const contactLinks = [
    {
        id: "twitter",
        title: "twitter",
        link: "https://twitter.com/seyistry",
        icon: twitter,
        bgColor: "#f3f3f3",
    },
    {
        id: "mail",
        title: "mail",
        link: "mailto:seyistry@gmail.com",
        icon: mail,
        bgColor: "#f3f3f3",
    },
    {
        id: "linkedin",
        title: "linkedin",
        link: "https://www.linkedin.com/in/seyiegunjobi/",
        icon: linkedin,
        bgColor: "#f3f3f3",
    },
    {
        id: "github",
        title: "github",
        link: "https://github.com/seyistry",
        icon: githubBlack,
        bgColor: "#f3f3f3",
    },
];

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Design",
        icon: web,
    },
    {
        title: "Web Developer",
        icon: backend,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },

    {
        title: "Software Engineer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Adobe Photoshop",
        icon: photoshop,
    },
    {
        name: "Adobe Illustrator",
        icon: illustrator,
    },
    {
        name: "Adobe xD",
        icon: xd,
    },
];

const experiences = [
    {
        title: "Front-End Developer",
        company_name: "TOK TEK Communications",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2021 - December 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Freelance",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Current",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Seyi supported us and exceeded our expectations throughout the project, from start to finish. Not only was our experience personal and friendly, but his ability to identify and present our key messages in an imaginative and creative manner instilled a great deal of trust in us.",
        name: "Akinsoji Folasade M.",
        designation: "Vice Principal Admin",
        company: "College of Nursing Ogun State",
        image: "https://raw.githubusercontent.com/seyistry/seyistry.github.io/main/assets/img/testimonials/testimonials-1.jpg",
    },
    {
        testimonial:
            "Excellent service from a wonderful man. Anyone in need of a website or web services should contact him. I'll be using him for any additional web-based services I need!.",
        name: "Femi Olabode",
        designation: "Dev-Ops Engineer",
        company: "Federal Polytechnic Ilaro",
        image: "https://raw.githubusercontent.com/seyistry/seyistry.github.io/main/assets/img/testimonials/testimonials-2.jpg",
    },
    {
        testimonial:
            "Always willing to assist, extremely knowledgeable, consistently meets deadlines, is hardworking, and trustworthy. In my experience, no project is too difficult for Seyi, who is a rare entity who can simplify what can be a very complex industry at times. I have no reservations in recommending his services.",
        name: "Olagunju Olamide",
        designation: "Data Analyst",
        company: "APIN",
        image: "https://raw.githubusercontent.com/seyistry/seyistry.github.io/main/assets/img/testimonials/testimonials-4.jpg",
    },
];

const projects = [
    {
        name: "Mobile E-commerce App",
        description:
            "Mobile app is a React Native app for iOS and Android for E-commerce App.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "react native",
                color: "green-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
        ],
        image: "https://raw.githubusercontent.com/seyistry/seyistry.github.io/main/assets/img/portfolio/ramni-details-1.jpg",
        source_code_link: "https://github.com/seyistry/mobile-ecommerce",
    },
    {
        name: "Sim Lit Web App ",
        description:
            "A custom tool for analyzing patient records stored in an internal filestore.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Material UI",
                color: "green-text-gradient",
            },
        ],
        image: "https://raw.githubusercontent.com/seyistry/seyistry.github.io/main/assets/img/portfolio/simlit-details-3.jpg",
        source_code_link: "https://github.com/seyistry/sim-lit",
    },
    {
        name: "MegaBus",
        description:
            "Mobile bus application is a React Native app for iOS and Android for BRT transportation.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "react styled sheet",
                color: "pink-text-gradient",
            },
        ],
        image: "https://raw.githubusercontent.com/seyistry/seyistry.github.io/main/assets/img/portfolio/megabus-details-3.jpg",
        source_code_link: "https://github.com/seyistry/MegaBus",
    },
    {
        name: "Datamellon Web App",
        description: "A web application that analyzes previous year's sales.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "react-google-charts",
                color: "pink-text-gradient",
            },
        ],
        image: "https://raw.githubusercontent.com/seyistry/seyistry.github.io/main/assets/img/portfolio/datamellon-details-2.jpg",
        source_code_link: "https://github.com/seyistry/sky-high",
    },
];

export { services, technologies, experiences, testimonials, projects };
