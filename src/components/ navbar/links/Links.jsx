"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../navLink/navLink";
import { Button } from "@/components/ui/button";

const Links = () => {
  const [open, setOpen] = useState(true);
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
    <>
      <div className="flex items-center gap-6 hidden md:flex">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}{" "}
        {session ? (
          <></>
        ) : (
          <div>
            <Button>Login</Button>

            <Button>Register</Button>
          </div>
        )}
      </div>
      {open && (
        <div>
          <Sheet>
            <SheetTrigger className="md:hidden">Menu</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <div className="flex items-center flex-col gap-6 md:flex">
                  {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                  ))}{" "}
                  {session ? (
                    <></>
                  ) : (
                    <NavLink item={{ title: "Admin", path: "/login" }} />
                  )}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};

export default Links;
