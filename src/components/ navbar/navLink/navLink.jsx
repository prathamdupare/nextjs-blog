"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  const isActive = item.path == pathName;
  return (
    <Button asChild variant={`${isActive ? "" : "outline"}`} className="">
      <Link href={item.path} key={item.title}>
        {item.title}
      </Link>
    </Button>
  );
};

export default NavLink;
