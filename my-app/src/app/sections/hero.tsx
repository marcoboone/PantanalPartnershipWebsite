import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] bg-black/40">
      <Image
        src="/Images/heroImage.JPG"
        layout="fill"
        objectFit="cover"
        alt="Image"
      ></Image>
      <div className="absolute w-full h-full bg-black/60 backdrop-blur-sm"></div>
      <div className="absolute w-full h-full squeezetainer flex items-center">
        <div className="flex flex-col gap-4 lg:w-[50%]">
          <h1 className="text-white text-2xl lg:text-6xl">Pantanal Partnership</h1>
          <p className="text-white text-sm lg:text-2xl">
            A multi-disciplinary student project team at the University of
            Michigan that focuses projects around sustainable technology,
            education, and health in the Pantanal region of Brazil.
          </p>
        </div>
      </div>
    </div>
  );
};
