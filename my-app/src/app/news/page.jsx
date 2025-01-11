import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative squeezetainer py-[10vh] flex flex-col items-center gap-6 bg-slate-100">
      <Link href="/">
        <span className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded shadow-md">
          Home
        </span>
      </Link>
      <div className="relative w-full flex justify-center">
        <Image
          src="/Images/news1.png"
          layout="intrinsic"
          width={914} // Replace with the actual width of your image
          height={1186} // Replace with the actual height of your image
          objectFit="contain"
          alt="News 1"
        />
      </div>
      <div className="relative w-full flex justify-center">
        <Image
          src="/Images/news2.png"
          layout="intrinsic"
          width={914} // Replace with the actual width of your image
          height={1186} // Replace with the actual height of your image
          objectFit="contain"
          alt="News 2"
        />
      </div>
    </div>
  );
};

export default Hero;