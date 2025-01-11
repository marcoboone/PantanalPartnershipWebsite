import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
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
            ABOUT US
          </h1>
        </div>
      </div>

      <div className="squeezetainer py-[10vh] bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-12">
          <div className="flex flex-col gap-4 col-span-1 justify-center ">
            <span className="text-sm text-blue-500">ONE SENTENCE</span>
            <h2 className=" text-3xl  lg:text-4xl font-semibold">
              Our mission
            </h2>
            <p className="text-lg lg:text-xl ">
              Pantanal Partnership seeks to use sustainable technology and
              community-oriented design as a medium to improve quality of life
              for residents of the Pantanal, expand research and environmental
              stewardship in the Pantanal region of Brazil, and equip our
              members with technical skills and experience engaging with
              different cultures.
            </p>
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
      <div className="squeezetainer py-[10vh]">
        <div className="flex flex-col gap-4 py-4">
          <span className="text-sm text-blue-500">OUR VIPS</span>
          <h2 className="text-3xl lg:text-4xl font-semibold">BOARD</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-6">
          <div className="aspect-square relative shadow-md col-span-1 row-span-1">
            <Image
              src="/Images/president.JPG"
              layout="fill"
              objectFit="cover"
              alt="Image"
              className="rounded-lg"
            ></Image>
            <div className="absolute bottom-0 flex items-center m-2">
              <div className="p-4 bg-white bg-opacity-60 rounded-lg">
                <h2 className="text-black text-lg font-semibold">John Doe</h2>
                <h3 className="text-black text-lg font-semibold">President</h3>
              </div>
            </div>
          </div>
          <div className="aspect-square relative shadow-md col-span-1 row-span-1">
            <Image
              src="/Images/vicePresident.JPG"
              layout="fill"
              objectFit="cover"
              alt="Image"
              className="rounded-lg"
            ></Image>
            <div className="absolute bottom-0 flex items-center m-2">
              <div className="p-4 bg-white bg-opacity-60 rounded-lg">
                <h2 className="text-black text-lg font-semibold">John Doe</h2>
                <h3 className="text-black text-lg font-semibold">President</h3>
              </div>
            </div>
          </div>
          <div className="aspect-square relative shadow-md col-span-1 row-span-1">
            <Image
              src="/Images/financeChair.JPG"
              layout="fill"
              objectFit="cover"
              alt="Image"
              className="rounded-lg"
            ></Image>
            <div className="absolute bottom-0 flex items-center m-2">
              <div className="p-4 bg-white bg-opacity-60 rounded-lg">
                <h2 className="text-black text-lg font-semibold">John Doe</h2>
                <h3 className="text-black text-lg font-semibold">President</h3>
              </div>
            </div>
          </div>
          <div className="aspect-square relative shadow-md col-span-1 row-span-1">
            <Image
              src="/Images/marketingChair.JPG"
              layout="fill"
              objectFit="cover"
              alt="Image"
              className="rounded-lg"
            ></Image>
            <div className="absolute bottom-0 flex items-center m-2">
              <div className="p-4 bg-white bg-opacity-60 rounded-lg">
                <h2 className="text-black text-lg font-semibold">John Doe</h2>
                <h3 className="text-black text-lg font-semibold">President</h3>
              </div>
            </div>
          </div>
        </div>
        <span>NOT SHOWN: john doe &lpar; president &rpar;</span>
      </div>
      <div className="squeezetainer py-[10vh] bg-slate-50">
        <div className="flex flex-col gap-4">
          <span className="text-sm text-blue-500">MORE ABOUT US</span>
          <h2 className="text-3xl lg:text-4xl font-semibold">Our Story</h2>
          <p className="text-lg lg:text-xl">
            Pantanal Partnership is a University of Michigan student
            organization, created in 2009, with a focus on education,
            healthcare, music, and sustainable technology in the Brazilian
            Pantanal. Initially, students focused their energies on the
            construction of the Pantanal Center for Education and Research
            (PCER) and outfitting the facility with a solar power system, a
            biosand water filtration system, wind turbines, and biodigesters.
          </p>
          <p className="text-lg lg:text-xl">
            Since its initial formation, Pantanal Partnership has shifted to
            focus primarily on community-oriented design, working with community
            members in the Pantanal to determine needs, and designing
            sustainable technology that fits within the diverse culture of the
            area. Each year members research potential projects within the
            organization's scope, choose a focus, then design and prototype
            their project.
          </p>
          <p className="text-lg lg:text-xl">
            Following the Winter term at the University of Michigan, students
            travel to Brazil and implement their project over the span of one
            month, during which time they connect with Brazil's rich history and
            the Portuguese language.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
