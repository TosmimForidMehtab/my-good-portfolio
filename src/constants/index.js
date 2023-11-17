import { univ, cb } from "../assets/images";
import { css, express, git, github, html, javascript, linkedin, mongodb, nodejs, jwt, react, redux, tailwindcss, mui, chakra, chitchat, cdesk, atm, spinv, pthfdr, wthr } from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: jwt,
        name: "JWT",
        type: "Authentication",
    },
    {
        imageUrl: chakra,
        name: "Chakra UI",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material UI",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Bachelor of Technology in Computer Science",
        company_name: "JC Bose University",
        icon: univ,
        iconBg: "#ed212150",
        date: "August 2019 - July 2023",
        points: [
            "B.Tech in Computer Science Engineering with an outstanding CGPA of 8.8.",
            "Successfully completed 12-week courses in C++, Java, and Python, mandated by the prestigious MHRD, India.",
            "Rigorous examination by MHRD certifies good knowledge in C++, Java, and Python.",
        ],
    },
    {
        title: "MERN Stack Training",
        company_name: "Coding Blocks",
        icon: cb,
        iconBg: "#f5424e60",
        date: "September 2022 - February 2023",
        points: [
            "Completed an intensive 6-month MERN (MongoDB, Express.js, React.js, Node.js) stack training program.",
            "Acquired good understanding in foundational technologies such as HTML, CSS, and JavaScript, complementing MERN stack proficiency for a well-rounded skill set in modern web development.",
            "Engaged in practical learning through assignments, fostering a hands-on approach to problem-solving and project development in the MERN stack and related technologies.",
        ],
    },
];

export const socialLinks = [
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/TosmimForidMehtab",
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/tosmimforidmehtab",
    },
];

export const projects = [
    {
        iconUrl: chitchat,
        theme: "btn-back-red",
        name: "MERN Chat App",
        description:
            "Developed a feature-rich MERN stack chat application integrating Socket.io for real-time communication, JWT for secure authentication, and leveraging Chakra UI for an intuitive and responsive user interface.",
        link: "http://letschitchat.onrender.com",
    },
    {
        iconUrl: cdesk,
        theme: "btn-back-green",
        name: "Desktop File Organizer",
        description: "A python program that automatically organizes your desktop files based on the file type and provided directory.",
        link: "https://github.com/TosmimForidMehtab/cleanDesk",
    },
    {
        iconUrl: atm,
        theme: "btn-back-blue",
        name: "Node js email automator",
        description: "Created a nodejs app that automatically replies to unread emails in your inbox.",
        link: "https://github.com/TosmimForidMehtab/Automail",
    },
    {
        iconUrl: spinv,
        theme: "btn-back-pink",
        name: "Space Invaders Game",
        description: "Created a Space Invaders game using Python and Pygame with a graphical user interface and audio.",
        link: "https://github.com/TosmimForidMehtab/SpaceInvaders",
    },
    {
        iconUrl: pthfdr,
        theme: "btn-back-black",
        name: "Path Finder",
        description: "A GUI based implementation of path-finding algorithm that finds the shortest path between two points.",
        link: "https://github.com/TosmimForidMehtab/PathFinder",
    },
    {
        iconUrl: wthr,
        theme: "btn-back-yellow",
        name: "Ineractive Weather Program",
        description: "An interactive weather program that allows users to view current weather conditions and forecast using voice.",
        link: "https://github.com/TosmimForidMehtab/WeatherAI",
    },
];
