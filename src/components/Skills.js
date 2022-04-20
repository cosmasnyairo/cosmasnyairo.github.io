import { myskills } from "../data/Data";
const Skills = () => {
  return (
    <div id="skills" className="p-10 ">
      <p className="text-2xl font-bold mb-4 text-center ">My Skills</p>
      <div className="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-5 rounded-lg">
        {myskills.map((skill) => (
          <div key={skill.id} className=" flex flex-col hover:bg-primary bg-opacity-50 p-5 justify-between rounded-xl shadow-xl hover:shadow-2xl">
            <div className="flex-1 justify-between ">
              <p className="font-bold"> {skill.skill} </p>
              {skill.tools.map((tool, index) => (
                <li key={index}> {tool}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
