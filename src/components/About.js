import { FaEnvelope, FaPaperclip } from "react-icons/fa";
import { mylinks } from "../data/Data";

const About = () => {
  return (
    <div id="about" className="p-10 ">
      <p className="text-2xl font-bold mb-4 text-center">About Me </p>
      <div className="flex flex-col lg:flex-row gap-10 p-10 m-auto sm:w-4/5 h-full items-center justify-center rounded-lg hover:shadow-2xl shadow-md ">
        <img
          className="lg:w-72 lg:h-72 rounded-full bg-green-600 h-36 w-36 ring-4 ring-primary object-cover"
          src={require("../images/profile.jpg").default}
          alt="Profile"
        ></img>
        <div className=" grid grid-flow-row lg:gap-10 gap-5 justify-between ">
          <div>
            <p className="text-2xl lg:text-3xl font-semibold lg:text-left text-center  ">
              Cosmas Nyairo
            </p>
            <p className="lg:text-left text-center ">
            Software Engineer | DevOps Engineer
            </p>
          </div>

          <div className="flex sm:flex-row flex-col justify-evenly sm:items-start items-center lg:justify-start gap-5  ">
            <a
              href={require("../docs/Resume.pdf").default}
              target="blank"
              className="hover:bg-primary border border-primary gap-2 p-2 rounded inline-flex  items-center"
            >
              <FaPaperclip />
              <p>My Resume</p>
            </a>
            <a
              href="mailto:nyaircosmas@gmail.com"
              target="blank"
              className="bg-primary gap-2 p-2 rounded inline-flex items-center"
            >
              <FaEnvelope />
              <p>Contact me</p>
            </a>
          </div>
          <div className="gap-5 justify-center lg:justify-start flex">
            {mylinks.map((link, index) => (
              <a key={index} href={link.url} target="blank">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
