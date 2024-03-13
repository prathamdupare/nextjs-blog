"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/lib/action";
import { useFormState } from "react-dom";

const Registerpage = () => {
  const [state, formAction] = useFormState(register, undefined);

  return (
    <div className="h-full  flex flex-col items-center justify-center">
      <p className="text-[40px] mb-[30px]">Register</p>
      <form action={register} className="flex flex-col gap-3 w-3/4 md:w-1/2 ">
        <Label htmlFor="">Username</Label>
        <Input type="text" placeholder="username" name="username" />
        <Label htmlFor="">Email</Label>
        <Input type="email" placeholder="email" name="email" />

        <Label htmlFor="">Password</Label>
        <Input type="password" placeholder="password" name="password" />

        <Label htmlFor="">Confirm Password</Label>
        <Input
          type="password"
          placeholder="password again"
          name="passwordRepeat"
        />
        <Button>Register</Button>
      </form>
    </div>
  );
};
export default Registerpage;
