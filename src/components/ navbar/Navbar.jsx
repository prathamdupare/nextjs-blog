import Link from "next/link";
import Links from "./links/Links";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div className="h-[100px] flex items-center justify-between ">
      <Link className="font-bold text-lg" href="/">
        Logo
      </Link>
      <div className="flex gap-2">
        {" "}
        <Links />
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
