"use client"
import Link from "next/link";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <div className="flex border-b-2 items-center justify-between py-4 px-10 sm:px-20 md:px-40">
      <Link href="/">
        <h1 className="text-lg font-bold">Ethics</h1>
      </Link>
      <div className="flex gap-8 items-center">
        <Link href="/" className="hover:text-muted-foreground">
          Home
        </Link>
        <Link href="#categories" className="hover:text-muted-foreground">
          Categories
        </Link>
        <Link href="/products" className="hover:text-muted-foreground">
          Products
        </Link>
        {/* <NavMenu /> */}
      </div>
    </div>
  );
}
