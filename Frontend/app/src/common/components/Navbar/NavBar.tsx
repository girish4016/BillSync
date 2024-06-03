import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/common/shadcn/ui/avatar";
import { Button } from "@/common/shadcn/ui/button";

import { navbarItems } from "./NavBarItems";

export const NavBar = () => {
  const navigate = useNavigate();

  const pageUrl = window.location.href;

  return (
    <div className="sticky h-20 w-screen flex bg-white border-b-2 border-stone-200 items-center justify-between px-8 ">
      <div className="flex h-full items-center text-lg text-slate-500">
        <span className=" text-3xl font-medium text-slate-800 mr-10">
          BillSync
        </span>
        {navbarItems.map((item) => {
          return (
            <span
              className={`${
                pageUrl.includes(item.path)
                  ? "text-slate-800 underline underline-offset-4"
                  : "hover:text-slate-600"
              } cursor-pointer px-3 mx-2 `}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </span>
          );
        })}
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
