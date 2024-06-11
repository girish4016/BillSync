import { useNavigate } from "react-router-dom";
import { Input } from "@/common/shadcn/ui/input";
import { Button } from "@/common/shadcn/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/shadcn/ui/table";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";

import { NavBar } from "@/common/components/Navbar/NavBar";
import { GroupDetailsRoute } from "@/common/constants/route-name";

export const Groups = () => {
  const navigate = useNavigate();

  const rows = [];

  for (let i = 0; i < 50; i++) {
    rows.push(
      <TableRow
        key={i}
        className="text-slate-800 cursor-pointer h-[5rem]"
        onClick={() => {
          navigate(GroupDetailsRoute.replace(":groupId", String(i)));
        }}
      >
        <TableCell className="font-medium max-w-[7rem] whitespace-nowrap overflow-hidden text-ellipsis">
          Rishikesh
        </TableCell>
        <TableCell className="max-sm:hidden">5</TableCell>
        <TableCell className="max-sm:hidden">01/03/2023</TableCell>
        <TableCell className="max-sm:hidden">05/03/2023</TableCell>
        <TableCell className="text-right text-red-700">You owe ₹250</TableCell>
      </TableRow>
    );
  }

  return (
    <div className="contain-paint">
      <NavBar />
      <div className="flex flex-col px-10 max-sm:px-3">
        <h1 className="text-2xl text-slate-800 mt-6">Groups</h1>
        <div className="flex justify-between max-[480px]:flex-col max-[480px]:gap-2 py-6 sticky top-0 z-10 bg-white">
          <div
            className={
              "flex flex-row items-center text-xl px-3 text-slate-600 border-2 rounded-md border-stone-200 w-[50%] max-[480px]:w-full max-w-[30rem]"
            }
          >
            <IoSearchSharp />
            <Input
              placeholder="Search for a group..."
              className="h-10 border-0 font-normal text-base focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button className="rounded-md bg-slate-700 gap-2">
            <IoMdAddCircle />
            Create Group
          </Button>
        </div>
        <div className="flex w-full z-0 pb-6">
          <Table>
            <TableCaption>List of your Groups.</TableCaption>
            <TableHeader className="bg-slate-100">
              <TableRow>
                <TableHead>Group</TableHead>
                <TableHead className="max-sm:hidden">Members</TableHead>
                <TableHead className="max-sm:hidden">Created at</TableHead>
                <TableHead className="max-sm:hidden">Last Updated at</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>{rows}</TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
