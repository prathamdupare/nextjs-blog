"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/lib/action";

import { Label } from "@/components/ui/label";
import Link from "next/link";
const Loginpage = () => {
  return (
    <div className="h-full flex flex-col gap-2 items-center justify-center">
      <p className="text-[40px] mb-[30px]">Login</p>
      <form action={login} className="flex flex-col gap-2 w-2/3 md:w-1/2 ">
        <Label htmlFor="">Email</Label>
        <Input type="text" placeholder="username" name="username" />

        <Label htmlFor="">Password</Label>
        <Input type="password" placeholder="password" name="password" />
        <Button>Login with Credentials</Button>
      </form>

      <Button asChild className="bg-orange-300">
        <Link href="/api/auth/signin">LogIn with GitHub?</Link>
      </Button>
    </div>
  );
};
export default Loginpage;
