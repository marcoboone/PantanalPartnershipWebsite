import Image from "next/image";
import ProjectSectionA from "../components/ProjectSectionA";
import ProjectSectionB from "../components/ProjectSectionB";

const Projects = () => {
  return (
    <>
      <div className="relative w-full h-[40vh] mt-[8vh]">
        <Image
          src="/Images/heroImage.JPG"
          layout="fill"
          objectFit="cover"
          alt="Image"
        ></Image>
        <div className="absolute w-full h-[40vh] bg-black/60 backdrop-blur-sm"></div>
        <div className="absolute w-full h-[40vh] squeezetainer flex items-center justify-center">
          <h1 className="text-white text-2xl lg:text-6xl font-semibold">
            PROJECTS
          </h1>
        </div>
      </div>

      <ProjectSectionA
        title="Clean Burning Incinerator, Solar Oven, Solar Installation"
        description="This year we focused on addressing the open-burn habits of residents in the Pantanal by designing and constructing an incinerator to prevent the release of harmful particulates into the air.
        We also continued work on solar ovens as a way to cook and bake over long periods of time without using wood-burning stoves.
        Lastly, we installed a small photovoltaic system on the school building in the indigenous Kalapalo community of Paraíso in the Xingu National Park."
        team="​SUBTEAM: TECHNICAL"
        date="2018-2019"
        image="/Images/aboutUsImage.JPG"
      ></ProjectSectionA>

      <ProjectSectionB
        title="Zeer Pot"
        description="We were focusing on alternative low-energy refrigeration in the Pantanal through the use of Zeer pots, which use evaporation as a way to cool nested clay pots that can contain fruits, vegetables, drinks, etc."
        team="​SUBTEAM: TECHNICAL"
        date="2017-2018"
        image="/Images/aboutUsImage.JPG"
      ></ProjectSectionB>

      <ProjectSectionA
        title="Water Height Measurement"
        description="The research team designed and implemented a water height measuring system. This is the first system like this installed in the area, and will provide river height information for scientists and others in the area to utilize."
        team="​SUBTEAM: RESEARCH"
        date="2017-2018"
        image="/Images/aboutUsImage.JPG"
      ></ProjectSectionA>

      <ProjectSectionB
        title="Solar System"
        description="We installed four large solar panels on the roof of a teacher's home, along with two switches, two light sockets, and an outlet in Perigara, MT. School classes were being held for the children in the community here while the school was reopening."
        team="​SUBTEAM: SOLAR"
        date="​2016-2017 "
        image="/Images/aboutUsImage.JPG"
      ></ProjectSectionB>

      <ProjectSectionA
        title="Solar Rechargeable Lanterns"
        description="These projects focused on lighting in the Pantanal. In 2015, we constructed solar battery chargers using 1.5 Watt solar panels and AA battery holders. We first constructed our own lanterns using mason jars, but decided the following year that pre-constructed lanterns provided better lighting."
        team="​SUBTEAM: SOLAR"
        date="2015"
        image="/Images/aboutUsImage.JPG"
      ></ProjectSectionA>

      <ProjectSectionB
        title="Solar-Powered Refrigerator"
        description="In 2015-2016, the team designed a PV system to power a large refrigerator for a home in the Pantanal. We used two 12V batteries, an inverter, a charge controller, and two large solar panels."
        team="​SUBTEAM: SOLAR"
        date="​2015-2016 "
        image="/Images/aboutUsImage.JPG"
      ></ProjectSectionB>
    </>
  );
};

export default Projects;
