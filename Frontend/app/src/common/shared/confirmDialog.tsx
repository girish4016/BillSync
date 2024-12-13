import { Button } from "@/common/shadcn/ui/button"
import { Input } from "@/common/shadcn/ui/input"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/common/shadcn/ui/alert-dialog"

type propType = {
  btnTitle: string,
  btnClass: string,
  DialogDescription:string
}

function ConfirmDialog({ btnTitle, btnClass,DialogDescription }: propType) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={btnClass}>{btnTitle}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {DialogDescription}
            <Input type="password" className="mt-5 border border-stone-400" placeholder="Enter your password" />
            
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmDialog