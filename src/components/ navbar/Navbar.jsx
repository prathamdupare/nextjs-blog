"use client";

import Link from "next/link";
import Links from "./links/Links";
import { ModeToggle } from "../mode-toggle";

import Image from "next/image";

import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="h-[100px] flex items-center justify-between ">
      <Link className="font-bold text-lg hidden md:block" href="/">
        Logo
      </Link>
      <div className="flex gap-2 items-center">
        {" "}
        <Links />
        <ModeToggle />
      </div>

      <div>
        {!session ? (
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/login">LogIn</Link>
            </Button>

            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        ) : (
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-full"
              alt="hlh"
              width={30}
              height={30}
              src={session.user?.image}
            />
            <Button asChild>
              <Link href="/api/auth/signout">SignOut</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
