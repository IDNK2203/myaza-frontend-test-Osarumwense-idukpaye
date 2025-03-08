// components/UserProfileDropdown.jsx
// "use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCaretDown } from "react-icons/fa";

import userPic from "../public/images/user-profile-pic.png";

const UserProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-4 w-full justify-between"
        >
          <div className="flex items-center gap-4 w-full justify-start ">
            <div className="relative h-8 w-8">
              <Image
                src={userPic} // Replace with your actual avatar image
                alt="User avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>

            {/* User Info */}
            <div className="text-left">
              <p className="font-medium text-sm">Ali Riaz</p>
              <p className="text-xs text-gray-400">Web Developer</p>
            </div>
          </div>
          <FaCaretDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Your Profile</DropdownMenuItem>
        <DropdownMenuItem>logout</DropdownMenuItem>
        <DropdownMenuItem>Delete Account</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
  //   return (
  //     <div className="relative" ref={dropdownRef}>
  //       {/* Profile Button */}
  //       <button
  //         onClick={() => setIsOpen(!isOpen)}
  //         className="flex items-center gap-2 py-2 px-3 rounded-md bg-navy-950 text-white focus:outline-none w-full"
  //       >
  //         {/* Profile Avatar */}
  //         <div className="relative h-8 w-8">
  //           <Image
  //             src={userPic} // Replace with your actual avatar image
  //             alt="User avatar"
  //             fill
  //             className="rounded-full object-cover"
  //           />
  //         </div>

  //         {/* User Info */}
  //         <div className="text-left">
  //           <p className="font-medium text-sm">Ali Riaz</p>
  //           <p className="text-xs text-gray-400">Web Developer</p>
  //         </div>

  //         {/* Dropdown Icon */}
  //         <svg
  //           className={`w-4 h-4 ml-2 transition-transform ${
  //             isOpen ? "rotate-180" : ""
  //           }`}
  //           fill="none"
  //           stroke="currentColor"
  //           viewBox="0 0 24 24"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M19 9l-7 7-7-7"
  //           />
  //         </svg>
  //       </button>

  //       {/* Dropdown Menu */}
  //       {isOpen && (
  //         <div className="absolute right-0 mt-2 w-48 bg-navy-950 border border-blue-500 rounded-md shadow-lg overflow-hidden z-10">
  //           <div className="py-1">
  //             <a
  //               href="#profile"
  //               className="block px-4 py-2 text-sm "
  //             >
  //               Your Profile
  //             </a>
  //             <a
  //               href="#settings"
  //               className="block px-4 py-2 text-sm "
  //             >
  //               Settings
  //             </a>
  //             <a
  //               href="#projects"
  //               className="block px-4 py-2 text-sm "
  //             >
  //               Projects
  //             </a>
  //             <div className="border-t border-gray-700">
  //               <a
  //                 href="#signout"
  //                 className="block px-4 py-2 text-sm text-red-400 hover:bg-red-900 hover:bg-opacity-50"
  //               >
  //                 Sign out
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
};

export default UserProfileDropdown;
