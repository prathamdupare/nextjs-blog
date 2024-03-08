import Link from "next/link";
import Links from "./links/Links";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div className="h-[100px] flex items-center justify-between ">
      <div className="font-bold text-lg">Logo</div>
      <div className="flex gap-2">
        {" "}
        <Links />
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
