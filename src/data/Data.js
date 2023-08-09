import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaResearchgate,

} from "react-icons/fa";

export const mylinks = [
  {
    icon: <FaGithub className=" text-primary h-8 w-8" />,
    url: "https://github.com/cosmasnyairo",
  },
  {
    icon: <FaLinkedin className=" text-primary h-8 w-8" />,
    url: "https://www.linkedin.com/in/cosmasnyairo",
  },
  {
    icon: <FaMedium className=" text-primary h-8 w-8" />,
    url: "https://cosmasnyairo.medium.com/",
  },
  {
    icon: <FaResearchgate className=" text-primary h-8 w-8" />,
    url: "https://www.researchgate.net/profile/Cosmas-Nyairo",
  },

  {
    icon: <FaDev className=" text-primary h-8 w-8" />,
    url: "https://dev.to/cosmasnyairo",
  },
];

export const myskills = [
  {
    id: 1,
    skill: "Software Development",
    tools: ["Python", "Java", "C++", "Git", "Golang"],
  },
  {
    id: 2,
    skill: "Cloud & Container/Orchestration",
    tools: ["AWS", "Kubernetes", "Docker"],
  },
  {
    id: 3,
    skill: "Infrastructure as Code",
    tools: ["Terraform", "Cloudformation"],
  },
  {
    id: 4,
    skill: "𝐂𝐈/𝐂𝐃:",
    tools: ["GitLab CI","Jenkins"],
  },
  {
    id: 5,
    skill: "Web Development",
    tools: ["Javascript", "React Js", "Python (Flask)", "Css", "Html"],
  },
  {
    id: 6,
    skill: "Mobile Development",
    tools: ["Java", "Flutter"],
  },
];

export const myprojects = [
  {
    imageurl: require("../images/faidaestate.png").default,
    title: "Automated Estate Services Management System",
    description:
      "A web based application designed to assist residents and the management committee in their operations within a residential estate",
    githuburl: "https://github.com/cosmasnyairo/FaidaEstate",
  },
  {
    imageurl: require("../images/blockchainehr.png").default,
    title: "Electronic Health Records using Blockchain",
    description:
      "Blockchain electronic health records storage to improve health record access, sharing and security in Kenyan public hospitals.",
    githuburl: "https://github.com/cosmasnyairo/Blockchain-EHR",
  },
  {
    imageurl: require("../images/tembeakenya.png").default,
    title: "Tembea Kenya",
    description:
      "Application that enables users to explore places to visit in Kenya under various categories",
    githuburl: "https://github.com/cosmasnyairo/tembeakenya",
    playstoreurl:
      "https://play.google.com/store/apps/details?id=com.tembeakenya.tembea_kenya",
  },

  {
    imageurl: require("../images/bisco.png").default,
    title: "Bisco",
    description:
      "Bicycle-sharing application that will allow users to ride bikes for a limited period of time.",
    githuburl: "https://github.com/poppinjay13/Bisco",
  },
  {
    imageurl: require("../images/shopapp.jpg").default,
    title: "Ecommerce App",
    description:
      "Shop App made using Flutter that allows users to view products, add them to the cart, view their orders and also allows them to add, edit and update products      ",
    githuburl: "https://github.com/cosmasnyairo/shop_app",
  },
  {
    imageurl: require("../images/jumia.png").default,
    title: "Jumia Webscrapping",
    description:
      "Webscrapping the first three pages of ecommerce site using beautiful soup and returning data into a csv file ",
    githuburl: "https://github.com/cosmasnyairo/jumia-page-webscrapping",
  },
];

export const myarticles = [
  {
    title: "Creating & Managing Aws Rest Api Gateway Using Terraform",
    subtitle: "BlogPost",
    date: "9 January 2023",
    description:
      "Creating and managing an AWS rest api gateway using terraform",
    researchgateurl:
      "https://dev.to/cosmasnyairo/aws-rest-api-gateway-using-terraform-k76",
  },
  {
    title: "Automated Estate Services Management System",
    subtitle: "ICT 2019 - 17th ICT Conference",
    date: "22nd March 2019",
    description:
      "A Research paper on the estate management system that aims to assist residents and the management committee in their operations within residential estates",
    researchgateurl:
      "https://www.researchgate.net/publication/350591375_Automated_Estate_Services_Management_System",
  },
  {
    title: "Tembea Kenya",
    date: "5th March 2020",
    description:
      "A Medium article documenting the development of the Tembea Kenya Application that enables users to explore places to visit in Kenya under various categories",
    mediumurl:
      "https://cosmasnyairo.medium.com/making-a-places-to-visit-app-using-python-and-flutter-prerequisites-b1449c100ae8",
  },
];
