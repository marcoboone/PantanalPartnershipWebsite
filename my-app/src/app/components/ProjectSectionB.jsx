import React from "react";
import Image from "next/image";

const ProjectSectionB = ({ title, description, team, date, image }) => {
  return (
    <div className="squeezetainer py-[10vh] bg-slate-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-12">
        <div className="col-span-1 aspect-video relative shadow-md">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt="Image"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 col-span-1 justify-center">
          <span className="text-sm text-blue-500">{team}</span>
          <h2 className="text-3xl lg:text-4xl font-semibold">{title}</h2>
          <p className="text-lg lg:text-xl">{description}</p>
          <span className="text-base font-semibold">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSectionB;
