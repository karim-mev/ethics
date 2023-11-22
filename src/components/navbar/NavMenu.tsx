"use client";
import { ShoppingCart } from "phosphor-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="sm">
          <ShoppingCart size="18" className="" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Complete Shopping!</SheetTitle>
          <SheetDescription>
            Your Cart is Empty. Add Some Items to Checkout.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
