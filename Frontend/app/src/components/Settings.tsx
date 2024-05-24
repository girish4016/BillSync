import { Avatar, AvatarFallback, AvatarImage } from "@/common/shadcn/ui/avatar"
import { Button } from "@/common/shadcn/ui/button"
import { Input } from "@/common/shadcn/ui/input"

function Settings() {
    return (
        <section className="p-4 sm:p-4 lg:p-6 bg-slate-50 w-full h-screen overflow-auto">
            <div className="flex flex-col h-full">

                <div className="border border-stone-200 rounded-lg w-full text-2xl font-semibold px-6 sm:px-8 py-3 bg-white mb-4">
                    Settings
                </div>

                <div className="flex flex-col lg:flex-row flex-grow overflow-auto">

                    <div className="bg-white w-full p-4 sm:p-6 lg:pl-16 lg:pr-8 py-5 border border-stone-200 rounded-lg flex flex-col gap-4 sm:gap-6 lg:gap-8 flex-grow overflow-auto">

                        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 flex-grow">

                            <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
                                <div className="flex flex-col">
                                    <span className="text-slate-700 pb-2 sm:pb-3">Photo</span>

                                    <Avatar className="w-20 h-20 mb-4 sm:mb-5">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>P</AvatarFallback>
                                    </Avatar>

                                    <Button className="w-full sm:w-1/3">
                                        Choose photo
                                    </Button>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-slate-700 pb-2 sm:pb-3">Name</span>
                                    <Input className="w-full sm:w-2/3 lg:w-1/2 text-lg py-2 sm:py-3 lg:py-4 border border-stone-400" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-slate-700 pb-2 sm:pb-3">Email</span>
                                    <Input className="w-full sm:w-2/3 lg:w-1/2 text-lg py-2 sm:py-3 lg:py-4 border border-stone-400" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-slate-700 pb-2 sm:pb-3">Mobile Number</span>
                                    <Input className="w-full sm:w-2/3 lg:w-1/2 text-lg py-2 sm:py-3 lg:py-4 border border-stone-400" />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
                                <div className="flex flex-col">
                                    <span className="text-xl font-medium">Update Password</span>
                                    <span className="text-gray-400">Ensure your account is using a long, random password to stay secure.</span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-slate-700 pb-2 sm:pb-3">Current Password</span>
                                    <Input type="password" className="w-full sm:w-2/3 lg:w-1/2 text-sm py-2 sm:py-3 lg:py-4 border border-stone-400" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-slate-700 pb-2 sm:pb-3">New Password</span>
                                    <Input type="password" className="w-full sm:w-2/3 lg:w-1/2 text-sm py-2 sm:py-3 lg:py-4 border border-stone-400" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-xl font-medium">Delete Account</span>
                                    <span className="text-gray-400">Permanently delete your account.</span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-slate-700 pb-2 sm:pb-3">Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</span>
                                    <Button className="w-full sm:w-1/2 lg:w-1/3 bg-red-600">Delete Account</Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row-reverse gap-4 sm:gap-5">
                            <Button className="w-full sm:w-auto">Save</Button>
                            <Button className="w-full sm:w-auto bg-red-600">Log Out</Button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Settings
