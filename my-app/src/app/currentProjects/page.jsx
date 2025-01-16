import Image from "next/image";
import ProjectSectionA from "../components/ProjectSectionA";


const Projects = () => {
  return (
    <>
      <div className="relative w-full h-[40vh] mt-[8vh]">
        <Image
          src="/Images/projects.JPG"
          layout="fill"
          objectFit="cover"
          alt="Image"
        ></Image>
        <div className="absolute w-full h-[40vh] bg-black/60 backdrop-blur-sm"></div>
        <div className="absolute w-full h-[40vh] squeezetainer flex items-center justify-center">
          <h1 className="text-white text-2xl lg:text-6xl font-semibold">
            CURRENT PROJECTS
          </h1>
        </div>
      </div>

      <ProjectSectionA
        title="Eco-Incinerator"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem sint perferendis, harum suscipit assumenda accusamus quae laboriosam iste voluptatum minus iusto blanditiis pariatur commodi alias rem, at aliquid odit ad!"
        date="2018-2019"
        subteam = "Passive Refridgeration"
        image="/Images/cleanBurning.jpg"
      ></ProjectSectionA>
    </>
  );
};

export default Projects;
