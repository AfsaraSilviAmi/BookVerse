"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/items", label: "All Books" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

if (isPending) return null;

const user = session?.user;

const handleLogout = async () => {
  await authClient.signOut();
};

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        {/* Logo */}
       <Link
  href="/"
  className="transition-transform duration-300 hover:scale-105"
>
         <Image src="/logo.png" alt="logo" width={500} height={500} className="w-20"></Image>
        </Link>
<div className="hidden items-center gap-8 md:flex">
  <Link
  href="/"
  className="relative font-medium text-[#008B8B] transition-all duration-300 hover:text-[#5B21B6] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#008B8B] after:to-[#5B21B6] after:transition-all after:duration-300 hover:after:w-full"
>
  Home
</Link>

  {user ? (
    <>
     <Link href="/items" className="relative font-medium text-slate-700 transition-all duration-300 hover:text-[#5B21B6] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#008B8B] after:to-[#5B21B6] after:transition-all after:duration-300 hover:after:w-full">All Books</Link>
      <Link href="/about" className="relative text-[#008B8B] font-medium transition-all duration-300 hover:text-[#5B21B6] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#008B8B] after:to-[#5B21B6] after:transition-all after:duration-300 hover:after:w-full">About</Link>
      <Link href="/help" className="relative font-medium text-[#008B8B] transition-all duration-300 hover:text-[#5B21B6] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#008B8B] after:to-[#5B21B6] after:transition-all after:duration-300 hover:after:w-full">Help</Link>
    </>
  ) : (
    <>
      <Link href="/items" className="relative font-medium text-slate-700 transition-all duration-300 hover:text-[#5B21B6] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#008B8B] after:to-[#5B21B6] after:transition-all after:duration-300 hover:after:w-full">All Books</Link>
      <Link href="/about" className="relative font-medium text-slate-700 transition-all duration-300 hover:text-[#5B21B6] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#008B8B] after:to-[#5B21B6] after:transition-all after:duration-300 hover:after:w-full">About</Link>
      <Link href="/contact" className="relative font-medium text-slate-700 transition-all duration-300 hover:text-[#5B21B6] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#008B8B] after:to-[#5B21B6] after:transition-all after:duration-300 hover:after:w-full">Contact</Link>
    </>
  )}
</div>
        {/* Desktop Menu */}
        <div className="hidden items-center gap-3 md:flex">
  {user ? (
    <Dropdown>
      <Button
  isIconOnly
  className="h-auto min-w-0 rounded-full bg-transparent p-1 transition-all duration-300 hover:scale-110 hover:bg-[#A78BFA]/20"
>
        <Avatar className="ring-2 ring-[#5B21B6] ring-offset-2">
          <Avatar.Image
            src={user.image ?? ""}
            alt={user.name}
          />
          <Avatar.Fallback>
            {user.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>
      </Button>

      <Dropdown.Popover>
        <Dropdown.Menu>
          <Dropdown.Item id="profile">
            <Label>
              <div className="flex flex-col">
                <span className="font-semibold">
                  {user.name}
                </span>
                <span className="text-xs text-default-500">
                  {user.email}
                </span>
              </div>
            </Label>
          </Dropdown.Item>

          <Dropdown.Item id="my-books">
            <Link href="/my-books" className="rounded-lg transition-colors hover:bg-[#A78BFA]/20">
              My Books
            </Link>
          </Dropdown.Item>

          <Dropdown.Item id="add-book" className="rounded-lg transition-colors hover:bg-[#A78BFA]/20">
            <Link href="/books/add">
              Add Book
            </Link>
          </Dropdown.Item>

          <Dropdown.Item id="manage-books" className="rounded-lg transition-colors hover:bg-[#A78BFA]/20">
            <Link href="/books/manage">
              Manage Books
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
  id="logout"
  variant="danger"
  className="rounded-lg font-semibold text-red-500 hover:bg-red-50"
  onAction={handleLogout}
>
  Logout
</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  ) : (
    <>
      <Link href="/login">
        <Button
   className="w-full bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] text-white font-semibold transform transition-all duration-300 hover:scale-105"
>
  Login
        </Button>
      </Link>
    </>
  )}
</div>

      
       

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t md:hidden">
         <div className="flex flex-col gap-4 p-5">
          {user && (
  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
    <Avatar className="ring-2 ring-[#5B21B6]">
      <Avatar.Image
        src={user.image ?? ""}
        alt={user.name}
      />
      <Avatar.Fallback>
        {user.name?.charAt(0).toUpperCase()}
      </Avatar.Fallback>
    </Avatar>

    <div className="flex flex-col">
      <span className="font-semibold text-[#1A365D]">
        {user.name}
      </span>
      <span className="text-sm text-slate-500">
        {user.email}
      </span>
    </div>
  </div>
)}

  <Link
    href="/"
    onClick={() => setIsMenuOpen(false)}
    className="font-medium text-[#008B8B]"
  >
    Home
  </Link>

  {user ? (
    <>
      <Link
        href="/about"
        onClick={() => setIsMenuOpen(false)}
        className="font-medium text-[#008B8B]"
      >
        About
      </Link>

      <Link
        href="/help"
        onClick={() => setIsMenuOpen(false)}
        className="font-medium text-[#008B8B]"
      >
        Help
      </Link>

      <Link
        href="/my-books"
        onClick={() => setIsMenuOpen(false)}
      >
        My Books
      </Link>

      <Link
        href="/books/add"
        onClick={() => setIsMenuOpen(false)}
      >
        Add Book
      </Link>

      <Link
        href="/books/manage"
        onClick={() => setIsMenuOpen(false)}
      >
        Manage Books
      </Link>

      <Button
        color="danger"
        onPress={async () => {
          await handleLogout();
          setIsMenuOpen(false);
        }}
      >
        Logout
      </Button>
    </>
  ) : (
    <>
      <Link
        href="/explore"
        onClick={() => setIsMenuOpen(false)}
        className="font-medium text-[#008B8B]"
      >
        Explore
      </Link>

      <Link
        href="/about"
        onClick={() => setIsMenuOpen(false)}
        className="font-medium text-[#008B8B]"
      >
        About
      </Link>

      <Link
        href="/contact"
        onClick={() => setIsMenuOpen(false)}
        className="font-medium text-[#008B8B]"
      >
        Contact
      </Link>

      <Link
        href="/login"
        onClick={() => setIsMenuOpen(false)}
      >
        <Button className="w-full">
          Login
        </Button>
      </Link>

      <Link
        href="/signup"
        onClick={() => setIsMenuOpen(false)}
      >
        <Button className="w-full bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] text-white">
          Register
        </Button>
      </Link>
    </>
  )}

</div>
        </div>
      )}
    </nav>
  );
}