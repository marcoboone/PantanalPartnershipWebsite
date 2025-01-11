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
            DONATE
          </h1>
        </div>
      </div>

      <div className="squeezetainer py-[10vh] bg-slate-50">
        <div className = "flex flex-col gap-4 py-4">
        <span className="text-sm text-blue-500">
          WE THANK YOU FOR YOUR SUPPORT
        </span>
        <h2 className=" text-3xl  lg:text-4xl font-semibold">We Appreciate your support!</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-12">
          <div className="flex flex-col gap-4 col-span-1  ">
            <h2 className=" text-2xl  lg:text-3xl font-semibold">Donate Online</h2>
            <p className="text-lg lg:text-xl ">
             Click the button below, and add a comment to your donation that contains &quot;Pantanal Partnership&quot;
            </p>
            <div className = "py-4">
          <Link href = "https://leadersandbest.umich.edu/find/#!/give/basket/fund/320061?f=138198395" className = "text-white bg-blue-500 p-3 rounded-lg hover:opacity-80">Donate Online</Link>
          </div>
          </div>

          <div className="flex flex-col gap-4 col-span-1">
            <h2 className=" text-2xl  lg:text-3xl font-semibold">
              Donate by Mail
            </h2>
            <ul className = "text-lg lg:text-xl">
            <li>To: University of Michigan</li>
            <li>​Memo: Pantanal Partnership</li>
            <li>500 S. State Street</li>
            <li>Ann Arbor, MI 48109 USA</li>
            </ul>
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
