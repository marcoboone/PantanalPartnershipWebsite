"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";

type NavItemProps = {
  children: ReactNode;
  href?: string;
  clickFunction?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({
  children,
  href = "",
  clickFunction,
}) => {
  return (
    <Link
      onClick={clickFunction}
      className="text-md tracking-wide px-6 hover:opacity-70 transition-all duration-300"
      href={href}
    >
      {children}
    </Link>
  );
};

type MenuButtonProps = {
  isOpen: boolean;
  handler: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, handler }) => {
  return (
    <button
      onClick={handler}
      className="md:hidden cursor-pointer hamburger-button overflow-hidden text-black"
      aria-label="Navigation Button"
    >
      <svg
        stroke="black"
        fill="none"
        className={`hamburger ` + (isOpen ? "hamburger-close" : "")}
        viewBox="-10 -10 120 120"
        width="50"
      >
        <path
          className={"line " + (isOpen ? "line-close" : "")}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        ></path>
      </svg>
    </button>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevState) => !prevState);
  };

  const resetNav = () => {
    setNav(false);
  };

  return (
    <>
      <div
        className={
          (nav ? "shadow" : "") +
          " flex items-center justify-between fixed z-50 w-full squeezetainer bg-white top-0 h-nav text-black"
        }
      >
        <Link onClick={resetNav} href="/">
          Pantanal Partnership
        </Link>
        <div id="navbar-links" className={"max-md:hidden md:block"}>
          <NavItem href={"/"}>about us</NavItem>
          <NavItem href={"/"}>projects</NavItem>
          <NavItem href={"/"}>donate</NavItem>
          <NavItem href={"/"}>contact</NavItem>
        </div>

        {nav ? (
          <MenuButton isOpen={true} handler={resetNav}></MenuButton>
        ) : (
          <MenuButton isOpen={false} handler={handleNav}></MenuButton>
        )}
      </div>
      <div className="relative">
        <div
          id="navbar-links"
          className={
            (nav ? "" : "translate-y-[-100%]") +
            " duration-[.2s] ease-in fixed top-0 h-screen w-screen bg-white z-10 md:hidden"
          }
        >
          <div className="flex flex-col pt-[15vh] px-6 gap-8 text-lg text-black">
            <NavItem clickFunction={resetNav} href={"/"}>
              home
            </NavItem>
            <NavItem clickFunction={resetNav} href={"/"}>
              about us
            </NavItem>
            <NavItem clickFunction={resetNav} href={"/"}>
              projects
            </NavItem>
            <NavItem clickFunction={resetNav} href={"/"}>
              donate
            </NavItem>
            <NavItem clickFunction={resetNav} href={"/"}>
              contact
            </NavItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
