import { NavBar } from "@/common/components/Navbar/NavBar";
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
import moment from "moment";
import { GrMoney, GrTransaction } from "react-icons/gr";
import { IoMdPersonAdd } from "react-icons/io";

export const GroupDetails = () => {
  const groupDetails = {
    name: "Rishikesh",
    expnseList: [
      {
        description: "energy",
        paidBy: "girish",
        addedAt: new Date("2023-06-25"),
        paidById: 1,
        amount: 69,
        amountOwed: -23,
      },
    ],
  };
  for (let i = 0; i < 99; i++) {
    groupDetails.expnseList.push(groupDetails.expnseList[0]);
  }

  return (
    <div className="contain-paint">
      <NavBar />
      <div className="flex flex-col px-10 max-sm:px-3">
        <div className="py-6 z-10 flex bg-white items-center gap-2 sticky top-0 max-sm:flex-col">
          <span className="text-2xl text-slate-800 max-sm:mb-3 max-sm:border-b-4">
            {groupDetails.name}
          </span>
          <Button className="rounded-md bg-slate-700 gap-2 ml-auto max-sm:ml-0 max-sm:w-full">
            <GrMoney />
            Add Expense
          </Button>
          <Button className="rounded-md bg-slate-700 gap-2 max-sm:w-full">
            <IoMdPersonAdd />
            Add Member
          </Button>
          <Button className="rounded-md bg-slate-700 gap-2 max-sm:w-full">
            <GrTransaction />
            Settle Up
          </Button>
        </div>
        <div className="flex w-full z-0 pb-6">
          <Table>
            <TableCaption>List of Expenses.</TableCaption>
            <TableHeader className="bg-slate-100">
              <TableRow>
                <TableHead>Paid By</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="max-sm:hidden">Added at</TableHead>
                <TableHead className="w-[7rem]">Amount</TableHead>
                <TableHead className="w-[7rem]">Your Share</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {groupDetails.expnseList.map((expense) => {
                return (
                  <TableRow className="cursor-pointer">
                    <TableCell>{expense?.paidBy}</TableCell>
                    <TableCell>{expense?.description}</TableCell>
                    <TableCell className="max-sm:hidden">
                      {moment(expense?.addedAt).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>{expense?.amount}</TableCell>
                    <TableCell
                      className={
                        expense?.amountOwed >= 0
                          ? "text-green-700"
                          : "text-red-700"
                      }
                    >
                      {expense?.amountOwed}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
