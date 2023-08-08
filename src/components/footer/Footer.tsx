"use client";
import Link from "next/link";
import { FacebookLogo, InstagramLogo } from "phosphor-react";
export default function Footer() {
  return (
    <div className="flex gap-4 justify-between items-center border-t-2 py-8 px-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-xl">Ethics</h1>
        <h3 className="text-muted-foreground">
          made by <span className="font-bold">karimev</span>
        </h3>
      </div>
      <h3 className="text-md">
        Navigate through our curated selection and find products that align with
        your preferences and needs
      </h3>
      <div className="flex gap-2">
        <Link href="https://instagram.com">
          <InstagramLogo size={32} />
        </Link>
        <Link href="https://facebook.com">
          <FacebookLogo size={32} />
        </Link>
      </div>
    </div>
  );
}
