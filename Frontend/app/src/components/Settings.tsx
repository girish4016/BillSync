import { Avatar, AvatarFallback, AvatarImage } from "@/common/shadcn/ui/avatar"
import { Button } from "@/common/shadcn/ui/button"
import { Input } from "@/common/shadcn/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/common/shadcn/ui/select"
import currencies from '../constants/currencies.json'

function Settings() {
    return (
        <section className="p-10 bg-slate-50 w-full h-screen">
            <div className="flex flex-col">

                <div className="border border-stone-200 rounded-lg w-full text-2xl font-semibold px-8 py-3 bg-white">Settings</div>

                <div className="flex flex-row m-7">

                    <div className="flex flex-col w-1/3">
                        <span className="text-xl font-medium">Profile Information</span>
                        <span className="text-gray-400">Update your account's profile information and email address.</span>
                    </div>

                    <div className="bg-white w-2/3 pl-20 pr-10 py-5 border border-stone-200 rounded-lg flex flex-col gap-16">

                        <div className="flex flex-col">
                            <span className="text-slate-700 pb-3">Photo</span>

                            <Avatar className="w-20 h-20 mb-5" >
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>P</AvatarFallback>
                            </Avatar>

                            <Button className="w-1/3">
                                Select a new photo
                            </Button>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-slate-700 pb-3">Name</span>
                            <Input className="w-1/2 text-lg py-5 border border-stone-400" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-slate-700 pb-3">Email</span>
                            <Input className="w-1/2 text-lg py-5 border border-stone-400" />
                        </div>

                        <div className="flex flex-row-reverse">
                            <Button>Save</Button>
                        </div>

                    </div>

                </div>

                <div className="py-8">
                    <div className="border-t border-stone-300" />
                </div>

                <div className="flex flex-row m-7">

                    <div className="flex flex-col w-1/3">
                        <span className="text-xl font-medium">Payment Services</span>
                        <span className="text-gray-400">Provide your details for payment services to get paid from others.</span>
                    </div>

                    <div className="bg-white w-2/3 pl-20 pr-10 py-5 border border-stone-200 rounded-lg flex flex-col gap-16">

                        <div className="flex flex-col">
                            <span className="text-slate-700 pb-3">Paytm</span>
                            <Input placeholder="Enter Paytm Number" className="w-1/2 text-sm py-5 border border-stone-400" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-slate-700 pb-3">PhonePay</span>
                            <Input placeholder="Enter PhonePe Number" className="w-1/2 text-sm py-5 border border-stone-400" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-slate-700 pb-3">G-Pay</span>
                            <Input placeholder="Enter G-Pay Number" className="w-1/2 text-sm py-5 border border-stone-400" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-slate-700 pb-3">Default currency</span>
                            <Select>
                                <SelectTrigger className="w-1/2 py-5 border border-stone-400 text-slate-700">
                                    <SelectValue className="text-sm" placeholder="Choose" />
                                </SelectTrigger>
                                <SelectContent>
                                    {currencies.map((currency, idx) => {
                                        return (
                                            <SelectItem key={idx} value={String(idx)}>
                                                <span className="px-4">{currency.code}</span>
                                                <span className="text-slate-500">{currency.symbol}</span>
                                            </SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-row-reverse">
                            <Button>Save</Button>
                        </div>

                    </div>
                    
                </div>

                <div className="py-8">
                    <div className="border-t border-stone-300" />
                </div>

                <div className="flex flex-row m-7">

                    <div className="flex flex-col w-1/3">
                        <span className="text-xl font-medium">Update Password</span>
                        <span className="text-gray-400">Ensure your account is using a long, random password to stay secure.</span>
                    </div>

                    <div className="bg-white w-2/3 pl-20 pr-10 py-5 border border-stone-200 rounded-lg flex flex-col gap-16">

                        <div className="flex flex-col">
                            <span className="text-slate-700 pb-3">Current Password</span>
                            <Input type="password" className="w-1/2 text-sm py-5 border border-stone-400" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-slate-700 pb-3">New Password</span>
                            <Input type="password" className="w-1/2 text-sm py-5 border border-stone-400" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-slate-700 pb-3">Confirm Password</span>
                            <Input type="password" className="w-1/2 text-sm py-5 border border-stone-400" />
                        </div>
           
                        <div className="flex flex-row-reverse">
                            <Button>Save</Button>
                        </div>

                    </div>
                    
                </div>

                <div className="py-8">
                    <div className="border-t border-stone-300" />
                </div>

                <div className="flex flex-row m-7">

                    <div className="flex flex-col w-1/3">
                        <span className="text-xl font-medium">Delete Account</span>
                        <span className="text-gray-400">Permanently delete your account.</span>
                    </div>

                    <div className="bg-white w-2/3 pl-20 pr-10 py-5 border border-stone-200 rounded-lg flex flex-col gap-16">

                        <div className="flex flex-col">
                            <span className="text-slate-700 pb-3">Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</span>
                            <Button className="w-1/2 bg-red-600" >Delete Account</Button>
                        </div>

                    </div>
                    
                </div>

            </div>
        </section>
    )
}

export default Settings