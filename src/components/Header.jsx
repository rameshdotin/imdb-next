import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4 ">
        <ThemeSwitcher />
        <Link href={"/"} className="flex gap-2 items-center">
          <span className="text-2xl font-bold bg-amber-500 rounded-lg py-1 px-2">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}
