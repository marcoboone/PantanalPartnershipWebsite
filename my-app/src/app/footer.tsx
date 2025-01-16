import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footer = () => {
  return (
    <div className="squeezetainer py-[10vh] bg-white">
      <div className="text-black w-full text-sm flex flex-col lg:flex-row sm:gap-8">
        <div className="flex flex-col gap-2 md:col-span-2 basis-2/5">
          <h2 className="font-bold">Pantanal Partnership</h2>
          <p className="max-w-[400px]">
            Pantanal Partnership is a University of Michigan student
            organization, created in 2009, with a focus on education,
            healthcare, music, and sustainable technology in the Brazilian
            Pantanal.
          </p>
        </div>

        <hr className="sm:hidden mt-4 mb-4 border-t-[1px] border-white" />

        <div className="flex flex-col gap-4 sm:flex-row justify-between basis-3/5">
          <div className="flex flex-col gap-3">
            <span className="font-bold">Navigation</span>
            <Link href="/" className=" hover:opacity-80">
              home
            </Link>
            <Link href="/aboutUs" className=" hover:opacity-80">
              about us
            </Link>
            <Link href="/projects" className=" hover:opacity-80">
              projects
            </Link>
            <Link href="/donate" className=" hover:opacity-80">
              donate
            </Link>
            <Link href="/contact" className=" hover:opacity-80">
              contact
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold">Projects</span>
            <Link href="/projects" className=" hover:opacity-80">
              project 1
            </Link>
            <Link href="/projects" className=" hover:opacity-80">
              project 2
            </Link>
            <Link href="/projects" className=" hover:opacity-80">
              project 3
            </Link>
            <Link href="/projects" className=" hover:opacity-80">
              project 4
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className=" font-bold">Contact Us</span>
            <span className=" ">pantanal-partnership@umich.edu</span>

            <span className=" ">Ann Arbor, Michigan</span>
          </div>
        </div>
      </div>

      <hr className="mt-4 lg:mt-6 border-t-[1px] border-black" />
      <div className="mt-4 text-blck flex items-center sm:justify-center gap-4">
        <Link href="https://www.linkedin.com/company/pantanal-partnership/">
          <FaLinkedin className="transform transition-transform duration-150 hover:scale-110"></FaLinkedin>
        </Link>
        <Link href="https://twitter.com/PantanalPartner">
          <FaXTwitter className="transform transition-transform duration-150 hover:scale-110"></FaXTwitter>
        </Link>
        <Link href="https://www.facebook.com/PantanalPartnership">
          <FaFacebook className="transform transition-transform duration-150 hover:scale-110"></FaFacebook>
        </Link>
      </div>
      <p className="pt-2 md:pt-4 sm:text-center text-white">
        Pantanal Partnership |{" "}
        <Link
          className="hover:opacity-80"
          href={"/hydrip-privacy-policy.pdf"}
          target="_blank"
        >
          Privacy
        </Link>
      </p>
    </div>
  );
};

export default footer;
