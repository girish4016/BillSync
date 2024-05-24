import { Avatar, AvatarFallback, AvatarImage } from "@/common/shadcn/ui/avatar";
import { Button } from "@/common/shadcn/ui/button";
import { Input } from "@/common/shadcn/ui/input";
import { IoSearchSharp } from "react-icons/io5";

interface INavBarProps {
  isHomePage?: boolean;
}

export const NavBar = ({ isHomePage }: INavBarProps) => {
  return (
    <div className="sticky h-20 w-screen flex text-3xl font-medium text-slate-800 bg-white border-b-2 border-stone-200 items-center justify-between px-8 ">
      BillSync
      <div
        className={
          isHomePage === true
            ? "flex flex-row items-center text-xl px-3 text-slate-600 border-2 rounded-md border-stone-200 w-[50%] max-w-[37.5rem] max-md:scale-0 max-md:max-w-0 max-md:p-0"
            : "scale-0"
        }
      >
        <IoSearchSharp />
        <Input
          placeholder="Search for your trips..."
          className="border-0 font-normal text-base focus-visible:ring-0 focus-visible:ring-offset-0"
        ></Input>
      </div>
      <div className="flex flex-row h-full items-center gap-8">
        <Button className="bg-white text-slate-800 border rounded-md border-stone-200 hover:bg-white hover:border-slate-800 max-md:max-w-0 max-md:p-0 max-md:scale-0">
          Log Out
        </Button>
        <Avatar className="text-xl h-12 w-12 cursor-pointer">
          <AvatarImage src="" />
          <AvatarFallback>BS</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
