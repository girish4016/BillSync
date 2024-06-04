import { Input } from "@/common/shadcn/ui/input";
import { Button } from "@/common/shadcn/ui/button";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";

import { NavBar } from "@/common/components/Navbar/NavBar";

export const Groups = () => {
  return (
    <div>
      <NavBar />
      <div className="w-screen flex justify-between mt-12 px-8">
        <div
          className={
            "flex flex-row items-center text-xl px-3 text-slate-600 border-2 rounded-md border-stone-200 w-[50%] max-w-[20rem]"
          }
        >
          <IoSearchSharp />
          <Input
            placeholder="Search for a group..."
            className="border-0 font-normal text-base focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <Button className="rounded-md bg-slate-700 gap-2">
          <IoMdAddCircle />
          Create Group
        </Button>
      </div>
    </div>
  );
};
