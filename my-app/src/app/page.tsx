import "./globals.css";

import { Hero } from "@/app/sections/hero";
import { About } from "@/app/sections/about";
import { News } from "@/app/sections/news";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <News></News>
    </div>
  );
}