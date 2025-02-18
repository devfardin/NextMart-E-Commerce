"use client"
import Logo from "@/assets/svgs/LogoWithText";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { logOut } from "@/services/AuthService";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/contants";

export default function Navbar() {
  const { user, setIsLoading} = useUser();
  const pathname = usePathname()
  const router = useRouter();
  const handleLogout = () => {
    logOut();
    setIsLoading(true);
    if(protectedRoutes.some(route => pathname.match(route))) {
      router.push('/');
    }
  }
  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <Link href='/' className="text-2xl font-black flex items-center">
          <Logo />
        </Link>
        <div className="max-w-md  flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <nav className="flex gap-2">
          <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Button variant="outline" className="rounded-full p-0  size-10">
            <ShoppingBag />
          </Button>
          {
            user ? <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>{(user?.name).slice(0,1)}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="rounded hover:bg-[#F4F4F5] cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="rounded hover:bg-[#F4F4F5] cursor-pointer">Setting</DropdownMenuItem>
                <Link href='/create-shop'>
                <DropdownMenuItem className="rounded hover:bg-[#F4F4F5] cursor-pointer">Create Shop</DropdownMenuItem>
                <DropdownMenuSeparator />
                </Link>
                <DropdownMenuItem onClick={handleLogout} className="rounded hover:bg-[#F4F4F5] cursor-pointer"> Log Out </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
              :
              <Link href='/login'>
                <Button variant="outline" className="!py-5 !px-7 text-lg font-medium hover:bg-primary hover:text-white rounded">
                  Login
                </Button>
              </Link>
          }
        </nav>
      </div>
    </header>
  );
}