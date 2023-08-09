"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { SelectOptions } from "@/config/Select";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { ProductsList } from "@/config/product-list";

type TitleType = {
  title: string | undefined;
};

export default function Products({ title }: TitleType) {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-2 mt- mb-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <h3 className="text-muted-foreground">{`Best ${title} for you`}</h3>
      </div>
      <div className="flex gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button>Filter</Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col w-[400px] sm:w-[540px]">
            <SheetHeader className="px-1">
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <Separator />
            <div>
              <h3>Price range ($)</h3>
            </div>
          </SheetContent>
        </Sheet>
        <Select>
          <SelectTrigger className="w-[12rem]">
            <SelectValue placeholder="sort" />
          </SelectTrigger>
          <SelectContent>
            {SelectOptions.map((select) => (
              <SelectItem value={select.value}>{select.option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-10">
        {ProductsList.map((product) => (
          <ProductCard
            img={product.img}
            alt={product.alt}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
}
