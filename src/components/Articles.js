import { myarticles } from "../data/Data";

import { FaMedium, FaResearchgate } from "react-icons/fa";

const Articles = () => {
  return (
    <div id="articles" className="p-10 ">
      <p className="text-2xl font-bold mb-4 text-center ">
        Articles ({myarticles.length})
      </p>

      <div className="grid grid-cols-1 gap-8 rounded-lg">
        {myarticles.map((article,index) => (
          <div key={index} className="flex flex-col justify-between gap-4 p-5 rounded-md shadow-lg hover:shadow-2xl">
            <div className="inline-flex gap-5 items-center justify-between">
              <p className="text-xl font-bold ">{article.title}</p>
              <p className="italic ">{article.date}</p>
            </div>
            <p className="font-semibold">{article.subtitle}</p>
            <p>{article.description}</p>

            <div className=" inline-flex gap-5">
              {article.researchgateurl !== undefined && (
                <a
                  href={article.researchgateurl}
                  target="blank"
                  className="p-2 gap-2 rounded inline-flex justify-center items-center hover:bg-primary"
                >
                  <FaResearchgate className=" w-6 h-6 rounded-lg  animate-bounce" />
                  Research gate
                </a>
              )}

              {article.mediumurl !== undefined && (
                <a
                  href={article.mediumurl}
                  target="blank"
                  className="p-2 gap-2 rounded inline-flex justify-center items-center hover:bg-primary"
                >
                  <FaMedium className=" w-6 h-6 rounded-lg animate-bounce" />
                  Medium
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
