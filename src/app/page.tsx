import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories } from "@/config/category";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center justify- gap-8 py-24 px-6 sm:px-24">
      <Badge className="py-4 px-6 text-lg font-medium" variant="outline">
        More than 200 happy customers
      </Badge>
      <h1 className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl lg:leading-[1.1] lg:w-">
        Ethics, where our commitment to ethical values is at the heart of
        everything we do
      </h1>
      <h3 className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
        we're dedicated to providing you with a shopping experience that aligns
        with your values
      </h3>
      <div className="flex gap-3">
        <Button size="lg">Shop now</Button>
        <Button size="lg" variant="outline">
          Sell now
        </Button>
      </div>
      <div id="categories" className="pt-28">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl mb-4">
          Categories
        </h2>
        <h3 className="text-muted-foreground leading-normal text-lg sm:text-lg sm:leading-7">
          Explore our categories and find the best products that aligns with
          your values
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 w-full justify-center border-black">
        {categories.map((category, index) => (
          <div
            className="relative w-5/6 md:w-[45%] lg:w-[23%] rounded-lg"
            key={index}
          >
            <Link href={`/categories/${category.link}`}>
              <div className="absolute z-10 bg-black/60 w-full h-full rounded-lg hover:bg-black/70" />
              <Image
                src={category.imageSrc}
                alt="categories"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={500}
                height={500}
                className="w-full h-full rounded-lg"
              />
              <div className="absolute text-white text-3xl w-full h-full z-20 top-0 flex items-center justify-center md:text-2xl">
                <h2>{category.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
