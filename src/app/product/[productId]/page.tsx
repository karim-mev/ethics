import AddToCartForm from "@/components/cart/add-to-cart-form";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "@/lib/database.types";

export const metadata: Metadata = {
  title: "Product",
  description: "best product that aligns with your values",
};

interface ProductProps {
  params: {
    productId: string;
  };
}

export const revalidate = 0;

export default async function page({ params }: ProductProps) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: product } = await supabase
    .from("products")
    .select()
    .eq("id", `${params.productId}`);
  console.log(product);
  return (
    <div className="flex flex-wrap items- gap-14 px-2 sm:flex-nowrap sm:px-4 md:px-32 my-7 w-full">
      <Image
        src={`${product ? product[0].img : "/images/accessories.jpg"}`}
        alt="product"
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        // fill
        width={500}
        height={500}
        className="object-cover w-full"
      />
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-3 w-full">
          {/* <h2>{product.name}</h2> */}
          <h2 className="text-3xl font-bold">{product && product[0].name}</h2>
          <h2 className="text-xl text-muted-foreground">
            {product && product[0].price}$
          </h2>
          <Separator className="my-4" />
          <AddToCartForm productId={1} />
          <Separator className="my-4" />
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                {product && product[0].description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
