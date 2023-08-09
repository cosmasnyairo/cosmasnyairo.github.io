import { FaGithub, FaGooglePlay } from "react-icons/fa";

import { myprojects } from "../data/Data";

const Projects = () => {
  return (
    <div id="projects" className="p-10">
      <p className="text-2xl font-bold mb-4 text-center ">
        Projects ({myprojects.length})
      </p>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-lg">
        {myprojects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col h-full w-full rounded-lg shadow-xl hover:shadow-2xl justify-between "
          >
            <img
              className="rounded-t-lg object-cover h-48"
              src={project.imageurl}
              alt="Profile"
            ></img>

            <div className="flex flex-col justify-between m-5 h-1/2 ">
              <p className="text-lg font-semibold ">{project.title}</p>
              <p className="mb-5">{project.description}</p>

              <div className="gap-5 flex-col sm:flex-row inline-flex items-start ">
                {project.githuburl !== undefined && (
                  <a
                    href={project.githuburl}
                    target="blank"
                    className="p-2 gap-2 rounded inline-flex justify-center items-center hover:bg-primary"
                  >
                    <FaGithub className=" w-6 h-6 animate-bounce" />
                    Github
                  </a>
                )}
                {project.playstoreurl !== undefined && (
                  <a
                    href={project.playstoreurl}
                    target="blank"
                    className="p-2 gap-2 rounded inline-flex justify-center items-center hover:bg-primary"
                  >
                    <FaGooglePlay className="  w-6 h-6 animate-bounce" />
                    Playstore
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
