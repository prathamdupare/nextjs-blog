"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  const isActive = item.path == pathName;
  return (
    <Link
      href={item.path}
      key={item.title}
      className={`p-2 rounded-xl ${isActive ? "bg-white text-black" : ""}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
