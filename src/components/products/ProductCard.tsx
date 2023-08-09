import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

type ProductType = {
  img: string;
  alt: string;
  title: string;
};

export default function ProductCard({ img, alt, title }: ProductType) {
  return (
    <div className="flex flex-col items-center border-2 md:w-1/2 lg:w-1/4 h-full gap-2 rounded-lg p-2">
      <Image
        src={img}
        alt={alt}
        width={500}
        height={500}
        className="rounded-lg"
      />
      <Separator />
      <div className="flex w-full gap-2">
        <Button className="w-full">Preview</Button>
        <Button className="w-full">Add to cart</Button>
      </div>
    </div>
  );
}
