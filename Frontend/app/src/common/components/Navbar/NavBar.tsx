import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/common/shadcn/ui/avatar";
import { Button } from "@/common/shadcn/ui/button";
import { TfiMenu } from "react-icons/tfi";

import { navbarItems } from "./NavBarItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/shadcn/ui/dropdown-menu";

export const NavBar = () => {
  const navigate = useNavigate();

  const pageUrl = window.location.href;

  return (
    <div className="sticky h-20 w-screen flex bg-white border-b-2 border-stone-200 items-center justify-between px-8 max-sm:px-3 ">
      <div className="flex h-full items-center text-lg text-slate-500">
        <span className=" text-3xl font-medium text-slate-800 mr-10 max-md:mr-4">
          BillSync
        </span>
        {navbarItems.map((item, index) => {
          return (
            <span
              key={index}
              className={`${
                pageUrl.includes(item.path)
                  ? "text-slate-800 underline underline-offset-4"
                  : "hover:text-slate-600"
              } cursor-pointer px-3 mx-2 max-sm:hidden `}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="flex flex-row h-full items-center gap-8 max-md:gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="bg-white text-stone-500 border rounded-md border-stone-200  hover:bg-slate-200 sm:hidden">
              <TfiMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="sm:hidden">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Groups</DropdownMenuItem>
            <DropdownMenuItem>Friends</DropdownMenuItem>
            <DropdownMenuItem>Expenses</DropdownMenuItem>
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-red-400">
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="bg-white text-slate-800 border rounded-md border-stone-200 hover:bg-white hover:border-red-400 hover:text-red-400 max-sm:hidden">
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
