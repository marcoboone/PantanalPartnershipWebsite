import Image from "next/image";
import React from "react";
import { AiOutlineRead } from "react-icons/ai";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;

  imageUrl: string;
}

export const DisplayCard: React.FC<ProjectCardProps> = ({
  description,
  imageUrl,
  title,
}) => {
  return (
    <div className=" aspect-[2/1] md:aspect-[4/1] relative shadow-md rounded-lg group hover:scale-[1.01] transition-transform duration-100 ease-in group">
      <Image
        src={imageUrl}
        layout="fill"
        objectFit="cover"
        alt="Image"
        className="rounded-lg"
      />
      <div className="absolute w-full h-full bg-black/60 backdrop-blur-sm rounded-lg "></div>
      <div className="absolute w-full h-full flex flex-col gap-2 md:gap-6 justify-center group-hover:opacity-0 transition-opacity duration-200 p-6 md:p-20 ">
        <span className="text-white lg:text-3xl block">{title}</span>
        <span className="text-white text-sm lg:text-2xl block ">
          {description}
        </span>
      </div>
      <div className="absolute w-full h-full flex  items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-6 md:p-20">
        <span className="text-white text-base lg:text-3xl block">
          Read More:
        </span>
        <Link href="/news">
          <AiOutlineRead className="text-white text-2xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};
