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
import ProductCard from "./product-card";
import { ProductsList } from "@/config/product-list";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/lib/database.types";

interface ProductType {
  products: product[] | null
};

export default async function Products({products} : ProductType) {
  const supabase = createClientComponentClient<Database>();

  // const { data: products } = await supabase.from("products").select();
  return (
    <div className="p-10">
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
            {SelectOptions.map((select, index) => (
              <SelectItem key={index} value={select.value}>
                {select.option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
