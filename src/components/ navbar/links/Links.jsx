import Link from "next/link";
import React from "react";
import NavLink from "../navLink/navLink";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;
  return (
    <div className="flex items-center gap-6">
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}{" "}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Admin", path: "/login" }} />}
          <button className="p-2 bg-white text-black rounded-xl">Logout</button>
        </>
      ) : (
        <NavLink item={{ title: "Admin", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
