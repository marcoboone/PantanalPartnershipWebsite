import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div className="squeezetainer py-[10vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-12">
        <div className="flex flex-col gap-6 col-span-1 ">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-blue-500">WHO ARE WE</span>
            <h2 className=" text-3xl  lg:text-4xl font-semibold">About Us</h2>
          </div>
          <p className="text-lg lg:text-xl ">
            Pantanal Partnership seeks to use sustainable technology and
            community-oriented design as a medium to improve quality of life for
            residents of the Pantanal, expand research and environmental
            stewardship in the Pantanal region of Brazil, and equip our members
            with technical skills and experience engaging with different
            cultures.
          </p>
          <div>
          <Link href = "/aboutUs" className = "text-white bg-blue-500 p-3 rounded-lg hover:opacity-80">more about us</Link>
          </div>
        </div>

        <div className="col-span-1 aspect-video relative shadow-md">
          <Image
            src="/Images/aboutUsImage.JPG"
            layout="fill"
            objectFit="cover"
            alt="Image"
            className="rounded-lg"
          ></Image>
        </div>
      </div>
    </div>
  );
};
