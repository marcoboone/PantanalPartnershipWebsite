import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <Image
        src="/Images/hero.JPG"
        layout="fill"
        objectFit="cover"
        alt="Image"
      ></Image>
      <div className="absolute w-full h-full bg-black/60 backdrop-blur-sm"></div>
      <div className="absolute w-full h-full squeezetainer flex items-center">
        <div className="flex flex-col gap-4 lg:w-[50%]">
          <h1 className="text-white text-2xl lg:text-6xl font-semibold">
            Pantanal Partnership
          </h1>
          <p className="text-white text-sm lg:text-2xl">
            Promoting technology, education, and health in the Pantanal region
            of Brazil.
          </p>
          <div className="flex gap-4 text-base md:text-xl items-center">
            <Link
              href="/donate"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Donate
            </Link>
            <Link
              href="/projects"
              className="underline text-white"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
