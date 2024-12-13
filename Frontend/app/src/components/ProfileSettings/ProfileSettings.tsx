import { Avatar, AvatarFallback, AvatarImage } from "@/common/shadcn/ui/avatar";
import { Button } from "@/common/shadcn/ui/button";
import { Input } from "@/common/shadcn/ui/input";
import ConfirmDialog from "@/common/shared/confirmDialog";
import { NavBar } from "@/common/components/Navbar/NavBar";

function ProfileSettings() {
  return (
    <div className="contain-paint">
      <NavBar />
      <section className="p-2 sm:p-2 lg:p-3 bg-slate-50 w-full overflow-auto">
        <div className="flex flex-col h-full">
          <div className="border border-stone-200 rounded-lg w-full text-lg font-semibold px-3 sm:px-4 py-1.5 bg-white mb-2">
            Settings
          </div>

          <div className="flex flex-col lg:flex-row flex-grow overflow-auto">
            <div className="bg-white w-full p-2 sm:p-3 lg:pl-8 lg:pr-4 py-3 border border-stone-200 rounded-lg flex flex-col gap-2 sm:gap-3 lg:gap-4 flex-grow overflow-auto">
              <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 flex-grow">
                <div className="w-full lg:w-1/2 flex flex-col gap-2 sm:gap-3">
                  <div className="flex flex-col">
                    <span className="text-slate-700 pb-1 sm:pb-1.5">Photo</span>

                    <Avatar className="w-14 h-14 mb-2 sm:mb-3">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>P</AvatarFallback>
                    </Avatar>

                    <Input
                      id="picture"
                      type="file"
                      className="w-full sm:w-1/2 border border-stone-400"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-slate-700 pb-1 sm:pb-1.5">Name</span>
                    <Input className="w-full sm:w-2/3 lg:w-1/2 text-sm py-1 sm:py-2 lg:py-2.5 border border-stone-400" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-slate-700 pb-1 sm:pb-1.5">Email</span>
                    <Input className="w-full sm:w-2/3 lg:w-1/2 text-sm py-1 sm:py-2 lg:py-2.5 border border-stone-400" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-slate-700 pb-1 sm:pb-1.5">
                      Mobile Number
                    </span>
                    <Input className="w-full sm:w-2/3 lg:w-1/2 text-sm py-1 sm:py-2 lg:py-2.5 border border-stone-400" />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-2 sm:gap-3">
                  <div className="flex flex-col">
                    <span className="text-base font-medium">
                      Update Password
                    </span>
                    <span className="text-gray-400 text-sm">
                      Ensure your account is using a long, random password to
                      stay secure.
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-slate-700 pb-1 sm:pb-1.5">
                      Current Password
                    </span>
                    <Input
                      type="password"
                      className="w-full sm:w-2/3 lg:w-1/2 text-xs py-1 sm:py-2 lg:py-2.5 border border-stone-400"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-slate-700 pb-1 sm:pb-1.5">
                      New Password
                    </span>
                    <Input
                      type="password"
                      className="w-full sm:w-2/3 lg:w-1/2 text-xs py-1 sm:py-2 lg:py-2.5 border border-stone-400"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-base font-medium">
                      Delete Account
                    </span>
                    <span className="text-gray-400 text-sm">
                      Permanently delete your account.
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-slate-700 pb-1 sm:pb-1.5">
                      Once your account is deleted, all of its resources and
                      data will be permanently deleted. Before deleting your
                      account, please download any data or information that you
                      wish to retain.
                    </span>
                    <ConfirmDialog
                      btnTitle="Delete Account"
                      btnClass="w-full sm:w-1/2 lg:w-1/3 bg-red-600"
                      DialogDescription="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-between gap-2 sm:gap-3 mt-4">
                <ConfirmDialog
                  btnTitle="Save Changes"
                  btnClass="w-full sm:w-auto"
                  DialogDescription="This action cannot be undone. This will permanently update your account details."
                />
                <Button className="w-full sm:w-auto bg-red-600">Log Out</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileSettings;
