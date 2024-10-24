import React from "react";
import Link from "next/link";


const footer = () => {
  return (
    <div className="squeezetainer bg-hydrip-blue">

      <div className="text-black w-full text-sm flex flex-col lg:flex-row sm:gap-8">
        
        <div className="flex flex-col gap-2 md:col-span-2 basis-2/5">
          <h2 className="font-bold">Pantanal Partnership</h2>
          <p className="max-w-[400px]">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed earum magnam itaque doloremque hic dolore minus ex ipsa ipsum error ut, minima quos tempore sint, atque unde similique perspiciatis odit.
          </p>
        </div>

        <hr className = "sm:hidden mt-4 mb-4 border-t-[1px] border-white" />

        <div className="flex flex-col gap-4 sm:flex-row justify-between basis-3/5">
        <div className="flex flex-col gap-3">
          <span className="font-bold">Navigation</span>
          <Link href="/" className=" hover:opacity-80">home</Link>
          <Link href="/" className=" hover:opacity-80">about us</Link>
          <Link href="/" className=" hover:opacity-80">projects</Link>
          <Link href="/" className=" hover:opacity-80">donate</Link>
          <Link href="/" className=" hover:opacity-80">contact</Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Projects</span>
          <Link href="/" className=" hover:opacity-80">project 1</Link>
          <Link href="/" className=" hover:opacity-80">project 2</Link>
          <Link href="/" className=" hover:opacity-80">project 3</Link>
          <Link href="/" className=" hover:opacity-80">project 4</Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className=" font-bold">Contact Us</span>
          <span className=" ">info@org.com</span>
          <span className=" ">+1 888-888-8888</span>
          <span className=" ">Ann Arbor, Michigan</span>
        </div>
        </div>

      </div>

      <hr className = "mt-4 lg:mt-6 border-t-[1px] border-black" />
      <div className = "mt-4 text-blck flex items-center sm:justify-center gap-4">
        <Link href="/" target="_blank" aria-label="Facebook link">FACEBOOK</Link>
        <Link href="/" target="_blank" aria-label="Instagram link">INSTAGRAM</Link>
        <Link href="/" target="_blank" aria-label="X link">X</Link>
      </div>
      <p className="pt-2 md:pt-4 sm:text-center text-white">Hydrip LLC Established 2023 | <Link className="hover:opacity-80" href={"/hydrip-privacy-policy.pdf"} target="_blank">Privacy</Link></p>
    </div>
  );
};

export default footer;