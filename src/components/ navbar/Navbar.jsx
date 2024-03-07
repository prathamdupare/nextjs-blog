import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="h-[100px] flex items-center justify-between ">
      <div className="font-bold text-lg">Logo</div>
      <div>
        {" "}
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
