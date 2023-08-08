"use client";
import { ShoppingCart } from "phosphor-react";
import { Button } from "../ui/button";

export default function NavMenu() {
  return (
    <Button variant="outline" size="sm">
      <ShoppingCart size="18" className="" />
    </Button>
  );
}
