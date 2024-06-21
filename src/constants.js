import dreamiImg from "../public/dreami.jpeg";
import logoUfpsImg from "../public/logoufps.png";
import courseraImg from "../public/coursera.webp";
import platziImg from "../public/platzi.png";
import deeplearningImg from "../public/deeplearning.png";


export const TAGS = {
    NEXT: {
        name: "Next.js",
        class: "bg-black text-white",
    },
    CREWAI: {
        name: "CrewAI",
        class: "bg-blue-500 text-white",
    },
    REACT: {
        name: "React",
        class: "bg-blue-500 text-white",
    },
    PYTHON: {
        name: "Python",
        class: "bg-yellow-500 text-black",
    },
    COMPUTER_SCIENCE: {
        name: "Computer Science",
        class: "bg-green-500 text-white",
    },
    JAVASCRIPT: {
        name: "JavaScript",
        class: "bg-yellow-500 text-black",
    },
}
export const education = [
    {
        title: "Software Engineer",
        certifiedBy: "University Francisco de Paula Santander",
        certifiedByIcon: logoUfpsImg,
        tags: [TAGS.NEXT, TAGS.COMPUTER_SCIENCE],
    },
    {
        title: "Software Design and architecture",
        certifiedBy: "Coursera (University of Alberta)",
        link: "https://www.coursera.org/account/accomplishments/certificate/E85RVDBCR2AY",
        certifiedByIcon: courseraImg,
        tags: [TAGS.COMPUTER_SCIENCE, TAGS.JAVASCRIPT],
    },
    {
        title: "Machine Learning and Big Data",
        certifiedBy: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/3QG25YQKUM7G",
        certifiedByIcon: courseraImg,
        tags: [TAGS.PYTHON],
    },
    {
        title: "React hooks patterns design and composition",
        certifiedBy: "Platzi",
        link: "https://platzi.com/p/natrv1/curso/2457-react-patrones-render/diploma/detalle/,",
        certifiedByIcon: platziImg,
        tags: [TAGS.REACT, TAGS.JAVASCRIPT],
    },
    {
        title: "Next security web  with OWASP",
        certifiedBy: "Platzi",
        link: "https://platzi.com/p/natrv1/curso/2429-nextjs-owasp/diploma/detalle/",
        certifiedByIcon: platziImg,
        tags: [TAGS.NEXT, TAGS.JAVASCRIPT],
    },
    {
        title: "Introduction to CrewAI",
        certifiedBy: "DeepLearning.ai",
        link: "https://learn.deeplearning.ai/accomplishments/879ee54f-3d8d-4828-a04d-f204b52e7e3c",
        certifiedByIcon: deeplearningImg,
        tags: [TAGS.CREWAI],
    }
]

export const volunteering = [
    {
        title: "Mentor",
        certifiedBy: "Dreami",
        link: "https://www.linkedin.com/company/dreami-io/posts/?feedView=all",
        certifiedByIcon: dreamiImg ,
        tags: [],
    }
]