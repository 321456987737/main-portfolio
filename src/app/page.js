"use client";

import React from "react";
import Topsection from "@/component/topsection";

import Projects from "@/component/projects";
import Skills from "@/component/skills";
import Link from "next/link";
import Aboutme from "@/component/aboutme";
import Contactme from "@/component/contactme"
const Page = () => {
  return (
    <div className="bg-[var(--bg)] relative  overflow-x-hidden pt-16 pb-32">
       <div className="h-32 w-32 border border-[var(--accent)] absolute right-[-50px] sm:top-[150vh] top-[165vh] "/>
      <div className="md:h-[80vh] h-[100vh] ">
        <Topsection />
      </div>

      <div className="h-22 w-full flex justify-center items-center md:mt-16 mt-8">
        <div className="h-[66px] w-[70%] max-w-[650px] border-2 border-[var(--muted)] relative">
          <div className="h-[40px] w-[120px] border-2 border-[var(--muted)]  absolute right-[-2px] bottom-[-40px]" />

          <div className="flex bg-[var(--bg)] absolute top-[-7px] w-[34px]  items-center justify-center left-3">
            <div className="h-3 w-3 border border-[var(--accent)] rotate-45 bg-[var(--accent)]"></div>
            <div className="h-3 ml-[-4px] w-3 border border-[var(--accent)] rotate-45 bg-[var(--bg)]"></div>
          </div>
          <div className="flex bg-[var(--bg)] absolute bottom-[-7px] w-[34px]  items-center justify-center right-3">
            <div className="h-3 w-3 border border-[var(--accent)] rotate-45 bg-[var(--accent)]"></div>
            <div className="h-3 ml-[-4px] w-3 border  border-[var(--accent)] rotate-45 bg-[var(--bg)]"></div>
          </div>
        </div>

        <div className="absolute sm:top-[105vh] top-[130vh] right-0  h-16 w-16 border border-[var(--accent)]" />
      </div>


      <div className="flex items-center justify-center mt-32">
            <Projects />
      </div>
      <div className="w-full mx-4">
          <Skills />
      </div>
      <div>
        <Aboutme />
      </div>
      <div >
         <Contactme />
      </div>
    </div>
  );
};

export default Page;
