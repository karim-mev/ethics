"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes, useTransition } from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { Separator } from "../ui/separator";

interface ProductCardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  product: product;
  variant?: "default" | "switchable";
  isAddedToCart?: boolean;
  onSwitch?: () => Promise<void>;
}

export default function ProductoCard({
  product,
  variant = "default",
  isAddedToCart,
  onSwitch,
  className,
  ...props
}: ProductCardProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  return (
    <Card
      className={cn("h-full rounded-lg overflow-hidden w-", className)}
      {...props}
    >
      <Link href={`/product/${product.id}`}>
        <CardHeader>
          <AspectRatio ratio={3 / 4}>
            <Image
              src={product.img ?? "/images/accessories.jpg"}
              alt={product.name}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </CardHeader>
      </Link>
      <Link href={`/product/${product.id}`}>
        <CardContent className="flex flex-col gap-2">
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.price}$</CardDescription>
        </CardContent>
      </Link>
      <Separator className="mb-2" />
      <CardFooter>
        {variant === "default" ? (
          <div className="flex flex-col w-full items- gap-2 sm:flex-row">
            <Link
              href={`/product/${product.id}`}
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "w-full",
              })}
            >
              Preview
            </Link>
            <Button
              size="sm"
              className="w-full"
              onClick={() => {
                startTransition(async () => {
                  try {
                    toast({
                      description: "Added to cart",
                    });
                  } catch (error) {
                    console.log(error);
                  }
                });
              }}
              disabled={isPending}
            >
              {isPending && <p>...</p>}
              Add to cart
            </Button>
          </div>
        ) : (
          <Button
            size="sm"
            onClick={() => {
              startTransition(async () => {
                await onSwitch?.();
              });
            }}
            disabled={isPending}
          >
            testing
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
